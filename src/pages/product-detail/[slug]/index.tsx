import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Manrope } from 'next/font/google';
import { ParsedUrlQuery } from 'querystring';

import {
  getCategories,
  getProduct,
  getProductsSlug,
} from '@/lib/sanity.client';

import { TSlugPayload } from '@/types';

import Header from '@/components/common/header/header.component';
import Footer from '@/components/common/footer/footer.component';
import Product from '@/components/product-detail/product/product.component';

const manrope = Manrope({ subsets: ['latin'] });

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: TSlugPayload = await getProductsSlug();
  const paths = arr.map(({ slug }) => {
    return {
      params: { slug },
    };
  });
  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;
  const [categories, product] = await Promise.all([
    getCategories(),
    getProduct(slug),
  ]);
  return { props: { product, categories } };
};

export default function Home({
  product,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={`${manrope.className}`}>
      <Header categories={categories} />
      <Product product={product} categories={categories} />
      <Footer />
    </div>
  );
}

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Manrope } from 'next/font/google';
import { groq } from 'next-sanity';
import { ParsedUrlQuery } from 'querystring';

import client from '@/lib/sanity.client';

import { ICategory, IProduct, TSlugPayload } from '@/types';

import Header from '@/components/header/header.component';
import Footer from '@/components/footer/footer.component';
import { getCategoriesQuery } from '@/components/products-list/category-links.component';

import Product from './components/product/product.component';

const manrope = Manrope({ subsets: ['latin'] });

const getProductsSlug = groq`
  *[_type=="product"]{
    "slug": slug.current,
}
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: TSlugPayload = await client.fetch(getProductsSlug);
  const paths = arr.map(({ slug }) => {
    return {
      params: { slug },
    };
  });
  return { paths, fallback: false };
};

const getProduct = groq`
*[_type=="product" && slug.current==$slug][0]{
  _id,
  images,
  isNew,
  name,
  description,
  price,
  features,
  includes,
  gallery,
  others[]->,
}
`;

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  params,
}) => {
  if (preview) {
    return { props: { preview } };
  }
  const { slug } = params as Params;
  const product: IProduct = await client.fetch(getProduct, {
    slug,
  });
  const categories: ICategory[] = await client.fetch(getCategoriesQuery);
  return { props: { preview, product, categories } };
};

export default function Home({
  product,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={`${manrope.className}`}>
      <Header />
      <Product product={product} categories={categories} />
      <Footer />
    </div>
  );
}

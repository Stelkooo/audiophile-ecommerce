import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Manrope } from 'next/font/google';
import { groq } from 'next-sanity';
import { ParsedUrlQuery } from 'querystring';

import client from '@/lib/sanity.client';

import { ICategory, IProduct, TSlugPayload } from '@/types';

import Header from '@/components/common/header/header.component';
import Footer from '@/components/common/footer/footer.component';
import Product from '@/components/product-detail/product/product.component';
import { getCategoriesQuery } from '@/components/common/category-links/category-links.component';

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
  cartImage,
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
      <Header categories={categories} />
      <Product product={product} categories={categories} />
      <Footer />
    </div>
  );
}

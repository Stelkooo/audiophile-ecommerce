import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';
import { Manrope } from 'next/font/google';
import { groq } from 'next-sanity';
import { ParsedUrlQuery } from 'querystring';

import client from '@/lib/sanity.client';

import { ICategory, IProduct, TSlugPayload } from '@/types';

import CategoryLinks, {
  getCategoriesQuery,
} from '@/components/global/products-list/category-links.component';
import Header from '@/components/global/header/header.component';
import Footer from '@/components/global/footer/footer.component';
import About from '@/components/global/about/about.component';
import Button from '@/components/global/button/button.component';
import ProductCard from '@/components/global/product-card/product-card.component';
import Link from 'next/link';

const manrope = Manrope({ subsets: ['latin'] });

const PreviewCategoryLinks = lazy(
  () =>
    import('@/components/global/products-list/preview-category-links.component')
);

const getCategoriesSlug = groq`
  *[_type=="category"]{
    "slug": slug.current,
}
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: TSlugPayload = await client.fetch(getCategoriesSlug);
  const paths = arr.map(({ slug }) => {
    return {
      params: { slug },
    };
  });
  return { paths, fallback: false };
};

const getCategory = groq`
*[_type=="category" && slug.current==$slug][0]{
  name,
  "products": *[_type=="product" && references(^._id)]{
    categoryImages,
    _id,
    isNew,
    name,
    description,
    slug,
    category-> {
      name
    },
  }
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
  const categories: ICategory[] = await client.fetch(getCategoriesQuery);
  const category: ICategory = await client.fetch(getCategory, {
    slug,
  });
  return { props: { preview, categories, category } };
};

export default function Home({
  preview,
  categories,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <PreviewCategoryLinks />
      </PreviewSuspense>
    );
  }
  return (
    <div className={`${manrope.className}`}>
      <Header categories={categories} />
      <main>
        <div className="bg-neutral-900 py-8 text-center text-white">
          <h1 className="heading-small">{category.name}</h1>
        </div>
        <div className="mx-auto mb-[7.5rem] mt-16 grid w-[327px] gap-y-[7.5rem] text-center">
          {category.products.map((product: IProduct) => (
            <ProductCard product={product} key={product._id}>
              <div className="justify-self-center">
                <Link href={`/product-detail/${product.slug?.current}`}>
                  <Button type="primary">
                    <span>See Product</span>
                  </Button>
                </Link>
              </div>
            </ProductCard>
          ))}
          <CategoryLinks categories={categories} />
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}

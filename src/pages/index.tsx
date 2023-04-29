import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';
import { Manrope } from 'next/font/google';

import client from '@/lib/sanity.client';

import { ICategory } from '@/types';

import CategoryLinks, {
  getCategoriesQuery,
} from '@/components/global/products-list/category-links.component';
import Header from '@/components/global/header/header.component';
import Footer from '@/components/global/footer/footer.component';
import About from '@/components/global/about/about.component';

import Hero from '@/components/index/components/hero/hero.component';
import FeaturedProducts from '@/components/index/components/featured-products/featured-products.component';

const manrope = Manrope({ subsets: ['latin'] });

const PreviewCategoryLinks = lazy(
  () =>
    import('@/components/global/products-list/preview-category-links.component')
);

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }
  const categories: ICategory[] = await client.fetch(getCategoriesQuery);
  return { props: { preview, categories } };
};

export default function Home({
  preview,
  categories,
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
        <Hero />
        <div className="mx-auto grid w-[327px] gap-y-[7.5rem] pb-[7.5rem] pt-10 md:w-[689px] xl:w-[1110px] xl:gap-y-40 xl:pb-52 xl:pt-[7.5rem]">
          <CategoryLinks categories={categories} />
          <FeaturedProducts />
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}

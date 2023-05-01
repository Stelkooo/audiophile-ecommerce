import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Manrope } from 'next/font/google';

import { getCategories } from '@/lib/sanity.client';

import CategoryLinks from '@/components/common/category-links/category-links.component';
import Header from '@/components/common/header/header.component';
import Footer from '@/components/common/footer/footer.component';
import About from '@/components/common/about/about.component';

import Hero from '@/components/home/common/hero/hero.component';
import FeaturedProducts from '@/components/home/common/featured-products/featured-products.component';

const manrope = Manrope({ subsets: ['latin'] });

export const getStaticProps: GetStaticProps = async () => {
  const [categories] = await Promise.all([getCategories()]);
  return { props: { categories } };
};

export default function Home({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

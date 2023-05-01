import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { Manrope } from 'next/font/google';
import { ParsedUrlQuery } from 'querystring';

import { IProduct } from '@/types';

import Header from '@/components/common/header/header.component';
import Footer from '@/components/common/footer/footer.component';
import About from '@/components/common/about/about.component';
import Button from '@/components/common/button/button.component';
import ProductCard from '@/components/common/product-card/product-card.component';
import CategoryLinks from '@/components/common/category-links/category-links.component';
import {
  getCategories,
  getCategoriesSlug,
  getCategory,
} from '@/lib/sanity.client';

const manrope = Manrope({ subsets: ['latin'] });

export const getStaticPaths: GetStaticPaths = async () => {
  const arr = await getCategoriesSlug();
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
  const [categories, category] = await Promise.all([
    getCategories(),
    getCategory(slug),
  ]);
  return { props: { category, categories } };
};

export default function Home({
  categories,
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={`${manrope.className}`}>
      <Header categories={categories} />
      <main>
        <div className="bg-neutral-900 py-8 text-center text-white md:py-24">
          <h1 className="heading-small">{category.name}</h1>
        </div>
        <div className="mx-auto mb-[7.5rem] mt-16 grid w-[327px] gap-y-[7.5rem] text-center md:w-[689px] xl:w-[1110px]">
          {category.products.map((product: IProduct, index: number) => (
            <div
              className={`flex flex-col gap-8 xl:gap-32 xl:text-left ${
                index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'
              }`}
              key={product._id}
            >
              <ProductCard product={product}>
                <div className="justify-self-center">
                  <Link href={`/product-detail/${product.slug?.current}`}>
                    <Button type="primary">
                      <span>See Product</span>
                    </Button>
                  </Link>
                </div>
              </ProductCard>
            </div>
          ))}
          <CategoryLinks categories={categories} />
          <About />
        </div>
      </main>
      <Footer />
    </div>
  );
}

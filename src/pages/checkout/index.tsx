import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Manrope } from 'next/font/google';

import client from '@/lib/sanity.client';

import { ICategory } from '@/types';

import GoBack from '@/components/global/go-back/go-back.component';
import Header from '@/components/global/header/header.component';
import Footer from '@/components/global/footer/footer.component';
import { getCategoriesQuery } from '@/components/global/products-list/category-links.component';

import Form from '@/components/checkout/form/form';

const manrope = Manrope({ subsets: ['latin'] });

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }
  const categories: ICategory[] = await client.fetch(getCategoriesQuery);
  return { props: { preview, categories } };
};

export default function Home({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={`${manrope.className}`}>
      <Header categories={categories} />
      <main className="bg-neutral-300 pb-24">
        <div className="mx-auto w-[327px]">
          <GoBack />
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
}

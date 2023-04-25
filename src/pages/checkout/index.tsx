import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Manrope } from 'next/font/google';

import client from '@/lib/sanity.client';

import { ICategory } from '@/types';

import GoBack from '@/components/go-back/go-back.component';
import Header from '@/components/header/header.component';
import Footer from '@/components/footer/footer.component';
import CheckoutModal from '@/components/modal/components/checkout-modal/checkout-modal.component';
import { getCategoriesQuery } from '@/components/products-list/category-links.component';

import Form from './components/form/form';
import Summary from './components/summary/summary.component';

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
          <div className="grid gap-y-8">
            <Form />
            <Summary />
          </div>
        </div>
        {/* <CheckoutModal /> */}
      </main>
      <Footer />
    </div>
  );
}

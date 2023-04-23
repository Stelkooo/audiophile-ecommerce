import { Manrope } from 'next/font/google';

import GoBack from '@/components/go-back/go-back.component';
import Header from '@/components/header/header.component';
import Footer from '@/components/footer/footer.component';
import CheckoutModal from '@/components/modal/components/checkout-modal/checkout-modal.component';

import Form from './components/form/form';
import Summary from './components/summary/summary.component';

const manrope = Manrope({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${manrope.className}`}>
      <Header />
      <main className="bg-neutral-300 pb-24">
        <div className="mx-auto w-[327px]">
          <GoBack />
          <div className="grid gap-y-8">
            <Form />
            <Summary />
          </div>
        </div>
        <CheckoutModal />
      </main>
      <Footer />
    </div>
  );
}

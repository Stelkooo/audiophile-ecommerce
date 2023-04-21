import { Manrope } from 'next/font/google';

import Header from '@/components/header/header.component';
import Footer from '@/components/footer/footer.component';
import Category from './components/category/category.component';

const manrope = Manrope({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${manrope.className}`}>
      <Header />
      <Category />
      <Footer />
    </div>
  );
}

import { Manrope } from 'next/font/google';

import Header from '@/components/header/header.component';

const manrope = Manrope({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${manrope.className}`}>
      <Header />
    </div>
  );
}

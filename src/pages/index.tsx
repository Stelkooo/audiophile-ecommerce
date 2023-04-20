import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${manrope.className}`}>
      <h1>Hello world</h1>
    </div>
  );
}

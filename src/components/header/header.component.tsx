import Image from 'next/image';

import Logo from 'public/assets/shared/desktop/logo.svg';
import Cart from 'public/assets/shared/desktop/icon-cart.svg';
import Hamburger from 'public/assets/shared/tablet/icon-hamburger.svg';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white border-opacity-10 bg-neutral-900 px-6 py-8">
      <Image src={Hamburger} alt="Click for navigation menu" />
      <Image src={Logo} alt="Audiophile Logo" />
      <Image src={Cart} alt="Click to see cart contents" />
    </header>
  );
}

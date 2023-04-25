import Image from 'next/image';

import { useRef } from 'react';
import { useToggle, useOnClickOutside } from 'usehooks-ts';

import { ICategory } from '@/types';

import Logo from 'public/assets/shared/desktop/logo.svg';
import Cart from 'public/assets/shared/desktop/icon-cart.svg';
import Hamburger from 'public/assets/shared/tablet/icon-hamburger.svg';

import MenuModal from '../modal/components/menu-modal/menu-modal.component';
import CartModal from '../modal/components/cart-modal/cart-modal.component';

type Props = {
  categories: ICategory[];
};

export default function Header({ categories }: Props) {
  const [menu, menuToggle] = useToggle(false);
  const [cart, cartToggle] = useToggle(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  const menuOnClickOutsideHandler = () => {
    if (menu) menuToggle();
  };

  const cartOnClickOutsideHandler = () => {
    if (cart) cartToggle();
  };

  useOnClickOutside(menuRef, menuOnClickOutsideHandler);
  useOnClickOutside(cartRef, cartOnClickOutsideHandler);
  return (
    <header className="flex items-center justify-between border-b border-white border-opacity-10 bg-neutral-900 px-6 py-8">
      <div ref={menuRef}>
        <button type="button" onClick={() => menuToggle()}>
          <Image
            src={Hamburger}
            alt="Click for navigation menu"
            id="hamburger-menu"
          />
        </button>
        {menu && <MenuModal categories={categories} />}
      </div>
      <Image src={Logo} alt="Audiophile Logo" />
      <div ref={cartRef}>
        <button type="button" onClick={() => cartToggle()}>
          <Image src={Cart} alt="Click to see cart contents" />
        </button>
        {cart && <CartModal />}
      </div>
    </header>
  );
}

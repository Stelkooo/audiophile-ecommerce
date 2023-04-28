import Image from 'next/image';

import { useRef } from 'react';
import { useToggle, useOnClickOutside, useEffectOnce } from 'usehooks-ts';

import { ICategory } from '@/types';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleIsCartOpen, setCartItems } from '@/store/cart/cart.reducer';
import { selectIsCartOpen } from '@/store/cart/cart.selector';

import Logo from 'public/assets/shared/desktop/logo.svg';
import Cart from 'public/assets/shared/desktop/icon-cart.svg';
import Hamburger from 'public/assets/shared/tablet/icon-hamburger.svg';

import MenuModal from '../modal/components/menu-modal/menu-modal.component';
import CartModal from '../modal/components/cart-modal/cart-modal.component';

type Props = {
  categories: ICategory[];
};

export default function Header({ categories }: Props) {
  const dispatch = useAppDispatch();

  const isCartOpen = useAppSelector(selectIsCartOpen);

  const [menu, menuToggle] = useToggle(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  const menuOnClickOutsideHandler = () => {
    if (menu) menuToggle();
  };

  const cartOnClickOutsideHandler = () => {
    if (isCartOpen) dispatch(toggleIsCartOpen());
  };

  useOnClickOutside(menuRef, menuOnClickOutsideHandler);
  useOnClickOutside(cartRef, cartOnClickOutsideHandler);

  useEffectOnce(() => {
    const getLocalCartItems = localStorage.getItem('cart');
    if (getLocalCartItems) {
      dispatch(setCartItems(JSON.parse(getLocalCartItems)));
    }
  });
  return (
    <header className="bg-neutral-900">
      <div className="flex items-center border-b border-white border-opacity-10 px-6 py-8 md:mx-auto md:w-[689px] md:px-0">
        <div ref={menuRef} className="mr-auto md:mr-10">
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
        <div ref={cartRef} className="ml-auto">
          <button type="button" onClick={() => dispatch(toggleIsCartOpen())}>
            <Image src={Cart} alt="Click to see cart contents" />
          </button>
          {isCartOpen && <CartModal />}
        </div>
      </div>
    </header>
  );
}

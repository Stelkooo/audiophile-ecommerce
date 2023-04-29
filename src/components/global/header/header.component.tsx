import Image from 'next/image';
import Link from 'next/link';

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
      <div className="grid grid-flow-col border-b border-white border-opacity-10 px-6 py-8 md:mx-auto md:w-[689px] md:grid-cols-[58px_repeat(2,_1fr)] md:px-0 xl:w-[1110px] xl:grid-cols-3">
        <div>
          <div ref={menuRef} className="xl:hidden">
            <button type="button" onClick={() => menuToggle()}>
              <Image
                src={Hamburger}
                alt="Click for navigation menu"
                id="hamburger-menu"
              />
            </button>
            {menu && <MenuModal categories={categories} />}
          </div>
          <div className="hidden xl:block">
            <nav>
              <ul className="sub-title flex flex-col gap-4 uppercase text-white md:flex-row md:gap-8">
                <Link href="/">
                  <li className="hover:text-orange-300">Home</li>
                </Link>
                <Link href="/category/headphones">
                  <li className="hover:text-orange-300">Headphones</li>
                </Link>
                <Link href="/category/speakers">
                  <li className="hover:text-orange-300">Speakers</li>
                </Link>
                <Link href="/category/earphones">
                  <li className="hover:text-orange-300">Earphones</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
        <Image
          src={Logo}
          alt="Audiophile Logo"
          className="place-self-center md:place-self-start xl:col-start-1"
        />
        <div ref={cartRef} className="place-self-end">
          <button type="button" onClick={() => dispatch(toggleIsCartOpen())}>
            <Image src={Cart} alt="Click to see cart contents" />
          </button>
          {isCartOpen && <CartModal />}
        </div>
      </div>
    </header>
  );
}

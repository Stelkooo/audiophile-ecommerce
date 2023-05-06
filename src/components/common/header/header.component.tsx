import { useRef } from 'react';
import { useToggle, useEffectOnce } from 'usehooks-ts';

import { ICategory } from '@/types';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCartItems, toggleIsCartOpen } from '@/store/cart/cart.reducer';
import { selectIsCartOpen } from '@/store/cart/cart.selector';

import Hamburger from './common/hamburger/hamburger.component';
import CartIcon from './common/cart/cart-icon.component';

import MenuModal from '../modal/common/menu-modal/menu-modal.component';
import CartModal from '../modal/common/cart-modal/cart-modal.component';
import NavLinks from '../nav-links/nav-links.component';
import Logo from '../logo/logo.component';

type Props = {
  categories: ICategory[];
};

export default function Header({ categories }: Props) {
  const dispatch = useAppDispatch();

  const [menu, menuToggle] = useToggle(false);
  const isCartOpen = useAppSelector(selectIsCartOpen);

  const menuRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffectOnce(() => {
    const getLocalCartItems = localStorage.getItem('cart');
    if (getLocalCartItems) {
      dispatch(setCartItems(JSON.parse(getLocalCartItems)));
    }
  });
  return (
    <header className="bg-neutral-900">
      <div className="grid grid-flow-col items-center border-b border-white border-opacity-10 px-6 py-8 md:mx-auto md:max-w-2xl md:grid-cols-[min-content_repeat(2,1fr)] lg:max-w-4xl lg:grid-cols-3 xl:max-w-5xl 2xl:max-w-6xl">
        <div className="lg:col-start-2">
          <div ref={menuRef} className="lg:hidden">
            <button type="button" onClick={() => menuToggle()}>
              <Hamburger />
            </button>
            {menu && <MenuModal categories={categories} toggle={menuToggle} />}
          </div>
          <div className="hidden lg:block">
            <NavLinks />
          </div>
        </div>
        <Logo />
        <div ref={cartRef} className="justify-self-end">
          <button type="button" onClick={() => dispatch(toggleIsCartOpen())}>
            <CartIcon />
          </button>
          {isCartOpen && (
            <CartModal toggle={() => dispatch(toggleIsCartOpen())} />
          )}
        </div>
      </div>
    </header>
  );
}

import Image from 'next/image';
import { useRouter } from 'next/router';

import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { removeAllCartItems } from '@/store/cart/cart.reducer';
import {
  selectCartItems,
  selectCartGrandTotal,
} from '@/store/cart/cart.selector';

import Check from 'public/assets/checkout/icon-order-confirmation.svg';

import Button from '@/components/common/button/button.component';

import CartItem from '@/components/common/cart/common/cart-item/cart-item.component';

import Modal from '../../modal.component';

type Props = {
  toggleModalOpen: () => void;
};

export default function CheckoutModal({ toggleModalOpen }: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDivElement>(null);

  const cartItems = useAppSelector(selectCartItems);
  const grandTotal = useAppSelector(selectCartGrandTotal);

  const returnToHomeHandler = () => {
    toggleModalOpen();
    dispatch(removeAllCartItems());
    router.push('/');
  };

  useOnClickOutside(modalRef, returnToHomeHandler);
  return (
    <Modal
      tailwind="fixed left-1/2 top-1/2 z-50 flex w-[343px] md:w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-md p-8 md:p-12"
      toggle={returnToHomeHandler}
    >
      <div className="grid gap-y-6 md:w-full" ref={modalRef}>
        <Image src={Check} alt="" />
        <div>
          <h2 className="md:heading-large mb-4 text-[24px]/[28px] font-bold uppercase tracking-wide">
            Thank you for your order
          </h2>
          <p className="opacity-50">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div className="grid md:grid-cols-[1fr_198px]">
          <div className="rounded-t-lg bg-neutral-300 p-6 md:rounded-l-lg md:rounded-tr-none">
            {cartItems[0] && <CartItem isSummary item={cartItems[0]} />}
            {cartItems.length > 0 && (
              <p className="border-t border-t-neutral-900 border-opacity-20 pt-3 text-center text-[12px]/[1rem] font-bold opacity-50">
                and {cartItems.length - 1} other item(s)
              </p>
            )}
          </div>
          <div className="rounded-b-lg bg-black px-6 py-4 text-white md:flex md:flex-col md:justify-center md:rounded-r-lg md:rounded-bl-none">
            <p className="mb-2 uppercase opacity-50">Grand Total</p>
            <p className="heading-smallest">
              $ {grandTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
        </div>
        <Button type="primary" fullWidth onClick={() => returnToHomeHandler()}>
          <span className="w-full">Back to home</span>
        </Button>
      </div>
    </Modal>
  );
}

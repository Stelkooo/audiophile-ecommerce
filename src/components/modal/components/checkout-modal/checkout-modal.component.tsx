import Image from 'next/image';

import Check from 'public/assets/checkout/icon-order-confirmation.svg';

import CartItem from '@/components/cart/components/cart-item/cart-item.component';
import Button from '@/components/button/button.component';

import Modal from '../../modal.component';

export default function CheckoutModal() {
  return (
    <Modal tailwind="fixed left-1/2 top-1/2 z-50 flex w-[343px] -translate-x-1/2 -translate-y-1/2 rounded-md p-8">
      <div className="grid gap-y-6">
        <Image src={Check} alt="" />
        <div>
          <h2 className="mb-4 text-[24px]/[28px] font-bold uppercase tracking-wide">
            Thank you for your order
          </h2>
          <p className="opacity-50">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div>
          <div className="rounded-t-lg bg-neutral-300 p-6">
            <CartItem isSummary />
          </div>
          <div className="rounded-b-lg bg-black px-6 py-4 text-white">
            <p className="mb-2 uppercase opacity-50">Grand Total</p>
            <p className="heading-smallest">$ 5,446</p>
          </div>
        </div>
        <Button type="primary" fullWidth>
          <span className="w-full">Back to home</span>
        </Button>
      </div>
    </Modal>
  );
}

import Cart from '@/components/global/cart/cart.component';

import Modal from '../../modal.component';

export default function CartModal() {
  return (
    <Modal tailwind="absolute left-1/2 top-6 z-50 flex w-[343px] -translate-x-1/2 rounded-md py-8 px-9 md:left-auto md:right-10 md:-translate-x-0 md:w-[377px] xl:right-48">
      <Cart />
    </Modal>
  );
}

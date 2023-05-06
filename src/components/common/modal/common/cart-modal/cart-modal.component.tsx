import Cart from '@/components/common/cart/cart.component';

import Modal from '../../modal.component';

type Props = {
  toggle: () => void;
};

export default function CartModal({ toggle }: Props) {
  return (
    <Modal
      tailwind="absolute right-8 top-[110px] z-50 flex w-[343px] rounded-md py-8 px-9 md:left-auto md:right-10 md:-translate-x-0 md:w-[377px] xl:right-48"
      toggle={toggle}
    >
      <Cart />
    </Modal>
  );
}

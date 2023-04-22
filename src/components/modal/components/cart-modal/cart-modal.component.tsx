import Button from '@/components/button/button.component';
import Modal from '../../modal.component';
import CartItem from './components/cart-item.component';

export default function CartModal() {
  return (
    <Modal tailwind="absolute left-1/2 top-6 z-50 flex w-[343px] -translate-x-1/2 rounded-md">
      <div className="grid w-full gap-y-8 overflow-hidden px-7 py-8">
        <div className="flex items-center justify-between">
          <p className="heading-smallest">Cart (3)</p>
          <button type="button">
            <p className="opacity-50">Remove all</p>
          </button>
        </div>
        <div className="grid max-h-60 gap-y-6 overflow-y-scroll">
          <CartItem />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="uppercase opacity-50">Total</p>
            <p className="heading-smallest">$ 5,396</p>
          </div>
        </div>
        <Button type="primary" fullWidth>
          <span className="w-full">Checkout</span>
        </Button>
      </div>
    </Modal>
  );
}

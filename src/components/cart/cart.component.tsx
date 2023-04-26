import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  removeAllCartItems,
  toggleIsCartOpen,
} from '@/store/cart/cart.reducer';
import {
  selectIsCartOpen,
  selectCartItems,
  selectCartTotal,
  selectCartVAT,
  selectCartGrandTotal,
} from '@/store/cart/cart.selector';

import Button from '../button/button.component';
import CartItem from './components/cart-item/cart-item.component';

type Props = {
  isSummary?: boolean;
};

export default function Cart({ isSummary }: Props) {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const isCartOpen = useAppSelector(selectIsCartOpen);
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const cartVAT = useAppSelector(selectCartVAT);
  const cartGrandTotal = useAppSelector(selectCartGrandTotal);

  const removeAllHandler = () => {
    dispatch(removeAllCartItems());
  };

  const onClickHandler = () => {
    if (isSummary) {
      console.log('hi');
    } else {
      if (isCartOpen) dispatch(toggleIsCartOpen());
      router.push('/checkout');
    }
  };
  return (
    <div className="grid w-full gap-y-8">
      <div className="flex items-center justify-between">
        {isSummary ? (
          <p className="heading-smallest">Summary</p>
        ) : (
          <>
            <p className="heading-smallest">Cart ({cartItems.length})</p>
            <button type="button" onClick={() => removeAllHandler()}>
              <p className="opacity-50">Remove all</p>
            </button>
          </>
        )}
      </div>
      <div
        className={`grid gap-y-6 ${
          isSummary ? '' : 'max-h-60 overflow-y-scroll'
        }`}
      >
        {cartItems.map((item) => (
          <CartItem isSummary={isSummary} item={item} key={item._id} />
        ))}
      </div>
      <div className="grid gap-y-6">
        <div>
          <div className="flex items-center justify-between">
            <p className="uppercase opacity-50">Total</p>
            <p className="heading-smallest">
              $ {cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
          {isSummary && (
            <>
              <div className="flex items-center justify-between">
                <p className="uppercase opacity-50">Shipping</p>
                <p className="heading-smallest">$ 50</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="uppercase opacity-50">VAT (Included)</p>
                <p className="heading-smallest">
                  $ {cartVAT.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              </div>
            </>
          )}
        </div>
        {isSummary && (
          <div className="flex items-center justify-between">
            <p className="uppercase opacity-50">Grand Total</p>
            <p className="heading-smallest text-orange-700">
              ${' '}
              {cartGrandTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
          </div>
        )}
      </div>
      <Button type="primary" fullWidth onClick={() => onClickHandler()}>
        <span className="w-full">
          {isSummary ? 'Continue and Pay' : 'Checkout'}
        </span>
      </Button>
    </div>
  );
}

Cart.defaultProps = {
  isSummary: false,
};

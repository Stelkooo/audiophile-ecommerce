import Button from '../button/button.component';
import CartItem from './components/cart-item/cart-item.component';

type Props = {
  isSummary?: boolean;
};

export default function Cart({ isSummary }: Props) {
  return (
    <div className="grid w-full gap-y-8">
      <div className="flex items-center justify-between">
        {isSummary ? (
          <p className="heading-smallest">Summary</p>
        ) : (
          <>
            <p className="heading-smallest">Cart (3)</p>
            <button type="button">
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
        <CartItem isSummary={isSummary} />
        <CartItem isSummary={isSummary} />
        <CartItem isSummary={isSummary} />
      </div>
      <div className="grid gap-y-6">
        <div>
          <div className="flex items-center justify-between">
            <p className="uppercase opacity-50">Total</p>
            <p className="heading-smallest">$ 5,396</p>
          </div>
          {isSummary && (
            <>
              <div className="flex items-center justify-between">
                <p className="uppercase opacity-50">Shipping</p>
                <p className="heading-smallest">$ 50</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="uppercase opacity-50">VAT (Included)</p>
                <p className="heading-smallest">$ 1,079</p>
              </div>
            </>
          )}
        </div>
        {isSummary && (
          <div className="flex items-center justify-between">
            <p className="uppercase opacity-50">Grand Total</p>
            <p className="heading-smallest text-orange-700">$ 5,446</p>
          </div>
        )}
      </div>
      <Button type="primary" fullWidth>
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

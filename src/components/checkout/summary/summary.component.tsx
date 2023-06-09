import Cart from '@/components/common/cart/cart.component';

export default function Summary() {
  return (
    <div className="grid gap-y-8 rounded-lg bg-white px-6 py-8 xl:h-min">
      <Cart isSummary />
    </div>
  );
}

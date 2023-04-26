export default function Radio() {
  return (
    <div className="grid gap-y-4">
      <p className="text-[12px]/[1rem] font-bold">Payment Method</p>
      <div className="grid gap-y-4">
        <label
          htmlFor="e-money"
          className="inline-flex items-center gap-4 rounded-lg border border-neutral-300 px-6 py-[1.125rem] text-[14px]/[19px] font-bold"
        >
          <input
            type="radio"
            id="e-money"
            className="text-orange-700"
            value="e-money"
            name="payment"
            defaultChecked
          />
          <span>e-Money</span>
        </label>
        <label
          htmlFor="cash"
          className="inline-flex items-center gap-4 rounded-lg border border-neutral-300 px-6 py-[1.125rem] text-[14px]/[19px] font-bold"
        >
          <input
            type="radio"
            id="cash"
            className="text-orange-700"
            value="cash"
            name="payment"
          />
          <span>Cash on Delivery</span>
        </label>
      </div>
    </div>
  );
}

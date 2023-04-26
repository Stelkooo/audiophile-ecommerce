type Props = {
  amount: number;
  minusOnClickHandler: () => void;
  addOnClickHandler: () => void;
  chunky?: boolean;
};

export default function ItemAmount({
  amount,
  minusOnClickHandler,
  addOnClickHandler,
  chunky,
}: Props) {
  return (
    <div
      className={`flex bg-neutral-300 ${
        chunky ? 'gap-5 px-4 py-3' : 'gap-3 px-3 py-1'
      } text-center`}
    >
      <button
        type="button"
        className="aspect-square w-4 opacity-25"
        onClick={() => minusOnClickHandler()}
      >
        -
      </button>
      <p className="aspect-square min-w-[1rem]">{amount}</p>
      <button
        type="button"
        className="aspect-square w-4 opacity-25"
        onClick={() => addOnClickHandler()}
      >
        +
      </button>
    </div>
  );
}

ItemAmount.defaultProps = {
  chunky: false,
};

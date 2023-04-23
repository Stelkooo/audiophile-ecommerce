import ItemAmount from '@/components/item-amount/item-amount.component';
import Image from 'next/image';

import XX99MKII from 'public/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg';

type Props = {
  isSummary?: boolean;
};

export default function CartItem({ isSummary }: Props) {
  const minusOnClickHandler = () => {
    console.log('Minus');
  };

  const addOnClickHandler = () => {
    console.log('Add');
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={XX99MKII}
          alt="Headphones"
          className="aspect-square w-16 rounded-lg"
        />
        <div>
          <p className="font-bold">XX99 MK II</p>
          <p className="text-[14px] font-bold opacity-50">$ 2,999</p>
        </div>
      </div>
      {isSummary ? (
        <p className="opacity-50">x1</p>
      ) : (
        <ItemAmount
          amount={1}
          minusOnClickHandler={minusOnClickHandler}
          addOnClickHandler={addOnClickHandler}
        />
      )}
    </div>
  );
}

CartItem.defaultProps = {
  isSummary: false,
};

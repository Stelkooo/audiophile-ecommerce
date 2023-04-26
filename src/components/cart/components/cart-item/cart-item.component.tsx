import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  ICartItem,
  addItemToCart,
  removeItemFromCart,
} from '@/store/cart/cart.reducer';

import ItemAmount from '@/components/item-amount/item-amount.component';

import urlFor from '@/lib/sanity.urlFor';

type Props = {
  isSummary?: boolean;
  item: ICartItem;
};

export default function CartItem({ isSummary, item }: Props) {
  const dispatch = useAppDispatch();

  const minusOnClickHandler = () => {
    dispatch(removeItemFromCart({ ...item }));
  };

  const addOnClickHandler = () => {
    dispatch(addItemToCart({ ...item, quantity: 1 }));
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={urlFor(item.image).url()}
          alt={item.name}
          width={64}
          height={64}
          className="rounded-lg"
        />
        <div>
          <p className="font-bold">{item.name}</p>
          <p className="text-[14px] font-bold opacity-50">
            $ {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
        </div>
      </div>
      {isSummary ? (
        <p className="opacity-50">x1</p>
      ) : (
        <ItemAmount
          amount={item.quantity}
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

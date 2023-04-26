import Image from 'next/image';

import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { ICartItem, addItemToCart } from '@/store/cart/cart.reducer';

import { ICategory, IImage, IProduct } from '@/types';

import urlFor from '@/lib/sanity.urlFor';

import About from '@/components/global/about/about.component';
import CategoryLinks from '@/components/global/products-list/category-links.component';
import ProductCard from '@/components/global/product-card/product-card.component';
import Button from '@/components/global/button/button.component';
import ItemAmount from '@/components/global/item-amount/item-amount.component';
import GoBack from '@/components/global/go-back/go-back.component';

import MayAlsoLike from './may-also-like/may-also-like.component';

type Props = {
  product: IProduct;
  categories: ICategory[];
};

export default function Product({ product, categories }: Props) {
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState<number>(1);

  const minusOnClickHandler = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  const addOnClickHandler = () => {
    setAmount(amount + 1);
  };

  const addToCartHandler = () => {
    if (product) {
      const cartItem: ICartItem = {
        _id: product._id as string,
        image: product.cartImage as IImage,
        name: product.name as string,
        price: product.price as number,
        quantity: amount,
      };
      dispatch(addItemToCart(cartItem));
    }
  };
  if (product && categories) {
    return (
      <main className="mx-auto mb-[7.5rem] w-[327px]">
        <GoBack />
        <div className="grid gap-y-[7.5rem]">
          <div className="grid gap-y-[5.5rem]">
            <ProductCard product={product}>
              <div className="flex flex-col gap-8">
                <p>
                  ${' '}
                  {product.price &&
                    product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
                <div className="flex items-center gap-4">
                  <ItemAmount
                    amount={amount}
                    minusOnClickHandler={minusOnClickHandler}
                    addOnClickHandler={addOnClickHandler}
                    chunky
                  />
                  <Button type="primary" onClick={() => addToCartHandler()}>
                    <span>Add To Cart</span>
                  </Button>
                </div>
              </div>
            </ProductCard>
            <div className="grid gap-y-6">
              <h2 className="heading-small">Features</h2>
              {product.features &&
                product.features.map((feature, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <p className="font-medium opacity-50" key={`feature${index}`}>
                    {feature}
                  </p>
                ))}
            </div>
            <div className="grid gap-y-6">
              <h2 className="heading-small">In the box</h2>
              <div className="grid gap-y-2">
                {product.includes &&
                  product.includes.map((item) => (
                    <div className="flex gap-6" key={item._key}>
                      <p className="font-bold text-orange-700">
                        {item.quantity}x
                      </p>
                      <p className="font-medium opacity-50">{item.item}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="grid gap-y-5">
              {product.gallery && (
                <>
                  <Image
                    src={urlFor(product.gallery.first.mobile).url()}
                    alt=""
                    className="rounded-lg"
                    width={327}
                    height={174}
                  />
                  <Image
                    src={urlFor(product.gallery.second.mobile).url()}
                    alt=""
                    className="rounded-lg"
                    width={327}
                    height={174}
                  />
                  <Image
                    src={urlFor(product.gallery.third.mobile).url()}
                    alt=""
                    className="rounded-lg"
                    width={327}
                    height={368}
                  />
                </>
              )}
            </div>
          </div>
          {product.others && <MayAlsoLike others={product.others} />}
          <CategoryLinks categories={categories} />
          <About />
        </div>
      </main>
    );
  }
  return <div />;
}

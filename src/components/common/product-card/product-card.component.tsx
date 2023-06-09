import Image from 'next/image';

import urlFor from '@/lib/sanity.urlFor';
import { IProduct } from '@/types';

type Props = {
  children: JSX.Element | JSX.Element[];
  product: IProduct;
};

export default function ProductCard({ children, product }: Props) {
  if (product)
    return (
      <>
        <picture>
          <source
            media="(min-width:1280px)"
            srcSet={urlFor(
              product.images?.desktop || product.categoryImages?.desktop
            ).url()}
          />
          <source
            media="(min-width:768px)"
            srcSet={urlFor(
              product.images?.tablet || product.categoryImages?.tablet
            ).url()}
          />
          <Image
            src={urlFor(
              product.images?.mobile || product.categoryImages?.mobile
            ).url()}
            alt={product.name as string}
            className="w-full rounded-lg xl:w-[540px]"
            width={654}
            height={704}
          />
        </picture>
        <div className="flex flex-col justify-center gap-6 xl:w-[445px]">
          {product.isNew && (
            <p className="heading-overline text-orange-700">New Product</p>
          )}
          <h2 className="heading-small md:heading-larger">{product.name}</h2>
          <p className="opacity-50">{product.description}</p>
          {children}
        </div>
      </>
    );
  return <div />;
}

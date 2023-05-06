import Image from 'next/image';
import Link from 'next/link';

import { IFeatureProduct } from '@/types';

import Button from '@/components/common/button/button.component';
import urlFor from '@/lib/sanity.urlFor';

type Props = {
  product: IFeatureProduct;
};

export default function LargeFeaturedProduct({ product }: Props) {
  return (
    <div className="relative flex flex-col items-center gap-8 overflow-hidden rounded-lg bg-orange-700 px-6 pt-14 text-center text-white md:gap-16 xl:flex-row xl:justify-evenly xl:pt-20">
      <div className="before:absolute before:-bottom-8 before:left-1/2 before:-translate-x-1/2 before:scale-[59%] before:content-[url('/assets/home/desktop/pattern-circles.svg')] md:before:bottom-12 md:before:scale-100 xl:before:-bottom-[21rem] xl:before:left-[19rem]">
        <picture className="relative -bottom-2 z-10">
          <source
            media="(min-width:1280px)"
            srcSet={urlFor(product.images.desktop).url()}
          />
          <source
            media="(min-width:768px)"
            srcSet={urlFor(product.images.tablet).url()}
          />
          <Image
            src={urlFor(product.images.mobile).url()}
            alt={product.name}
            width={768}
            height={918}
            className="w-[172px] md:w-[195px] xl:w-[390px]"
          />
        </picture>
      </div>
      <div className="relative flex flex-col items-center gap-6 pb-14 md:w-[349px] md:gap-10 xl:items-start xl:text-left">
        <div className="flex flex-col items-center gap-6">
          <h3 className="heading-largest md:heading-largest-tablet px-3 xl:px-0">
            {product.name}
          </h3>
          <p className="opacity-75">{product.description}</p>
        </div>
        <Link href={`/product-detail/${product.slug.current}`}>
          <Button type="secondary">
            <span>See Product</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

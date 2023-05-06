import Image from 'next/image';
import Link from 'next/link';

import { IFeatureProduct } from '@/types';

import urlFor from '@/lib/sanity.urlFor';

import Button from '@/components/common/button/button.component';

type Props = {
  product: IFeatureProduct;
};

export default function SmallFeaturedProduct({ product }: Props) {
  return (
    <div className="grid grid-rows-2 gap-y-6 md:grid-cols-2 md:grid-rows-1 md:gap-x-3 md:gap-y-0 xl:gap-x-8">
      <div className="overflow-hidden rounded-lg">
        <picture>
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
            className="w-full"
          />
        </picture>
      </div>
      <div className="flex flex-col items-start justify-center rounded-lg bg-neutral-300 pl-6 md:pl-10">
        <h3 className="heading-small mb-8">{product.name}</h3>
        <Link href={`/product-detail/${product.slug.current}`}>
          <Button type="secondary">
            <span>See Product</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

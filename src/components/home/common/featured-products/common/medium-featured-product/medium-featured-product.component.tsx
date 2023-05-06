import Image from 'next/image';
import Link from 'next/link';

import { IFeatureProduct } from '@/types';

import urlFor from '@/lib/sanity.urlFor';

import Button from '@/components/common/button/button.component';

type Props = {
  product: IFeatureProduct;
};

export default function MediumFeaturedProduct({ product }: Props) {
  return (
    <div className="relative flex h-80 flex-col items-start justify-center overflow-hidden rounded-lg">
      <picture className="absolute">
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
          width={1110}
          height={320}
          className="w-full"
        />
      </picture>
      <div className="relative pl-6 md:pl-16">
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

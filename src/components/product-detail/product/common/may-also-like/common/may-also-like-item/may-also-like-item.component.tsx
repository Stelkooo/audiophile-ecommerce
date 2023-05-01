import Image from 'next/image';

import Link from 'next/link';

import { IOther } from '@/types';
import urlFor from '@/lib/sanity.urlFor';

import Button from '@/components/common/button/button.component';

type Props = {
  other: IOther;
};

export default function MayAlsoLikeItem({ other }: Props) {
  if (other)
    return (
      <div className="flex flex-col gap-8">
        <div className="flex h-28 justify-center overflow-hidden rounded-lg bg-neutral-300 md:h-[318px]">
          {other.name && (
            <picture>
              <source
                media="(min-width:1280px)"
                srcSet={urlFor(other.images?.desktop).url()}
              />
              <source
                media="(min-width:768px)"
                srcSet={urlFor(other.images?.tablet).url()}
              />
              <Image
                src={urlFor(other.images?.mobile).url()}
                alt={other.name}
                className="h-28 w-auto md:h-[318px]"
                width={654}
                height={240}
              />
            </picture>
          )}
        </div>
        <div className="flex flex-col items-center gap-8">
          <h3 className="heading-smaller">{other.name}</h3>
          <Link href={`/product-detail/${other.slug?.current}`}>
            <Button type="primary">
              <span>See Product</span>
            </Button>
          </Link>
        </div>
      </div>
    );
  return <div />;
}

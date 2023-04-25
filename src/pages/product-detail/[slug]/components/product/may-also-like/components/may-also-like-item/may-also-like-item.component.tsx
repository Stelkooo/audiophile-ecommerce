import Image from 'next/image';

import Link from 'next/link';

import { IOther } from '@/types';
import urlFor from '@/lib/sanity.urlFor';

import Button from '@/components/button/button.component';

type Props = {
  other: IOther;
};

export default function MayAlsoLikeItem({ other }: Props) {
  if (other)
    return (
      <div className="flex flex-col gap-8">
        <div className="flex h-28 justify-center rounded-lg bg-neutral-300">
          {other.name && (
            <Image
              src={urlFor(other.images?.mobile).url()}
              alt={other.name}
              className="h-28 w-auto"
              width={654}
              height={240}
            />
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

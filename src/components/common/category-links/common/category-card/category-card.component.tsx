import Image from 'next/image';
import Link from 'next/link';

import { ICategory } from '@/types';

import urlFor from '@/lib/sanity.urlFor';

import Button from '@/components/common/button/button.component';

type Props = {
  category: ICategory;
};

export default function CategoryCard({ category }: Props) {
  return (
    <Link href={`/category/${category.slug?.current}`}>
      <div className="group/category relative cursor-pointer pt-14">
        <div className="absolute -top-8 h-full w-full">
          <Image
            src={urlFor(category.thumbnail).url()}
            alt={`Click here to shop for ${category.name}`}
            className="scale-[60%] object-contain xl:scale-75"
            fill
          />
        </div>
        <div className="flex h-40 flex-col items-center justify-end gap-4 rounded-lg bg-neutral-300 pb-6">
          <h2 className="text-[15px]/[20px] font-bold uppercase">
            {category.name}
          </h2>
          <Button type="clear">
            <span>Shop</span>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.322 1l5 5-5 5"
                stroke="#D87D4A"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </div>
    </Link>
  );
}

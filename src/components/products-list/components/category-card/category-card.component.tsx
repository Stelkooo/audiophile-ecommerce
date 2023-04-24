import Image, { StaticImageData } from 'next/image';

import Button from '@/components/button/button.component';
import Link from 'next/link';

type Props = {
  name: string;
  image: StaticImageData;
};

export default function CategoryCard({ name, image }: Props) {
  return (
    <Link href={`/category/${name}`}>
      <div className="relative cursor-pointer pt-14">
        <Image
          src={image}
          alt={`Click here to shop for ${name}`}
          className="absolute -bottom-2 scale-50"
        />
        <div className="flex h-40 flex-col items-center justify-end gap-4 rounded-lg bg-neutral-300 pb-6">
          <h6 className="text-[15px]/[20px] uppercase">{name}</h6>
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

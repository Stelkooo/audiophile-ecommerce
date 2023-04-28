import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/global/button/button.component';

import YX1Earphones from 'public/assets/home/mobile/image-earphones-yx1.jpg';

export default function SmallFeaturedProduct() {
  return (
    <div className="grid grid-rows-2 gap-y-6 md:grid-cols-2 md:grid-rows-1 md:gap-x-3 md:gap-y-0 xl:gap-x-8">
      <div className="overflow-hidden rounded-lg">
        <picture>
          <source
            media="(min-width:1280px)"
            srcSet="assets/home/desktop/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="assets/home/tablet/image-earphones-yx1.jpg"
          />
          <Image src={YX1Earphones} alt="YX1 Earphones" className="w-full" />
        </picture>
      </div>
      <div className="flex flex-col items-start justify-center rounded-lg bg-neutral-300 pl-6 md:pl-10">
        <h3 className="heading-small mb-8">YX1 Earphones</h3>
        <Link href="yx1-earphones">
          <Button type="secondary">
            <span>See Product</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

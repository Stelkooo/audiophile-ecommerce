import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/global/button/button.component';

import YX1Earphones from 'public/assets/home/mobile/image-earphones-yx1.jpg';

export default function SmallFeaturedProduct() {
  return (
    <div className="grid grid-rows-2 gap-y-6">
      <div className="overflow-hidden rounded-lg">
        <Image src={YX1Earphones} alt="YX1 Earphones" />
      </div>
      <div className="flex flex-col items-start justify-center rounded-lg bg-neutral-300 px-6">
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

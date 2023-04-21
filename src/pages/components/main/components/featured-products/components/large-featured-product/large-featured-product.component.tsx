import Button from '@/components/button/button.component';
import Image from 'next/image';

import ZX9Speaker from 'public/assets/home/mobile/image-speaker-zx9.png';
import Circles from 'public/assets/home/desktop/pattern-circles.svg';

export default function LargeFeaturedProduct() {
  return (
    <div className="flex flex-col items-center gap-8 overflow-hidden rounded-lg bg-orange-700 px-6 pt-14 text-center text-white">
      <div className="relative">
        <Image
          src={ZX9Speaker}
          alt="ZX9 Speaker"
          className="relative z-10 w-[172px]"
        />
        <Image
          src={Circles}
          alt=""
          className="absolute -left-48 -top-44 min-w-[558px]"
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 pb-14">
        <h3 className="heading-largest px-3">ZX9 Speaker</h3>
        <p className="opacity-75">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button type="secondary">
          <span>See Product</span>
        </Button>
      </div>
    </div>
  );
}

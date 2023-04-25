import Image from 'next/image';
import Link from 'next/link';

import ImageHeader from 'public/assets/home/mobile/image-header.jpg';

import Button from '@/components/button/button.component';

export default function Hero() {
  return (
    <div className="relative grid justify-items-center overflow-hidden bg-neutral-900 px-6 py-28 text-center text-white">
      <Image
        src={ImageHeader}
        alt=""
        className="absolute bottom-0 mix-blend-difference"
      />
      <p className="heading-overline mb-4 opacity-50">New Product</p>
      <h1 className="heading-largest relative mb-6">XX99 Mark II Headphones</h1>
      <p className="mb-7 opacity-75">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link href="/product-detail/xx99-mark-two-headphones">
        <Button type="primary">
          <span>See Product</span>
        </Button>
      </Link>
    </div>
  );
}

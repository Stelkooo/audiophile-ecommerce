import Image from 'next/image';
import Link from 'next/link';

import ImageHeaderMobile from 'public/assets/home/mobile/image-header.jpg';
import ImageHeaderTablet from 'public/assets/home/tablet/image-header.jpg';

import Button from '@/components/global/button/button.component';

export default function Hero() {
  return (
    <div className="relative grid h-[510px] place-content-center overflow-hidden bg-neutral-900 before:absolute before:bottom-0 before:h-[117%] before:w-full before:bg-[url('/assets/home/mobile/image-header.jpg')] before:bg-contain  before:bg-center before:bg-no-repeat md:h-[639px] md:before:bg-[url('/assets/home/tablet/image-header.jpg')]">
      {/* <picture className="absolute bottom-0 mix-blend-difference">
        <source
          media="(min-width:768px)"
          srcSet="assets/home/tablet/image-header.jpg"
        />
        <Image src={ImageHeaderMobile} alt="" fill />
      </picture> */}
      <div className="w-[328px] text-center text-white md:w-[379px]">
        <p className="heading-overline mb-4 opacity-50 md:mb-6">New Product</p>
        <h1 className="heading-largest md:heading-largest-tablet relative mb-6">
          XX99 Mark II Headphones
        </h1>
        <p className="mb-7 opacity-75 md:mb-10 md:px-4">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link href="/product-detail/xx99-mark-two-headphones">
          <Button type="primary">
            <span>See Product</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

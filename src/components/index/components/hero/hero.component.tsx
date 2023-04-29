import Link from 'next/link';

import Button from '@/components/global/button/button.component';

export default function Hero() {
  return (
    <div className="relative h-[510px] overflow-hidden bg-neutral-900 before:absolute before:bottom-0 before:h-[117%] before:w-full before:bg-[url('/assets/home/mobile/image-header.jpg')] before:bg-contain before:bg-center  before:bg-no-repeat md:h-[639px] md:before:bg-[url('/assets/home/tablet/image-header.jpg')] xl:h-[632px] xl:before:-bottom-11 xl:before:bg-[url('/assets/home/desktop/image-hero.jpg')]">
      <div className="grid h-full items-center justify-center xl:mx-auto xl:w-[1110px] xl:justify-start">
        <div className="w-[328px] text-center text-white md:w-[379px] xl:text-left">
          <p className="heading-overline mb-4 opacity-50 md:mb-6">
            New Product
          </p>
          <h1 className="heading-largest md:heading-largest-tablet relative mb-6">
            XX99 Mark II Headphones
          </h1>
          <p className="mb-7 opacity-75 md:mb-10 md:px-4 xl:pl-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="/product-detail/xx99-mark-two-headphones">
            <Button type="primary">
              <span>See Product</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

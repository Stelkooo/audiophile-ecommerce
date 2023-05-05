import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Button from '@/components/common/button/button.component';
import { IHero } from '@/types';
import { getHero } from '@/lib/sanity.client';
import urlFor from '@/lib/sanity.urlFor';

export default function Hero() {
  const [hero, setHero] = useState<IHero>();

  useEffect(() => {
    (async () => {
      const res = await getHero();
      if (res) setHero(res);
    })();
  }, []);

  if (hero) {
    const mobileImg = urlFor(hero.image.mobile).url();
    const tabletImg = urlFor(hero.image.tablet).url();
    const desktopImg = urlFor(hero.image.desktop).url();
    return (
      <div className="relative h-[510px] overflow-hidden bg-neutral-900 md:h-[639px] xl:h-[632px]">
        <picture>
          <source media="(min-width:1280px)" srcSet={desktopImg} />
          <source media="(min-width:768px)" srcSet={tabletImg} />
          <Image
            src={mobileImg}
            alt=""
            className="absolute bottom-0 left-1/2 h-[117%] w-96 -translate-x-1/2 md:w-full md:max-w-2xl lg:max-w-4xl xl:max-w-7xl"
            width={510}
            height={510}
          />
        </picture>
        <div className="grid h-full items-center justify-center xl:mx-auto xl:max-w-5xl xl:justify-start 2xl:max-w-6xl">
          <div className="w-[328px] text-center text-white md:w-[379px] xl:text-left">
            <p className="heading-overline mb-4 opacity-50 md:mb-6">
              New Product
            </p>
            <h1 className="heading-largest md:heading-largest-tablet relative mb-6">
              {hero?.name}
            </h1>
            <p className="mb-7 opacity-75 md:mb-10 md:px-4 xl:pl-0">
              {hero?.description}
            </p>
            <Link href={`/product-detail/${hero?.slug}`}>
              <Button type="primary">
                <span>See Product</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return <div className="h-[510px] bg-neutral-900 md:h-[639px] xl:h-[632px]" />;
}

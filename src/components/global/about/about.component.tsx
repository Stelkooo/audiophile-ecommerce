import Image from 'next/image';

import BestGear from 'public/assets/shared/mobile/image-best-gear.jpg';

export default function About() {
  return (
    <div className="flex flex-col gap-10 text-center">
      <picture>
        <source
          media="(min-width:768px)"
          srcSet="/assets/shared/tablet/image-best-gear.jpg"
        />
        <Image src={BestGear} alt="" className="w-full rounded-lg" />
      </picture>
      <div className="flex flex-col items-center gap-8 text-center md:mx-auto md:w-[573px]">
        <h4 className="heading-small md:heading-larger">
          Bringing you the <span className="text-orange-700">best</span> audio
          gear
        </h4>
        <p className="opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

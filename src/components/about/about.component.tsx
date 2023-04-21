import Image from 'next/image';

import BestGear from 'public/assets/shared/mobile/image-best-gear.jpg';

export default function About() {
  return (
    <div className="flex flex-col gap-10 text-center">
      <Image src={BestGear} alt="" className="rounded-lg" />
      <div className="flex flex-col gap-8 text-center">
        <h4 className="heading-small">
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

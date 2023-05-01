import Image from 'next/image';
import Link from 'next/link';

import ZX7Speaker from 'public/assets/home/mobile/image-speaker-zx7.jpg';

import Button from '@/components/common/button/button.component';

export default function MediumFeaturedProduct() {
  return (
    <div className="relative flex h-80 flex-col items-start justify-center overflow-hidden rounded-lg">
      <picture className="absolute">
        <source
          media="(min-width:1280px)"
          srcSet="assets/home/desktop/image-speaker-zx7.jpg"
        />
        <source
          media="(min-width:768px)"
          srcSet="assets/home/tablet/image-speaker-zx7.jpg"
        />
        <Image src={ZX7Speaker} alt="ZX7 Speaker" className="w-full" />
      </picture>
      <div className="relative pl-6 md:pl-16">
        <h3 className="heading-small mb-8">ZX7 Speaker</h3>
        <Link href="/product-detail/zx7-speaker">
          <Button type="secondary">
            <span>See Product</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

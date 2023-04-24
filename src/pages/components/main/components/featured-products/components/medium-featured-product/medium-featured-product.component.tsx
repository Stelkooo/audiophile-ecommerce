import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/button/button.component';

import ZX7Speaker from 'public/assets/home/mobile/image-speaker-zx7.jpg';

export default function MediumFeaturedProduct() {
  return (
    <div className="relative flex h-80 flex-col items-start justify-center overflow-hidden rounded-lg">
      <Image src={ZX7Speaker} alt="ZX7 Speaker" className="absolute" />
      <div className="relative px-6">
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

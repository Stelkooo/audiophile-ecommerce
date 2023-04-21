import Button from '@/components/button/button.component';
import Image from 'next/image';

import XX99MarkIIHeadphones from 'public/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg';

export default function ProductCard() {
  return (
    <div className="flex flex-col gap-8">
      <Image
        src={XX99MarkIIHeadphones}
        alt="XX99 Mark II Headphones"
        className="rounded-lg"
      />
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="heading-overline text-orange-700">New Product</p>
        <h2 className="heading-small">XX99 Mark II Headphones</h2>
        <p className="opacity-50">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <Button type="primary">
          <span>See Product</span>
        </Button>
      </div>
    </div>
  );
}

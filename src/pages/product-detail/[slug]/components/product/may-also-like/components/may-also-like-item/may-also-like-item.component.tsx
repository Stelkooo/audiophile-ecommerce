import Image from 'next/image';

import XX99MarkII from 'public/assets/shared/mobile/image-xx99-mark-two-headphones.jpg';

import Button from '@/components/button/button.component';

export default function MayAlsoLikeItem() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex h-28 justify-center rounded-lg bg-neutral-300">
        <Image
          src={XX99MarkII}
          alt="XX99 Mark Two Headphones"
          className="h-28 w-auto"
        />
      </div>
      <div className="flex flex-col items-center gap-8">
        <h3 className="heading-smaller">XX99 Mark II</h3>
        <Button type="primary">
          <span>See Product</span>
        </Button>
      </div>
    </div>
  );
}

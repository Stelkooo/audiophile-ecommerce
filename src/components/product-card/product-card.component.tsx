import Image from 'next/image';

import XX99MarkIIHeadphones from 'public/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function ProductCard({ children }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <Image
        src={XX99MarkIIHeadphones}
        alt="XX99 Mark II Headphones"
        className="rounded-lg"
      />
      <div className="flex flex-col gap-6">
        <p className="heading-overline text-orange-700">New Product</p>
        <h2 className="heading-small">XX99 Mark II Headphones</h2>
        <p className="opacity-50">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        {children}
      </div>
    </div>
  );
}

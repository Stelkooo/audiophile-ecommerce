import Button from '@/components/button/button.component';

export default function Hero() {
  return (
    <div className="relative grid justify-items-center overflow-hidden bg-neutral-900 px-6 py-28 text-center text-white before:absolute before:-top-96 before:h-[1200px] before:w-[750px] before:scale-50 before:bg-[url('/assets/home/mobile/image-header.jpg')]">
      <p className="heading-overline mb-4 opacity-50">New Product</p>
      <h1 className="relative mb-6 text-4xl">XX99 Mark II Headphones</h1>
      <p className="mb-7 opacity-75">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button type="primary">See Product</Button>
    </div>
  );
}

import Image from 'next/image';

import { useState } from 'react';

import Image1 from 'public/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg';
import Image2 from 'public/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg';
import Image3 from 'public/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg';

import About from '@/components/about/about.component';
import CategoryLinks from '@/components/products-list/category-links.component';
import ProductCard from '@/components/product-card/product-card.component';
import Button from '@/components/button/button.component';
import ItemAmount from '@/components/item-amount/item-amount.component';
import GoBack from '@/components/go-back/go-back.component';

import MayAlsoLike from './may-also-like/may-also-like.component';

export default function Product() {
  const [amount, setAmount] = useState<number>(1);

  const minusOnClickHandler = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  const addOnClickHandler = () => {
    setAmount(amount + 1);
  };
  return (
    <main className="mx-auto mb-[7.5rem] w-[327px]">
      <GoBack />
      <div className="grid gap-y-[7.5rem]">
        <div className="grid gap-y-[5.5rem]">
          <ProductCard>
            <div className="flex flex-col gap-8">
              <p>$ 2,999</p>
              <div className="flex items-center gap-4">
                <ItemAmount
                  amount={amount}
                  minusOnClickHandler={minusOnClickHandler}
                  addOnClickHandler={addOnClickHandler}
                  chunky
                />
                <Button type="primary">
                  <span>Add To Cart</span>
                </Button>
              </div>
            </div>
          </ProductCard>
          <div className="grid gap-y-6">
            <h2 className="heading-small">Features</h2>
            <p className="font-medium opacity-50">
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you&apos;re taking a business call or just in
              your own personal space, the auto on/off and pause features ensure
              that you&apos;ll never miss a beat.
            </p>
            <p className="font-medium opacity-50">
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
          <div className="grid gap-y-6">
            <h2 className="heading-small">In the box</h2>
            <div className="grid gap-y-2">
              <div className="flex gap-6">
                <p className="font-bold text-orange-700">1x</p>
                <p className="font-medium opacity-50">Headphone Unit</p>
              </div>
              <div className="flex gap-6">
                <p className="font-bold text-orange-700">2x</p>
                <p className="font-medium opacity-50">Replacement Earcups</p>
              </div>
              <div className="flex gap-6">
                <p className="font-bold text-orange-700">1x</p>
                <p className="font-medium opacity-50">User Manual</p>
              </div>
              <div className="flex gap-6">
                <p className="font-bold text-orange-700">1x</p>
                <p className="font-medium opacity-50">3.5mm 5m Audio Cable</p>
              </div>
              <div className="flex gap-6">
                <p className="font-bold text-orange-700">1x</p>
                <p className="font-medium opacity-50">Travel Bag</p>
              </div>
            </div>
          </div>
          <div className="grid gap-y-5">
            <Image src={Image1} alt="" className="rounded-lg" />
            <Image src={Image2} alt="" className="rounded-lg" />
            <Image src={Image3} alt="" className="rounded-lg" />
          </div>
        </div>
        <MayAlsoLike />
        <CategoryLinks />
        <About />
      </div>
    </main>
  );
}

import CategoryLinks from '@/components/products-list/category-links.component';
import About from '@/components/about/about.component';

import ProductCard from '../product-card/product-card.component';

export default function Category() {
  return (
    <main>
      <div className="bg-neutral-900 py-8 text-center text-white">
        <h1 className="heading-small">Headphones</h1>
      </div>
      <div className="mx-auto mb-[7.5rem] mt-16 grid w-[327px] gap-y-[7.5rem]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <CategoryLinks />
        <About />
      </div>
    </main>
  );
}

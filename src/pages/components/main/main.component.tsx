import CategoryLinks from '@/components/products-list/category-links.component';
import About from '@/components/about/about.component';
import CartModal from '@/components/modal/components/cart-modal/cart-modal.component';

import Hero from './components/hero/hero.component';
import FeaturedProducts from './components/featured-products/featured-products.component';

export default function Main() {
  return (
    <main>
      <Hero />
      <div className="mx-auto grid w-[327px] gap-y-[7.5rem] pb-[7.5rem] pt-10">
        <CategoryLinks />
        <FeaturedProducts />
        <About />
      </div>
    </main>
  );
}

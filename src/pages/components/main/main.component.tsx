import CategoryLinks from '@/components/products-list/category-links.component';
import Hero from './components/hero/hero.component';

export default function Main() {
  return (
    <main>
      <Hero />
      <div className="mx-auto grid w-[327px] gap-y-[7.5rem] pb-[7.5rem] pt-10">
        <CategoryLinks />
      </div>
    </main>
  );
}

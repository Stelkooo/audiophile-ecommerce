import LargeFeaturedProduct from './components/large-featured-product/large-featured-product.component';
import MediumFeaturedProduct from './components/medium-featured-product/medium-featured-product.component';
import SmallFeaturedProduct from './components/small-featured-product/small-featured-product.component';

export default function FeaturedProducts() {
  return (
    <div className="grid gap-y-6">
      <LargeFeaturedProduct />
      <MediumFeaturedProduct />
      <SmallFeaturedProduct />
    </div>
  );
}

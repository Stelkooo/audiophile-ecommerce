import LargeFeaturedProduct from './common/large-featured-product/large-featured-product.component';
import MediumFeaturedProduct from './common/medium-featured-product/medium-featured-product.component';
import SmallFeaturedProduct from './common/small-featured-product/small-featured-product.component';

export default function FeaturedProducts() {
  return (
    <div className="grid gap-y-6 xl:gap-y-8">
      <LargeFeaturedProduct />
      <MediumFeaturedProduct />
      <SmallFeaturedProduct />
    </div>
  );
}

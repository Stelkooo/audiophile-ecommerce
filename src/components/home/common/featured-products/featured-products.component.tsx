import { IFeatureProducts } from '@/types';
import LargeFeaturedProduct from './common/large-featured-product/large-featured-product.component';
import MediumFeaturedProduct from './common/medium-featured-product/medium-featured-product.component';
import SmallFeaturedProduct from './common/small-featured-product/small-featured-product.component';

type Props = {
  products: IFeatureProducts;
};

export default function FeaturedProducts({ products }: Props) {
  return (
    <div className="grid gap-y-6 xl:gap-y-8">
      {products && (
        <>
          <LargeFeaturedProduct product={products.large} />
          <MediumFeaturedProduct product={products.medium} />
          <SmallFeaturedProduct product={products.small} />
        </>
      )}
    </div>
  );
}

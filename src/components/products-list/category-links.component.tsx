import Headphones from 'public/assets/shared/desktop/image-category-thumbnail-headphones.png';
import Speakers from 'public/assets/shared/desktop/image-category-thumbnail-speakers.png';
import Earphones from 'public/assets/shared/desktop/image-category-thumbnail-earphones.png';

import CategoryCard from './components/category-card/category-card.component';

export default function CategoryLinks() {
  return (
    <div className="grid w-full gap-y-4">
      <CategoryCard name="Headphones" image={Headphones} />
      <CategoryCard name="Speakers" image={Speakers} />
      <CategoryCard name="Earphones" image={Earphones} />
    </div>
  );
}

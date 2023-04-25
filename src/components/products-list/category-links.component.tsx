import { groq } from 'next-sanity';

import { ICategory } from '@/types';

import CategoryCard from './components/category-card/category-card.component';

export const getCategoriesQuery = groq`*[_type=="category"]`;

type Props = {
  categories: ICategory[];
};

export default function CategoryLinks({ categories }: Props) {
  return (
    <div className="grid w-full gap-y-4">
      {categories.map((category) => (
        <CategoryCard category={category} key={category._id} />
      ))}
    </div>
  );
}

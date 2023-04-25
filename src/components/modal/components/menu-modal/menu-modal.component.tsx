import CategoryLinks from '@/components/products-list/category-links.component';
import { ICategory } from '@/types';

import Modal from '../../modal.component';

type Props = {
  categories: ICategory[];
};

export default function MenuModal({ categories }: Props) {
  return (
    <Modal tailwind="absolute left-1/2 z-50 flex w-full h-2/3 -translate-x-1/2 rounded-b-md py-8 px-6 min-h-fit overflow-y-scroll">
      <CategoryLinks categories={categories} />
    </Modal>
  );
}

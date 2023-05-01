import { ICategory } from '@/types';

import CategoryLinks from '@/components/common/category-links/category-links.component';

import Modal from '../../modal.component';

type Props = {
  categories: ICategory[];
};

export default function MenuModal({ categories }: Props) {
  return (
    <Modal tailwind="absolute left-1/2 z-50 flex w-full h-2/3 md:h-min -translate-x-1/2 rounded-b-md py-8 px-6 min-h-fit overflow-y-scroll">
      <CategoryLinks categories={categories} />
    </Modal>
  );
}

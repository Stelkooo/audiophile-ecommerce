import { ICategory } from '@/types';

import CategoryLinks from '@/components/common/category-links/category-links.component';

import Modal from '../../modal.component';

type Props = {
  categories: ICategory[];
  toggle: () => void;
};

export default function MenuModal({ categories, toggle }: Props) {
  return (
    <Modal
      tailwind="absolute left-0 top-[90px] z-50 flex w-full h-2/3 md:h-min rounded-b-md px-6"
      toggle={toggle}
    >
      <div className="w-full overflow-y-auto pb-6 pt-2">
        <CategoryLinks categories={categories} />
      </div>
    </Modal>
  );
}

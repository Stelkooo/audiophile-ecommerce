import CategoryLinks from '@/components/products-list/category-links.component';
import Modal from '../../modal.component';

export default function MenuModal() {
  return (
    <Modal tailwind="absolute left-1/2 z-50 flex w-full h-2/3 -translate-x-1/2 rounded-b-md py-8 px-6 min-h-fit overflow-y-scroll">
      <CategoryLinks />
    </Modal>
  );
}

'use client';

import usePreview from '@/lib/sanity.preview';
import CategoryLinks, { getCategoriesQuery } from './category-links.component';

export default function PreviewCategoryLinks() {
  const categories = usePreview(null, getCategoriesQuery);
  return <CategoryLinks categories={categories} />;
}

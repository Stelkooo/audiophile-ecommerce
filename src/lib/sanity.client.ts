import { createClient } from 'next-sanity';

import { ICategory, IHero, INavLink, IProduct, TSlugPayload } from '@/types';

import {
  categoriesQuery,
  categoriesSlugQuery,
  categoryQuery,
  productQuery,
  navLinksQuery,
  productsSlugQuery,
  heroQuery,
} from './sanity.queries';

import { apiVersion, dataset, projectId, useCdn } from '../sanity.env';

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getNavLinks(): Promise<INavLink[]> {
  const res = await client.fetch(navLinksQuery);
  return res;
}

export async function getHero(): Promise<IHero> {
  const res = await client.fetch(heroQuery);
  return res;
}

export async function getCategories(): Promise<ICategory[]> {
  const res = await client.fetch(categoriesQuery);
  return res;
}

export async function getCategoriesSlug(): Promise<TSlugPayload> {
  const res = await client.fetch(categoriesSlugQuery);
  return res;
}

export async function getCategory(slug: string): Promise<ICategory> {
  const res = await client.fetch(categoryQuery, { slug });
  return res;
}

export async function getProductsSlug(): Promise<TSlugPayload> {
  const res = await client.fetch(productsSlugQuery);
  return res;
}

export async function getProduct(slug: string): Promise<IProduct> {
  const res = await client.fetch(productQuery, { slug });
  return res;
}

export default client;

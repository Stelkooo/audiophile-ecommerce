import { groq } from 'next-sanity';

export const navLinksQuery = groq`
*[_type=="category"] |order(_createdAt desc){
  _id,
  name,
  slug,
}
`;

export const heroQuery = groq`
*[_type=="hero"][0]{
  name,
  description,
  slug,
  image,
}
`;

export const categoriesQuery = groq`
*[_type=="category"] | order(_createdAt desc)
`;

export const categoriesSlugQuery = groq`
*[_type=="category"]{
  "slug": slug.current,
}
`;

export const categoryQuery = groq`
*[_type=="category" && slug.current==$slug][0]{
  name,
  "products": *[_type=="product" && references(^._id)]{
    categoryImages,
    _id,
    isNew,
    name,
    description,
    slug,
    category-> {
      name
    },
  }
}
`;
export const productsSlugQuery = groq`
  *[_type=="product"]{
    "slug": slug.current,
}
`;

export const productQuery = groq`
*[_type=="product" && slug.current==$slug][0]{
  _id,
  images,
  isNew,
  name,
  description,
  price,
  features,
  includes,
  gallery,
  others[]->,
  cartImage,
}
`;

export const featureProductsQuery = groq`
*[_type=="feature"][0]
`;

export const aboutQuery = groq`
*[_type=="about"][0]
`;

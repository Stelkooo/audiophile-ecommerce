type Base = {
  _createdAt?: string;
  _id?: string;
  _updatedAt?: string;
  _type?: string;
  _rev?: string;
};

export interface ICategory extends Base {
  name?: string;
  slug?: Slug;
  thumbnail?: Image;
  products?: IProduct[];
}

export interface IProduct extends Base {
  name?: string;
  slug?: Slug;
  images?: Images;
  category?: Reference;
  categoryImages?: Images;
  isNew?: boolean;
  price?: number;
  description?: string;
  features?: string[];
  includes?: IncludeItem[];
  gallery?: Gallery;
  others?: IOther[];
}

export interface IOther extends Base {
  name?: string;
  slug?: Slug;
  images?: Images;
}

export type TSlugPayload = [
  {
    slug?: string;
  }
];

interface Image {
  _type?: 'image';
  asset?: Reference;
}

interface Images {
  mobile: Image;
  tablet: Image;
  desktop: Image;
}

interface Gallery {
  first: Images;
  second: Images;
  third: Images;
}

interface Reference {
  _ref?: string;
  _type?: 'reference';
}

interface Slug {
  _type?: 'slug';
  current?: string;
}

interface IncludeItem {
  quantity?: number;
  item?: string;
  _key?: string;
}

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
  thumbnail?: IImage;
  products?: IProduct[];
}

export interface IProduct extends Base {
  name?: string;
  slug?: Slug;
  images?: Images;
  category?: ICategory;
  categoryImages?: Images;
  isNew?: boolean;
  price?: number;
  description?: string;
  features?: string[];
  includes?: IncludeItem[];
  gallery?: Gallery;
  others?: IOther[];
  cartImage?: IImage;
}

export interface IOther extends Base {
  name?: string;
  slug?: Slug;
  images?: Images;
}

export interface INavLink extends Base {
  name?: string;
  slug?: Slug;
}

export interface IHero extends Base {
  name: string;
  description: string;
  slug: string;
  image: Images;
}

export interface IFeatureProduct extends Base {
  name: string;
  slug: Slug;
  description?: string;
  images: Images;
}

export interface IFeatureProducts extends Base {
  large: IFeatureProduct;
  medium: IFeatureProduct;
  small: IFeatureProduct;
}

export interface IAbout extends Base {
  heading: object[];
  description: string;
  image: Images;
}

export type TSlugPayload = [
  {
    slug?: string;
  }
];

export interface IImage {
  _type?: 'image';
  asset?: Reference;
}

interface Images {
  mobile: IImage;
  tablet: IImage;
  desktop: IImage;
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

export interface IFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  emoneynumber?: string;
  emoneypin?: string;
  paymentMethod: string;
}

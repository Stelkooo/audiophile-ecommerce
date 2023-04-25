import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'object',
      fields: [
        { name: 'mobile', title: 'Mobile', type: 'image' },
        { name: 'tablet', title: 'Tablet', type: 'image' },
        { name: 'desktop', title: 'Desktop', type: 'image' },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categoryImages',
      title: 'Category Images',
      type: 'object',
      fields: [
        { name: 'mobile', title: 'Mobile', type: 'image' },
        { name: 'tablet', title: 'Tablet', type: 'image' },
        { name: 'desktop', title: 'Desktop', type: 'image' },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isNew',
      title: 'New',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'text' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'includes',
      title: 'Includes',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'items',
          type: 'object',
          fields: [
            { name: 'quantity', title: 'Quantity', type: 'number' },
            { name: 'item', title: 'Item', type: 'string' },
          ],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'object',
      fields: [
        {
          name: 'first',
          title: 'First',
          type: 'object',
          fields: [
            { name: 'mobile', title: 'Mobile', type: 'image' },
            { name: 'tablet', title: 'Tablet', type: 'image' },
            { name: 'desktop', title: 'Desktop', type: 'image' },
          ],
        },
        {
          name: 'second',
          title: 'Second',
          type: 'object',
          fields: [
            { name: 'mobile', title: 'Mobile', type: 'image' },
            { name: 'tablet', title: 'Tablet', type: 'image' },
            { name: 'desktop', title: 'Desktop', type: 'image' },
          ],
        },
        {
          name: 'third',
          title: 'Third',
          type: 'object',
          fields: [
            { name: 'mobile', title: 'Mobile', type: 'image' },
            { name: 'tablet', title: 'Tablet', type: 'image' },
            { name: 'desktop', title: 'Desktop', type: 'image' },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'others',
      title: 'Others',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'other' }] })],
      validation: (rule) => rule.required(),
    }),
  ],
  initialValue: {
    isNew: false,
  },
});

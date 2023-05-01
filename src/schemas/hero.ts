import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero',
  title: 'Hero',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Images',
      type: 'object',
      fields: [
        { name: 'mobile', title: 'Mobile', type: 'image' },
        { name: 'tablet', title: 'Tablet', type: 'image' },
        { name: 'desktop', title: 'Desktop', type: 'image' },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});

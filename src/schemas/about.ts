import { defineField, defineArrayMember, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'H4', value: 'h4' }],
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
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

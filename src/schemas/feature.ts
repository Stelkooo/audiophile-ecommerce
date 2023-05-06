import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'feature',
  title: 'Features',
  type: 'document',
  fields: [
    defineField({
      name: 'large',
      title: 'Large',
      type: 'featureProduct',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'featureProduct',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'small',
      title: 'Small',
      type: 'featureProduct',
      validation: (rule) => rule.required(),
    }),
  ],
});

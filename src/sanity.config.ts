import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemaTypes from './schemas';
import myTheme from './sanity.theme';

import { apiVersion, dataset, projectId } from './sanity.env';

export default defineConfig({
  basePath: '/studio',
  name: 'Audiophile',
  title: 'Audiophile',
  projectId,
  dataset,

  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],

  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
});

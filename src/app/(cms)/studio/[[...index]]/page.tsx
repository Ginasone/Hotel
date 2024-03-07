'use client';

import { NextStudio } from 'C:/Users/georg/OneDrive/Desktop/nodejs project/hotel1-management/node_modules/next-sanity/dist/studio';
import config from '../../../../../sanity.config';

export default function Studio() {
  return <NextStudio config={config} />;
};

// src/types/content.ts

export type ContentItem = {
  type: 'text' | 'image';
  data: string;
};

export type Section = {
  name: string;
  contents?: ContentItem[];
};

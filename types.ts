import type React from 'react';

export interface SlideContent {
  id: number;
  title: string;
  content?: string | string[];
  image?: string;
  component?: React.ReactNode;
  backgroundColor?: string;
  backgroundImage?: string;
  textColor?: string;
  titleClassName?: string;
  imageClassName?: string;
}
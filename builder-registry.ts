import { theme } from '@/types';
import { Builder } from '@builder.io/react'
import { Model } from '@/types';
import dynamic from 'next/dynamic';

Builder.registerComponent(
  dynamic(() => import('@/components/Hero/Hero')),
  {
    name: 'Hero',
    inputs: [
			{name: 'title', type: 'text', defaultValue: 'Edit Title'},
			{name: 'description', type: 'text', defaultValue: 'Edit Descriptions'},
			{name: 'theme', type: 'text', enum: theme as unknown as string[], defaultValue: theme[0]}
		],
		defaultStyles: {
			margin: '0',
		},
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/new-section.png'
  }
)

Builder.registerComponent(
  dynamic(() => import('@/components/Header/Header')),
  {
    name: 'Header',
    inputs: [
			{friendlyName: 'navigation links', name: 'navLinks', type: 'reference', model: Model.Navigation},
			{name: 'theme', type: 'text', enum: theme as unknown as string[], defaultValue: theme[0]}
		],
		defaultStyles: {
			margin: '0',
		},
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/layout-navbar.png'
  }
)
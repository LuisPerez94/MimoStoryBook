import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import ProductCard from './../components/commerce/product/productCard';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);


storiesOf('Product Card', module)
  .add('with no product', () => <ProductCard />)
  .add('with product', () => <ProductCard />);

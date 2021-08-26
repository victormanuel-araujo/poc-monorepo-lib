import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

import logo from '../assets/logo-smash-sm.png'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Smash',
    brandImage: logo,
  }),
});

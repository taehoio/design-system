import React from 'react';
import { storiesOf } from '@storybook/react';

import TailwindComponent from './TailwindComponent';

storiesOf('Tailwind Component', module).add('example', () => (
  <TailwindComponent />
));

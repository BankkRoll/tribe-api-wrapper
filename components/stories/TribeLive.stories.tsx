import React from 'react';
import { Meta } from '@storybook/react';

export default {
  title: 'Tribe',
} as Meta;

export const TribeLive = () => (
  <div>
       <iframe
        src="https://mytriberewards.com/"
        width="100%"
        height="800"
        />
  </div>
);

TribeLive.storyName = 'Tribe';

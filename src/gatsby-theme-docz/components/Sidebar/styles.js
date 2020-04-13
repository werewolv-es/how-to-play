// https://github.com/doczjs/docz/blob/master/core/gatsby-theme-docz/src/components/Sidebar/styles.js
import * as styles from '~components/Sidebar/styles';
import { merge } from 'lodash/fp';

export const global = styles.global;

export const overlay = styles.overlay;

export const wrapper = ({ open }) =>
  merge(styles.wrapper({ open }), {
    overflow: 'hidden auto'
  });

// https://github.com/doczjs/docz/blob/master/core/gatsby-theme-docz/src/components/Sidebar/styles.js
import {
  global as globalStyle,
  overlay as overlayStyle,
  wrapper as wrapperStyle,
} from '~components/Sidebar/styles';
import { merge } from 'lodash/fp';

export const global = globalStyle;

export const overlay = overlayStyle;

export const wrapper = ({ open }) =>
  merge(wrapperStyle({ open }), {
    overflow: 'hidden auto',
  });

// https://github.com/doczjs/docz/blob/master/core/gatsby-theme-docz/src/components/Logo/styles.js
import * as styles from '~components/Logo/styles';
import { merge } from 'lodash/fp';

export const logo = styles.logo;

export const link = merge(styles.link, {
  color: 'header.navLink',
  ':hover': {
    color: 'header.navLinkActive'
  }
});

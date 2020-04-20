// https://github.com/doczjs/docz/blob/master/core/gatsby-theme-docz/src/components/Header/styles.js
import * as styles from '~components/Header/styles';
import { merge } from 'lodash/fp';

export const wrapper = styles.wrapper;

export const innerContainer = merge(styles.innerContainer, {
  height: 40
});

export const menuIcon = styles.menuIcon;

export const menuButton = styles.menuButton;

export const headerButton = styles.headerButton;

export const editButton = styles.editButton;

export const link = {
  color: 'header.navLink',
  fontWeight: 400,
  lineHeight: '25px',
  marginLeft: 30,
  textDecoration: 'none',
  ':hover': {
    color: 'header.navLinkActive'
  }
};

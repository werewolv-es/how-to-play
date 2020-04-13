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

export const global = styles.global;

export const overlay = styles.overlay;

export const link = {
  color: 'header.text',
  fontWeight: 400,
  lineHeight: '25px',
  paddingLeft: 30,
  textDecoration: 'none',
  ':hover': {
    color: 'primary'
  }
};

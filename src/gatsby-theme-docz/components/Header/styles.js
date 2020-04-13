// https://github.com/doczjs/docz/blob/master/core/gatsby-theme-docz/src/components/Header/styles.js
import {
  wrapper as wrapperStyle,
  innerContainer as innerContainerStyle,
  menuIcon as menuIconStyle,
  menuButton as menuButtonStyle,
  headerButton as headerButtonStyle,
  editButton as editButtonStyle,
  global as globalStyle,
  overlay as overlayStyle
} from '~components/Header/styles';
import { merge } from 'lodash/fp';

export const wrapper = wrapperStyle;

export const innerContainer = merge(innerContainerStyle, {
  height: 40
});

export const menuIcon = menuIconStyle;

export const menuButton = menuButtonStyle;

export const headerButton = headerButtonStyle;

export const editButton = editButtonStyle;

export const global = globalStyle;

export const overlay = overlayStyle;

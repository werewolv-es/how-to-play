/** @jsx jsx */
// https://github.com/doczjs/docz/blob/master/core/gatsby-theme-docz/src/theme/index.js
import { jsx } from 'theme-ui';
import { theme, useConfig, ComponentsProvider } from 'docz';
import { Styled, ThemeProvider } from 'theme-ui';
import { merge } from 'lodash/fp';

import defaultTheme from '~theme';
import components from '~components';

const Theme = ({ children }) => {
  const config = useConfig();
  return (
    <ThemeProvider theme={config.themeConfig} components={components}>
      <ComponentsProvider components={components}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  );
};

const themeConfig = merge(defaultTheme, {
  colors: {
    background: '',
    header: {
      bg: '#f1f1f1',
      border: '#d2d2d2',
      text: '#000',
      button: {
        bg: '#f1f1f1',
        color: '#000'
      }
    },
    link: '#337ab7',
    sidebar: {
      bg: '#fff',
      border: '#fff',
      navGroup: '#337ab7',
      navLink: '#337ab7',
      navLinkActive: '#000',
      tocLink: '#337ab7',
      tocLinkActive: '#000'
    },
    text: '#000',
    modes: {
      dark: {
        background: '#000',
        header: {
          bg: '#222',
          border: '#222',
          text: 'rgb(157, 157, 157)',
          button: {
            bg: '#222',
            color: '#fafad2'
          }
        },
        link: '#337ab7',
        sidebar: {
          bg: '#000',
          border: '#000',
          navGroup: '#337ab7',
          navLink: '#337ab7',
          navLinkActive: '#fafad2',
          tocLink: '#337ab7',
          tocLinkActive: '#fafad2'
        },
        text: '#fafad2'
      }
    }
  },
  fontSizes: [12, 14, 16, 16, 20, 24, 32, 48],
  initialColorMode: 'dark',
  lineHeights: {
    body: 1.25
  }
});

export default theme(themeConfig)(Theme);

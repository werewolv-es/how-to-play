// https://github.com/doczjs/docz/blob/master/core/gatsby-theme-docz/src/components/Logo/index.js
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { Link, useConfig } from 'docz';

import * as styles from '~components/Logo/styles';

export const Logo = () => {
  const config = useConfig();
  return (
    <Flex alignItems="center" sx={styles.logo} data-testid="logo">
      <Link to={config.base} sx={styles.link}>
        {config.title}
      </Link>
    </Flex>
  );
};

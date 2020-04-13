import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useConfig } from 'docz';

const Wrapper = ({ children, doc }) => {
  const config = useConfig();

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href={`${config.base}${doc.value.route}`} />
        <link rel="icon" type="image/png" href={`${config.base}favicon.ico`} />
      </Helmet>
      {children}
    </React.Fragment>
  );
};
export default Wrapper;

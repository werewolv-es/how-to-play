import * as React from 'react';
import { Helmet } from 'react-helmet-async';

const Wrapper = ({ children, doc }) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="canonical" href={`/guides${doc.value.route}`} />
    </Helmet>
    {children}
  </React.Fragment>
);
export default Wrapper;

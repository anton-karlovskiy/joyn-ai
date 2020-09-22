
import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = React.forwardRef(({
  href,
  hrefAs,
  ...rest
}, ref) => (
  <Link
    style={{
      color: 'inherit',
      textDecoration: 'none'
    }}
    to={href}
    as={hrefAs}
    ref={ref}
    {...rest} />
));

export default ButtonLink;

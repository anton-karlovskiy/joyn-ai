
import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as SearchIcon } from 'assets/icons/svgs/search.svg';
import JoynInputBase from 'components/UI/JoynInputBase';

const JoynSearchBar = ({
  value = '',
  onChange = () => {},
  placeholder = 'Search…',
  ...rest
}) => {
  return (
    <JoynInputBase
      value={value}
      onChange={onChange}
      startAdornment={
        <SearchIcon />
      }
      placeholder={placeholder}
      inputProps={{ 'aria-label': 'search' }}
      {...rest} />
  );
};

JoynSearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default JoynSearchBar;

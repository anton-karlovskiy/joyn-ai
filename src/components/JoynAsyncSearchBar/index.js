
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import CircularProgress from '@material-ui/core/CircularProgress';

import JoynInputBase from 'components/UI/JoynInputBase';

const JoynAsyncSearchBar = ({
  placeholder,
  getOptions,
  style,
  ...rest
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const isLoading = isOpen && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!isLoading) {
      return undefined;
    }

    (async () => {
      const options = await getOptions();

      // TODO: https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
      if (active) {
        setOptions(options);
      }
    })();

    return () => {
      active = false;
    };
  }, [isLoading, getOptions]);

  React.useEffect(() => {
    if (!isOpen) {
      setOptions([]);
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Autocomplete
      style={{
        ...style,
        display: 'inline-block'
      }}
      {...rest}
      open={isOpen}
      onOpen={handleOpen}
      onClose={handleClose}
      options={options}
      loading={isLoading}
      renderInput={params => {
        const {
          inputProps,
          InputProps: {
            startAdornment,
            endAdornment,
            ...restInputProps
          }
        } = params;

        return (
          <JoynInputBase
            placeholder={placeholder}
            startAdornment={startAdornment}
            endAdornment={(
              <>
                {/* TODO: styling is broken with the loading spinner */}
                {/* {isLoading ? (
                  <CircularProgress
                    color='inherit'
                    size={16} />
                ) : null} */}
                {endAdornment}
              </>
            )}
            {...inputProps}
            inputProps={{
              ...restInputProps
            }} />
        );
      }} />
  );
};

export default JoynAsyncSearchBar;

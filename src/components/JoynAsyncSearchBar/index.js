
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';

import JoynInputField from 'components/JoynInputField';

const JoynAsyncSearchBar = ({
  placeholder,
  getOptions = () => [],
  style,
  label,
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
        display: 'inline-block',
        ...style
      }}
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
          <JoynInputField
            label={label}
            placeholder={placeholder}
            startAdornment={startAdornment}
            endAdornment={(
              <>
                {/**
                 * TODO:
                 * Styling is broken with a loading spinner so blocked.
                 * endAdornment should be a magnifier icon.
                 */}
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
      }}
      {...rest} />
  );
};

export default JoynAsyncSearchBar;

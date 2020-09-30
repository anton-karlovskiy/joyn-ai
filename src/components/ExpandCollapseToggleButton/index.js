
import React from 'react';

import JoynButton from 'components/JoynButton';
import { ReactComponent as ExpandLess } from 'assets/icons/svgs/expand-less.svg';
import { ReactComponent as ExpandMore } from 'assets/icons/svgs/expand-more.svg';
import BUTTON_TYPES from 'utils/constants/button-types';

const ExpandCollapseToggleButton = ({
  isExpanded,
  ...rest
}) => {
  return (
    <>
      {isExpanded ? (
        <JoynButton
          type={BUTTON_TYPES.SECONDARY}
          endIcon={<ExpandLess />}
          {...rest}>
          Collapse
        </JoynButton>
      ) : (
        <JoynButton
          type={BUTTON_TYPES.SECONDARY}
          endIcon={<ExpandMore />}
          {...rest}>
          Expand
        </JoynButton>
      )}
    </>
  );
};

export default ExpandCollapseToggleButton;

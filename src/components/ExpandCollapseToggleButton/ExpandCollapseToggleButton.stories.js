
import React from 'react';

import ExpandCollapseToggleButton from 'components/ExpandCollapseToggleButton';

const Template = args => {
  const [isExpanded, setIsExpanded] = React.useState();
  const handleClick = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <ExpandCollapseToggleButton
      isExpanded={isExpanded}
      onClick={handleClick}
      {...args} />
  );
};

const Default = Template.bind({});
Default.args = {};

export default {
  title: 'ExpandCollapseToggleButton',
  component: ExpandCollapseToggleButton
};

export {
  Default
};

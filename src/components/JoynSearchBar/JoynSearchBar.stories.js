
import React from 'react';

import JoynSearchBar from 'components/JoynSearchBar';

const Template = args => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <JoynSearchBar
      {...args}
      value={searchTerm}
      onChange={handleSearchTermChange} />
  );
};

const SimpleTextSearch = Template.bind({});
SimpleTextSearch.args = {
  id: 'joyn-search-bar',
  placeholder: 'Search...'
};
SimpleTextSearch.storyName = 'Simple/Free text Search';

export default {
  title: 'JoynSearchBar',
  component: JoynSearchBar
};

export {
  SimpleTextSearch
};

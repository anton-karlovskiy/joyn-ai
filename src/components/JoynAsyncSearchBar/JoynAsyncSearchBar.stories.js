
import React from 'react';

import JoynAsyncSearchBar from 'components/JoynAsyncSearchBar';

const getAsyncOptions = async () => {
  const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
  const countries = await response.json();
  const options = Object.keys(countries).map(key => countries[key].item[0]);

  return options;
};

const Template = args => {
  const [asyncSearchTerm, setAsyncSearchTerm] = React.useState(null);

  const handleAsyncSearchTermChange = (event, newAsyncSearchTerm) => {
    setAsyncSearchTerm(newAsyncSearchTerm);
  };

  return (
    <JoynAsyncSearchBar
      value={asyncSearchTerm}
      onChange={handleAsyncSearchTermChange}
      {...args} />
  );
};

const SearchWithSuggestions = Template.bind({});
SearchWithSuggestions.args = {
  id: 'joyn-async-search-bar',
  label: 'Parent Option Group',
  placeholder: 'Choose',
  getOptions: getAsyncOptions,
  getOptionLabel: option => option.name,
  getOptionSelected: (option, value) => option.name === value.name
};
SearchWithSuggestions.storyName = 'Search - With Suggestions';

export default {
  title: 'JoynAsyncSearchBar',
  component: JoynAsyncSearchBar
};

export {
  SearchWithSuggestions
};

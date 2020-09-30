
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import DownloadIconButton from 'components/JoynIconButtons/DownloadIconButton';
import MenuDotIconButton from 'components/JoynIconButtons/MenuDotIconButton';
import CrossIconButton from 'components/JoynIconButtons/CrossIconButton';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}));

const Template = args => (
  <>
    <DownloadIconButton {...args} />
    <MenuDotIconButton {...args} />
    <CrossIconButton {...args} />
  </>
);

const defaultArgs = {
  size: 'medium',
  color: 'inherit',
  loading: false,
  disabled: false
};

const DefaultJoynIconButtonsGrid = Template.bind({});
DefaultJoynIconButtonsGrid.args = {
  ...defaultArgs,
  color: 'primary'
};

const SmallSizeJoynIconButtonsGrid = Template.bind({});
SmallSizeJoynIconButtonsGrid.args = {
  ...defaultArgs,
  size: 'small',
  color: 'primary'
};

const DisabledJoynIconButtonsGrid = Template.bind({});
DisabledJoynIconButtonsGrid.args = {
  ...defaultArgs,
  color: 'secondary',
  disabled: true
};

const LoadingJoynIconButtonsGrid = Template.bind({});
LoadingJoynIconButtonsGrid.args = {
  ...defaultArgs,
  loading: true
};

export default {
  title: 'JoynIconButtons',
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'inherit']
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['medium', 'small']
      }
    }
  },
  decorators: [Story => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Story />
      </div>
    );
  }]
};

export {
  DefaultJoynIconButtonsGrid,
  SmallSizeJoynIconButtonsGrid,
  DisabledJoynIconButtonsGrid,
  LoadingJoynIconButtonsGrid
};

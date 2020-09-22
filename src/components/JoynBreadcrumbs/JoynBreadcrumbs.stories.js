
import React from 'react';

import JoynBreadcrumbs from 'components/JoynBreadcrumbs';
import { ReactComponent as FacilityIcon } from 'assets/icons/svgs/facility.svg';
import { ReactComponent as NetworkGroupIcon } from 'assets/icons/svgs/network-group.svg';
import { ReactComponent as NetworkIcon } from 'assets/icons/svgs/network.svg';
import noop from 'utils/helpers/noop';

const routes = [
  {
    title: 'Facility B',
    onClick: noop
  },
  {
    title: 'Network Group',
    onClick: noop
  },
  {
    title: 'Network',
    onClick: noop
  }
];

const routesIcon = [
  {
    href: '/',
    icon: <FacilityIcon />,
    title: 'Facility B',
    onClick: noop
  },
  {
    href: '/',
    icon: <NetworkGroupIcon />,
    title: 'Network Group',
    onClick: noop
  },
  {
    href: '/',
    icon: <NetworkIcon />,
    title: 'Network',
    onClick: noop
  }
];

const Template = args => {
  return (
    <div>
      <JoynBreadcrumbs {...args} />
    </div>
  );
};

const Default = Template.bind({});
Default.args = {
  routes: routes
};

const WithIcons = Template.bind({});
WithIcons.args = {
  routes: routesIcon
};

const WithLinks = Template.bind({});
WithLinks.args = {
  routes: routes.map(item => ({ ...item, href: '/' }))
};

export default {
  title: 'JoynBreadcrumbs',
  component: JoynBreadcrumbs
};

export {
  Default,
  WithLinks,
  WithIcons
};

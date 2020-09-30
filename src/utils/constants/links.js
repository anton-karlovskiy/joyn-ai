
import { GENERICS } from './common';

// TODO: modularize later once we've implemented most of the pages and confirmed they are working smoothly
const PAGES = Object.freeze({
  // Allocation
  HOME: '/',
  MANGE_NETWORKS: '/allocations/manage-networks',
  MONTHLY_CLOSE: '/allocations/monthly-close',
  ALLOCATION_CONFIG: '/allocation/config',
  SCHEDULER: '/allocations/scheduler',

  // Components
  ASSETS: '/components/assets',
  READING_VIEWS: '/components/reading-views',
  PICKLISTS: '/components/picklists',

  // Components - Picklists
  PICKLISTS_GENERICS: '/components/picklists/generics',
  PICKLISTS_TRANSPORTERS: '/components/picklists/transporters',
  PICKLISTS_PURCHASERS: '/components/picklists/purchasers',
  PICKLISTS_TANK_STRAPPINGS: '/components/picklists/tank-strappings',
  PICKLISTS_DYNAMIC_LOOKUPS: '/components/picklists/dynamic-lookups',

  // Components - Picklists - Generics
  PICKLISTS_GENERICS_ADD: `/components/picklists/generics/${GENERICS.ADD}`,
  PICKLISTS_GENERICS_EDIT: `/components/picklists/generics/${GENERICS.EDIT}/:${GENERICS.ID}`,
  PICKLISTS_GENERICS_VIEW: `/components/picklists/generics/${GENERICS.VIEW}/:${GENERICS.ID}`,
  PICKLISTS_GENERICS_ADD_OPTION: `/components/picklists/generics/:${GENERICS.ID}/${GENERICS.ADD_OPTION}`,
  PICKLISTS_GENERICS_EDIT_OPTION:
    `/components/picklists/generics/:${GENERICS.ID}/${GENERICS.EDIT_OPTION}/:${GENERICS.OPTION_ID}`,

  PICKLISTS_TRANSPORTERS_ADD: `/components/picklists/transporters/${GENERICS.ADD}`,
  PICKLISTS_PURCHASERS_ADD: `/components/picklists/purchasers/${GENERICS.ADD}`,
  PICKLISTS_TANK_STRAPPINGS_ADD: `/components/picklists/tank-strappings/${GENERICS.ADD}`,
  PICKLISTS_DYNAMIC_LOOKUPS_ADD: `/components/picklists/dynamic-lookups/${GENERICS.ADD}`
});

export {
  PAGES
};

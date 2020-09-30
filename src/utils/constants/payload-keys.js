
const PAYLOAD_KEYS = Object.freeze({
  // Generic
  ID: 'id',
  NAME: 'n',
  CREATED_BY: 'crby',
  CREATED_ON: 'cron',
  MODIFIED_BY: 'mdby',
  MODIFIED_ON: 'mdon',
  CREATED_BY_NAME: 'crbyn',
  MODIFIED_BY_NAME: 'mdbyn',
  UUID: 'UUID',
  // Specific to picklist
  DISPLAY_NAME: 'dn',
  CUSTOMIZABLE: 'icble',
  PARENT_PICKLIST_OPTIONS_SET_ID: 'pplistsid',
  PARENT_PICKLIST_OPTIONS_SET_NAME: 'pplistsidname',

  PICKLIST_OPTIONS_SET_ID: 'sid',
  PARENT_PICKLIST_OPTION_ID: 'pplistid',
  PARENT_PICKLIST_ID_NAME: 'pplistidname',
  VALUE: 'v',
  CODE: 'code',
  DESCRIPTION: 'd',
  IS_ACTIVE: 'IsActive',
  SORT_ORDER: 'so'
});

export default PAYLOAD_KEYS;

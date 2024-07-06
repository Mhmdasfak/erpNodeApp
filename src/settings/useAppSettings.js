const useAppSettings = () => {
  let settings = {};
  settings['invenstock_app_email'] = 'noreply@invenstockapp.com';
  settings['invenstock_base_url'] = 'https://cloud.invenstockapp.com';
  return settings;
};

module.exports = useAppSettings;

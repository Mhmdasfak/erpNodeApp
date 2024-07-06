const useDate = ({ settings }) => {
  const { invenstock_app_date_format } = settings;

  const dateFormat = invenstock_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;

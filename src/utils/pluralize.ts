export const pluralize = (qnt = 0, singular = "", plural = "") => {
  if (qnt === 1) {
    return singular;
  }

  return !!plural ? plural : `${singular}s`;
};

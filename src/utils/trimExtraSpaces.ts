export default (stringToModify: string) => {
  return stringToModify.replace(/\s\s+/g, ' ').trim();
};

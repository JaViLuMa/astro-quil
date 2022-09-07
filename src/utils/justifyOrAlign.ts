export default (flexDirection: string) => {
  const [_flex, direction] = flexDirection.split('-');

  if (direction === 'row') {
    return 'justify-center md:items-center';
  } else {
    return 'items-center md:justify-center';
  }
};

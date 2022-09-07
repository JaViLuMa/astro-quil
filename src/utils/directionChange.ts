export default (flexDirection: string) => {
  const [_flex, direction] = flexDirection.split('-');

  if (direction === 'row') {
    return 'flex-col';
  } else {
    return 'flex-row';
  }
};

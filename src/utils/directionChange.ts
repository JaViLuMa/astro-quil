export default (
  changeDirection: boolean | undefined,
  flexDirection: 'row' | 'column' | undefined,
  width: number | undefined,
  breakpoint: number | undefined
) => {
  if (changeDirection) {
    if (flexDirection === 'row') {
      if (breakpoint && width && width < breakpoint) {
        return 'column' as 'column';
      }
    } else if (flexDirection === 'column') {
      if (breakpoint && width && width < breakpoint) {
        return 'row' as 'row';
      }
    }
  }

  if (flexDirection === 'row') {
    return 'row' as 'row';
  } else if (flexDirection === 'column') {
    return 'column' as 'column';
  }

  return 'row';
};

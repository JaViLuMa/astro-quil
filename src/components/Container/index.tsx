import useWindowSize from '@hooks/useWindowSize';
import directionChange from '@utils/directionChange';
import { children } from 'solid-js';

const Container = (props: ContainerProps) => {
  const c = children(() => props.children);

  const size = useWindowSize();

  return (
    <div
      style={{
        display: 'flex',
        'justify-content': 'center',
        margin: `${props.margin || '0 auto'}`,
        'max-width': `${props.maxWidth ? `${props.maxWidth}rem` : '100%'}`,
        'flex-direction': `${directionChange(
          props.changeDirection,
          props.flexDirection,
          size().width,
          props.breakpoint
        )}`,
        width: `${props.width ? `${props.width}rem` : 'auto'}`,
      }}
    >
      {c()}
    </div>
  );
};

export default Container;

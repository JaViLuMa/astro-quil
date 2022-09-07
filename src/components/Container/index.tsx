import directionChange from '@utils/directionChange';
import trimExtraSpaces from '@utils/trimExtraSpaces';
import { children } from 'solid-js';

const Container = (props: ContainerProps) => {
  const c = children(() => props.children);

  return (
    <div
      class={trimExtraSpaces(`flex justify-center ${
        props.maxWidth ? `${props.maxWidth}` : `max-w-full`
      } ${props.margin ? `${props.margin}` : `my-0 mx-auto`}
        ${props.width ? `${props.width}` : `w-auto`}
        ${
          props.changeDirection
            ? `${directionChange(props.flexDirection)} ${props.flexDirection}`
            : `${props.flexDirection || ''}`
        }
      `)}
    >
      {c()}
    </div>
  );
};

export default Container;

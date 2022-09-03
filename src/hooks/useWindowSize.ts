import { createEffect, createSignal } from 'solid-js';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = createSignal<WindowSize>({
    width: undefined,
    height: undefined,
  });

  createEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  });

  return windowSize;
};

export default useWindowSize;

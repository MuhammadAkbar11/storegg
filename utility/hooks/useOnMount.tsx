import { useEffect, useRef } from "react";

type Callback = () => void;

function useOnMount(callback: Callback, deps: any[]) {
  const effRan = useRef(false);

  useEffect(() => {
    if (effRan.current === true) {
      callback();
    }
    return () => {
      effRan.current = true;
    };
  }, deps);
}

export default useOnMount;

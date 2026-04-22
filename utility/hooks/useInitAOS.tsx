import React from "react";

function useInitAOS() {
  React.useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    // eslint-disable-next-line global-require
    const AOS = isBrowser ? require("aos") : undefined;
    AOS.init();
  }, []);

  return null;
}

export default useInitAOS;

import React from "react";

function useInitAOS() {
  React.useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    const AOS = isBrowser ? require("aos") : undefined;
    AOS.init();
  }, []);

  return null;
}

export default useInitAOS;

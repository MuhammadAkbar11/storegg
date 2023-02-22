import { useEffect, useState } from "react";
import { BootstrapBreakpoints } from "@utility/types";
import { BOOTSTRAP_BREAKPOINTS } from "@utility/constant.utils";

function useMediaQuery(variant: BootstrapBreakpoints): boolean {
  const query = BOOTSTRAP_BREAKPOINTS[variant];
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addEventListener) {
      matchMedia.addEventListener("change", handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener("change", handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;

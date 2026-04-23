import { useEffect, useState } from "react";
import { BootstrapBreakpoints } from "@utility/types";
import { BOOTSTRAP_BREAKPOINTS } from "@utility/constant.utils";

function useMediaQuery(variant: BootstrapBreakpoints): boolean {
  const query = BOOTSTRAP_BREAKPOINTS[variant];
  // Keep initial render identical between SSR and first client render.
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const getMatches = () => window.matchMedia(query).matches;
    const handleChange = () => setMatches(getMatches());
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    setMatches(getMatches());

    // Listen matchMedia changes (support older browsers too).
    if (matchMedia.addEventListener) {
      matchMedia.addEventListener("change", handleChange);
    } else {
      matchMedia.addListener(handleChange);
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener("change", handleChange);
      } else {
        matchMedia.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;

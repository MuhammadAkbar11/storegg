import React from "react";
import NProgress from "nprogress";
import { useRouter } from "next/router";

const nprogress = NProgress.configure({
  showSpinner: false,
});

const PageProgress = () => {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChangeStart = () => nprogress.start();
    const handleRouteChangeComplete = () => nprogress.done(false);
    const handleRouteChangeError = () => nprogress.done();

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  return null;
};

export default PageProgress;

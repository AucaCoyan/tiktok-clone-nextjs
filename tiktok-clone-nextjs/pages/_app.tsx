import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <div>
      navbar
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden x1:hover:overflow-auto">
          sidebar
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />;
        </div>
      </div>
    </div>
  );
}

export default MyApp;

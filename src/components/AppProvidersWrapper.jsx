import { useEffect, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { LayoutProvider } from "@/context";

const AppProvidersWrapper = ({ children }) => {
  const handleChangeTitle = () => {
    if (document.visibilityState == "hidden")
      document.title = "Please come back :-(";
    else
      document.title = "Yum Reactjs - Multipurpose Food Tailwind CSS Template";
  };

  useEffect(() => {
    import("preline");

    document.addEventListener("visibilitychange", handleChangeTitle);
    return () => {
      document.removeEventListener("visibilitychange", handleChangeTitle);
    };
  }, []);

  return (
    <HelmetProvider>
      <LayoutProvider>
        {children}
      </LayoutProvider>
    </HelmetProvider>
  );
};
export default AppProvidersWrapper;

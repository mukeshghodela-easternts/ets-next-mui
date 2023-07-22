import { useMediaQuery } from "@mui/material";
import theme from "./theme";

const useScreenType = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile ? "mobile" : "desktop";
};

export default useScreenType;

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ToggleBanner from "../src/ToggleBanner";
import { diffBGBannerData } from "../src/data/banner-data";
import StyledFullBleed from "../src/data/StyledFullBleed.styled";
import theme from "../src/theme";

export default function BannerVariant3() {
  return (
    <StyledFullBleed theme={theme} className="full-bleed">
      <ToggleBanner data={diffBGBannerData}></ToggleBanner>;
    </StyledFullBleed>
  );
}

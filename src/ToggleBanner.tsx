// import {
//   ADVANTAGE_BANNER,
//   ADVANTAGE_BANNER_ACCESSIBILITY_TEXT,
//   HERO_BANNER,
//   IMAGE_SIZES_TOGGLE_BANNER
// } from '@/common/constants'
// import { GAEventContext } from '@/common/context/GAEventContext'
// import options from '@/common/utils/contentfulStrongTagReaderOptions'
// import imageSrcResolver from '@/common/utils/imageSrcResolver'
// import { ToggleBanner_homeBannerCollection_items as ToggleBannerCollection } from '@/pages/CustomTypes/BannerType'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import Button from '@kmartau/ko-ui-button'
// import Icon, { Icons } from '@kmartau/ko-ui-icon'
// import Text from '@kmartau/ko-ui-text'
// import { Link } from '@material-ui/core'
import Image from "next/image";
// import React, { useContext, useEffect } from 'react'
import {
  Box,
  Button,
  Icon,
  IconButton,
  Link,
  Typography,
  makeStyles,
} from "@mui/material";
import StyledToggleBanner from "./ToggleBanner.styled";

import { useEffect, useState } from "react";
import imageSrcResolver from "./imageSrcResolver";
import { AccessAlarm, ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  IBannerData,
  IContentBannerItem,
  IHomeBannerItem,
} from "./data/banner-data";
import theme from "./theme";
import useScreenType from "./use-screen-type";

type ToggleBannerProps = {
  data?: IBannerData;
  loopTime?: number;
};

const ToggleBanner: React.FC<ToggleBannerProps> = ({ data, loopTime }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bannerItem, setBannerItem] = useState<IContentBannerItem | null>();
  const [bannerType, setBannerType] = useState<string>("hero-banner");
  const [contentBannerData, setContentBannerData] = useState<
    IHomeBannerItem | null | undefined
  >(null);
  const screenType = useScreenType();

  const ADVANTAGE_BANNER = "advantage-banner";
  const HERO_BANNER = "hero-banner";
  const IMAGE_SIZES_TOGGLE_BANNER = "1080px";
  const ADVANTAGE_BANNER_ACCESSIBILITY_TEXT = "About OnePass";

  const goToNextSlide = () => {
    if (data) {
      setCurrentIndex((prevIndex: number) =>
        prevIndex === data?.homeBannerCollection.items.length - 1
          ? 0
          : prevIndex + 1
      );
    }
  };

  const goToPrevSlide = () => {
    if (data) {
      setCurrentIndex((prevIndex: number) =>
        prevIndex === 0
          ? data?.homeBannerCollection.items.length - 1
          : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    if (data?.homeBannerCollection) {
      setContentBannerData(data?.homeBannerCollection.items[currentIndex]);
      if (contentBannerData?.isAdvantage) {
        setBannerType(
          contentBannerData.isAdvantage ? ADVANTAGE_BANNER : HERO_BANNER
        );
      }
    }

    if (contentBannerData?.contentBannerCollection) {
      const bannerItemData =
        contentBannerData.contentBannerCollection?.items?.find(
          (contentBannerType: { slug: string }) =>
            contentBannerType?.slug === bannerType
        );

      setBannerItem(bannerItemData);
    }

    let interval: any;
    if (loopTime) {
      interval = setInterval(goToNextSlide, loopTime);
    }

    return () => clearInterval(interval);
  }, [currentIndex, contentBannerData, loopTime]);

  if (!data || !bannerItem) {
    return null;
  }

  const {
    image,
    title,
    description,
    cta,
    backgroundColor,
    textColor,
    buttonColor,
    iconCollection,
    buttonTextColor,
  } = bannerItem;

  return (
    <StyledToggleBanner
      theme={theme}
      className="full-bleed toggle-banner"
      backgroundColor={backgroundColor}
      textColor={textColor}
      buttonColor={buttonColor}
      buttonTxtColor={buttonTextColor}
    >
      <div
        className={`max-width77 banner-wrapper ${bannerType}`}
        data-testid="toggle-banner"
      >
        <div className="banner-image">
          {screenType == "mobile" && (
            <IconButton
              className="control-button prev-button"
              onClick={goToPrevSlide}
            >
              <ArrowBack fontSize="medium"></ArrowBack>
            </IconButton>
          )}
          <Link href={cta?.url}>
            <Image
              loader={imageSrcResolver}
              data-testid="banner-image"
              src={image?.url as string}
              alt={image?.title ?? ""}
              width={image?.width as number}
              height={image?.height as number}
              sizes={IMAGE_SIZES_TOGGLE_BANNER}
            />
          </Link>
          {screenType == "mobile" && (
            <IconButton
              className="control-button next-button"
              onClick={goToNextSlide}
            >
              <ArrowForward fontSize="medium"></ArrowForward>
            </IconButton>
          )}
        </div>

        <div className="banner-text-wrapper">
          <Typography
            variant="h2"
            className="banner-title"
            data-testid="banner-title"
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            className="banner-description"
            data-testid="banner-description"
          >
            This is testing description
          </Typography>
          {contentBannerData?.isAdvantage && (
            <div className="banner-icon" data-testid="banner-icon">
              {iconCollection?.items.map(
                (icon: { name: any; viewBox: any }) => (
                  <AccessAlarm fontSize="small" />
                )
              )}
            </div>
          )}
          <Link href={cta?.url} className="banner-cta" data-testid="banner-cta">
            <Button
              variant="contained"
              className="banner-button"
              data-testid="banner-button"
            >
              {contentBannerData?.isAdvantage ? (
                <>
                  {cta?.name}
                  <span className="hideA11yText">
                    {cta?.name + ADVANTAGE_BANNER_ACCESSIBILITY_TEXT}
                  </span>
                </>
              ) : (
                cta?.name
              )}
            </Button>
          </Link>
          {screenType == "desktop" && (
            <Box
              sx={{
                "& > :not(style)": {
                  m: 1,
                },
              }}
            >
              <IconButton onClick={goToPrevSlide}>
                <ArrowBack fontSize="medium"></ArrowBack>
              </IconButton>
              <IconButton onClick={goToNextSlide}>
                <ArrowForward fontSize="medium"></ArrowForward>
              </IconButton>
            </Box>
          )}
        </div>
      </div>
    </StyledToggleBanner>
  );
};
export default ToggleBanner;

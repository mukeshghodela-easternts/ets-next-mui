import styled from "styled-components";

export default styled.div<{
  backgroundColor: string | null;
  textColor: string | null;
  buttonColor: string | null;
  buttonTxtColor: string | null;
  theme: any;
}>`
  background: ${(props) =>
    `${props.backgroundColor}` || props.theme.palette.greyscale?.grey100};
  color: ${(props) => props.textColor || props.theme.palette.primary.dark};
  margin: 2rem 0;

  &&.full-bleed {
    padding: 0;
    width: 100%;
    grid-column: 1 / 4;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    padding-right: 0px;
    ${(props) => props.theme.breakpoints.up("lg")} {
      padding: 3rem 1rem;
    }
  }

  & .control-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    backgroundcolor: rgba(0, 0, 0, 0.5);
    fontsize: 1.5rem;
    padding: 8px;
    borderradius: 50%;
    cursor: pointer;
  }
  & .prev-button {
    left: 0;
  }
  & .next-button {
    right: 0;
  }

  & .banner-wrapper {
    display: flex;
    flex-wrap: wrap;
    ${(props) => props.theme.breakpoints.up("lg")} {
      flex-direction: row-reverse;
    }

    & .banner-image {
      flex: 1 0 auto;
      width: 100%;
      ${(props) => props.theme.breakpoints.up("lg")} {
        width: 60%;
      }
      span {
        transition: all 0.3s ease-in-out;

        &:hover {
          box-shadow: 0 0 9px
            ${({ theme }): string => theme.palette.primary.dark}33;
        }
      }
    }

    & .banner-text-wrapper {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      ${(props) => props.theme.breakpoints.down("md")} {
        width: 100%;
        align-items: center;
      }

      & .banner-title {
        width: 55%;
        line-height: 2.5rem;
        margin-bottom: 1rem;

        ${(props) => props.theme.breakpoints.down("md")} {
          width: 80%;
          line-height: 2rem;
          text-align: center;
          font-size: 1.5rem;
          margin-top: 2rem;
        }
      }

      & .banner-description {
        width: 75%;
        margin-bottom: 1.5rem;

        ${(props) => props.theme.breakpoints.down("md")} {
          width: 80%;
          margin-bottom: 1rem;
          text-align: center;
        }

        hr {
          border: 0;
        }
        p {
          margin: unset;
        }
      }

      & .banner-cta {
        color: ${(props) => props.theme.palette.common.white};
        width: fit-content;
        ${(props) => props.theme.breakpoints.down("md")} {
          margin-bottom: 2rem;
        }
      }

      & .banner-button {
        letter-spacing: 0.2px;
        font-size: 1rem;
        height: 3.5rem;
        padding: 0 1rem;
        width: 9rem;
        background: ${(props) =>
          props.buttonColor || props.theme.palette.primary.main};
        color: ${(props) =>
          props.buttonTxtColor || props.theme.palette.common.white};

        ${(props) => props.theme.breakpoints.down("md")} {
          padding: 0 0.75rem;
          height: 3rem;
          font-size: 0.875rem;
        }
      }
    }
  }

  & .advantage-banner.banner-wrapper {
    & .banner-text-wrapper {
      .banner-title {
        font-family: "Montserrat", Arial, sans-serif;
      }
      .banner-description {
        font-family: "Montserrat", Arial, sans-serif;
        ${(props) => props.theme.breakpoints.up("lg")} {
          margin-bottom: 1rem;
        }
        strong {
          font-family: "Montserrat", Arial, sans-serif;
        }
        p {
          margin: unset;
        }
      }
      .banner-icon {
        margin-bottom: 1.375rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: flex-start;

        ${(props) => props.theme.breakpoints.down("md")} {
          justify-content: center;
        }

        ${(props) => props.theme.breakpoints.down("sm")} {
          gap: 0.875rem;
        }
      }
      .MuiLink-underlineHover:hover {
        text-decoration: none;
      }

      & .banner-cta {
        color: ${(props) => props.theme.palette.common.white};
        ${(props) => props.theme.breakpoints.down("md")} {
          margin-bottom: 2.5rem;
        }
      }

      .banner-button {
        border-radius: 2.5rem;
        background: ${(props) =>
          props.buttonColor || props.theme.palette.primary.main};
        font-family: "Montserrat", Arial, sans-serif;
      }
    }
  }
`;

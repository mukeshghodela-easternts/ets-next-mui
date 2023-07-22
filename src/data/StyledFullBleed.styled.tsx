import styled from "styled-components";

export default styled.div`
  && .toggle-banner {
    margin: unset;
  }
  ${(props) => props.theme.breakpoints.down("md")} {
    && .toggle-banner {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  }
  .full-bleed {
    width: 100%;
    grid-column: 1 / 4;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

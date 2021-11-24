import React from "react";

import { FooterContainer, CopyRight, GitHubLink } from "./Footer.elements";
import spotifyIcon from "../../Components/SearchedItem/Spotify_Icon.png";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <CopyRight>
          © 2021 <strong>IIEUM</strong>, All Rights Reserved
        </CopyRight>
        {/* <GitHubLink href="https://github.com/2eum/musicdiary" target="_blank">
          Click and visit our Github!
        </GitHubLink> */}
        <p>
          {" "}
          Search & Data Powered by Spotify{" "}
          <span>
            <img width="16px" src={spotifyIcon} />
          </span>{" "}
        </p>
      </FooterContainer>
    </>
  );
};

export default Footer;

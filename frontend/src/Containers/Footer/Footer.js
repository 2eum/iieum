import React from "react";

import { FooterContainer, CopyRight, GitHubLink } from "./Footer.elements";

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
        Music Search & Data Powered by Spotify(Logo)
      </FooterContainer>
    </>
  );
};

export default Footer;

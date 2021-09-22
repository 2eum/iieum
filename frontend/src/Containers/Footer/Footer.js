import React from "react";

import { FooterContainer, CopyRight, GitHubLink } from "./Footer.elements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <CopyRight>
          © 2021 <strong>2EUM of SG-LIKELION</strong>, All Rights Reserved
        </CopyRight>
        <GitHubLink href="https://github.com/2eum/musicdiary" target="_blank">
          Click and visit our Github!
        </GitHubLink>
      </FooterContainer>
    </>
  );
};

export default Footer;

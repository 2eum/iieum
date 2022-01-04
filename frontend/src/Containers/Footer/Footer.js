import React from 'react';
import * as S from './Footer.elements';
import spotifyIcon from '../../Components/SearchedItem/Spotify_Icon.png';

const Footer = () => {
  return (
    <S.FooterContainer>
      <p>문의사항과 건의사항은 iieum.ms.official@gmail.com로 보내주세요.</p>
      <S.CopyRight>
        © 2021 <strong>IIEUM</strong>, All Rights Reserved
      </S.CopyRight>
      <p>
        {' '}
        Search & Data Powered by Spotify{' '}
        <span>
          <img width="16px" src={spotifyIcon} />
        </span>{' '}
      </p>
    </S.FooterContainer>
  );
};

export default Footer;

import React from 'react';
import * as S from './Footer.elements';
import spotifyIcon from '../../Components/SearchedItem/Spotify_Icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <S.FooterContainer>
      <Link to="/feedback">문의사항 및 건의사항 남기기</Link>
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

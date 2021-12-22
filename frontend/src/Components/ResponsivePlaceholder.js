import React from 'react';

const ResponsivePlaceholder = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>1280px 이상의 화면 크기로 접속해주세요!</p>
      <p>곧 모바일 버전으로도 만나요!</p>
    </div>
  );
};

export default ResponsivePlaceholder;

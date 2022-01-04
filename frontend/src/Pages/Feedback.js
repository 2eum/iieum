import React from 'react';

const Feedback = () => {
  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSf3XQnH3Okva_T0BmgVxHi41uL0zL0xv0wfMaeDoXJZ6gvDgA/viewform?embedded=true"
      width={window.innerWidth < 1280 ? '337.5px' : window.innerWidth * 0.9}
      height="1000"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      로드 중…
    </iframe>
  );
};

export default Feedback;

import React from "react";

const Feedback = () => {
  const width = window.innerWidth;
  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSf3XQnH3Okva_T0BmgVxHi41uL0zL0xv0wfMaeDoXJZ6gvDgA/viewform?embedded=true"
      width={
        width < 1280 ? "337.5px" : width >= 1920 ? width * 0.6 : width * 0.8
      }
      height="1000"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
    >
      로드 중…
    </iframe>
  );
};

export default Feedback;

import React, { memo } from "react";
import styleStrToObject from "./utils";

const IconClose = memo(() => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#fff" style={styleStrToObject(`height:40px;width:40px`)}>
      <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z" />
    </svg>
  );
});

export default IconClose;

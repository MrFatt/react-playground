// useEffect执行时机

//会先渲染 lower-case-first, 再变成 LOWER-CASE-FIRST

import React, { useState, useEffect } from "react";

export default () => {
  const [text, setText] = useState("lower-case-first");
  useEffect(() => {
    setText(text => text.toUpperCase());
  });
  return <div>{text}</div>;
};

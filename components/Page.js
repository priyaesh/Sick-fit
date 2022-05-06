import React, { Component, Children } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import Header from "./Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face{
  font-family:'radnika-next';
  src:url('/static/radnikanext-medium-webfont.woff2');
  format('woff2');
  font-weight:normal;
  font-style:normal;
}
html{
  --red:#ff000;
  --black:#393939;
  --gray:#3A3A3A;
  --gray:var(--grey);
  --lightGray:#e1e1e1;
  --lightGray:var(--lightGray);
  --offWhite:#ededed;
  --maxWidth: 1000px;
  --bs: 0 12px 24px rgba(0,0,0,0,09);
  box-sizing:border-box;
}
*,*:before,*:after{
  box-sizing:inherit;
}
body{
 font-family:'radnika-next',--apple-system, BlinkMacSystemFont,
 'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',snas-serif; 
 padding:0;
 margin:0;
 font-size:1.5rem;
 line-height:2;
}
a{
  text-decoration:none;
  color:var(---black);
}
a:hover{
  text-decoration:underline;
}
button {
  font-family:'radnika-next',--apple-system, BlinkMacSystemFont,
 'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',snas-serif; 
}
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page(props) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{props.children}</InnerStyles>
    </div>
  );
}

Page.prototype = {
  //cool: PropTypes.string,
  children: PropTypes.any,
};

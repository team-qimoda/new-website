import React from "react";
import Link from "next/link";

import imgL1Logo from "../../assets/image/png/l1-logo.png";
import imgL1LogoWhite from "../../assets/image/png/logo-white.png";
import QimodaLogo from "./QimodaLogo";

const Logo = ({
  white,
  height,
  className = "",
  isSmall = false,
  isDark = false,
  ...props
}) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...props}>
        {/* {white ? (
          <img src={imgL1LogoWhite} alt="" />
        ) : (
          <img src={imgL1Logo} alt="" />
        )} */}
        <QimodaLogo isSmall={isSmall} isDark={isDark} />
      </a>
    </Link>
  );
};

export default Logo;

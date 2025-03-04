import { styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image
        src="/images/logos/ncb-logo-with-text.svg"
        alt="logo"
        height={70}
        width={174}
        priority
      />
    </LinkStyled>
  );
};

export default Logo;

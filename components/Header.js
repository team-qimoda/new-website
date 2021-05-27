import {
  Header as GrommetHeader,
  Anchor,
  Box,
  ResponsiveContext,
  Menu,
} from "grommet";
import { GrMenu } from "react-icons/gr";
import Logo from "components/Logo";
import styled from "styled-components";
import useScrollPosition from "@react-hook/window-scroll";

const LogoAnchor = styled(Anchor)`
  padding: 0;
`;

const StyledHeader = styled(GrommetHeader)`
  position: sticky;
  top: 0;
  transition: 0.3s;
  padding: ${({ isSmall }) => (isSmall ? "12px" : "24px")};
  height: ${({ isSmall }) => (isSmall ? "70px" : "96px")};
`;

const Header = () => {
  const scrollY = useScrollPosition(60);

  return (
    <StyledHeader isSmall={scrollY > 0} background="brand">
      <LogoAnchor
        href="https://tools.grommet.io/"
        icon={<Logo isSmall={scrollY > 0} />}
        label=""
      />
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: "bottom", right: "right" } }}
                icon={<GrMenu />}
                items={[
                  {
                    label: <Box pad="small">Link 1</Box>,
                    href: "https://v2.grommet.io/",
                  },
                  {
                    label: <Box pad="small">Link 2</Box>,
                    href: "https://github.com/grommet/grommet/issues",
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Anchor href="https://v2.grommet.io/" label="Link 1" />
              <Anchor
                href="https://github.com/grommet/grommet/issues"
                label="Link 2"
              />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </StyledHeader>
  );
};

export default Header;

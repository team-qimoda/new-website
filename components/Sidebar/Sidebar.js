import React from "react";
import Link from "next/link";

import { Title, Text, Box, Span } from "../Core";

export const CardSidebar = ({ children, ...props }) => (
  <Box bg="ash" borderRadius="10px" mb="30px" p="25px" {...props}>
    {children}
  </Box>
);

export const Block = ({ children, ...props }) => (
  <Box borderBottom="1px solid #524f73" pt="20px" pb="13px" {...props}>
    {children}
  </Box>
);

export const TitleSidebar = ({ children, ...props }) => (
  <Title variant="card" fontSize="24px" color="light" {...props}>
    {children}
  </Title>
);

export const TitlePost = ({ link = "/", children, ...props }) => (
  <Title variant="card" fontSize="16px" mb={0} {...props}>
    <Link href={link}>
      <a>
        <Span color="light">{children}</Span>
      </a>
    </Link>
  </Title>
);

export const Date = ({ link = "/", children, ...props }) => (
  <Text color="lightShade" fontSize="14px" {...props}>
    {children}
  </Text>
);

export const CatList = ({ children, ...props }) => (
  <ul
    css={`
      list-style: none;
      margin: 0;
      padding: 0;
    `}
    {...props}
  >
    {children}
  </ul>
);

export const CatListItem = ({
  link = "/",
  numPosts = 20,
  children,
  ...props
}) => (
  <li
    {...props}
    css={`
      margin-bottom: 13px;
    `}
  >
    <Link href={link}>
      <a>
        <Span color="light">{children}</Span>{" "}
        <Span color="lightShade">- {numPosts} Posts</Span>
      </a>
    </Link>
  </li>
);

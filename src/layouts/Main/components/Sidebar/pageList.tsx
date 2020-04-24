import React from 'react';
import TocIcon from "@material-ui/icons/Toc";

interface IPages {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const pages: IPages[] = [
  {
    title: "Crawlback Pannel",
    href: "/crawlback",
    icon: <TocIcon />
  }
];

export default pages;

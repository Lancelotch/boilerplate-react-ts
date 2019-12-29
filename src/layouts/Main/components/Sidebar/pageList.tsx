import React from 'react';
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";

interface IPages {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const pages: IPages[] = [
  {
    title: "Overview",
    href: "/overview",
    icon: <DashboardIcon />
  },
  {
    title: "Content",
    href: "/content",
    icon: <DashboardIcon />
  },
  {
    title: "Community",
    href: "/community",
    icon: <DashboardIcon />
  },
  {
    title: "Campaign",
    href: "/campaign",
    icon: <DashboardIcon />
  },
  {
    title: "Conversation",
    href: "/conversation",
    icon: <DashboardIcon />
  },
  {
    title: "Comparison",
    href: "/comparison",
    icon: <DashboardIcon />
  },
  {
    title: "Stream",
    href: "/stream",
    icon: <DashboardIcon />
  },
  {
    title: "Setting",
    href: "/setting",
    icon: <SettingsIcon />
  }
];

export default pages;

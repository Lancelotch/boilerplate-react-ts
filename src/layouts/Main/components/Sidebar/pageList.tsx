import React from 'react';
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import TocIcon from "@material-ui/icons/Toc";
import ForumIcon from "@material-ui/icons/Forum";
import CompareIcon from "@material-ui/icons/Compare";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

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
    icon: <TocIcon />
  },
  {
    title: "Community",
    href: "/community",
    icon: <ForumIcon />
  },
  {
    title: "Campaign",
    href: "/campaign",
    icon: <RecordVoiceOverIcon />
  },
  {
    title: "Conversation",
    href: "/conversation",
    icon: <ForumIcon />
  },
  {
    title: "CompareIcon",
    href: "/comparison",
    icon: <CompareIcon />
  },
  {
    title: "Stream",
    href: "/stream",
    icon: <ViewStreamIcon />
  },
  {
    title: "Setting",
    href: "/setting",
    icon: <SettingsIcon />
  }
];

export default pages;

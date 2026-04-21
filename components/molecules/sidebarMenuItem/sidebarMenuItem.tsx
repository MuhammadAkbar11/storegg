import React from "react";
import CardIcon from "@atoms/icons/cardIcon";
import LogOutIcon from "@atoms/icons/logOutIcon";
import MessagesIcon from "@atoms/icons/messagesIcon";
import OverviewIcon from "@atoms/icons/overviewIcon";
import RewardsIcon from "@atoms/icons/rewardsIcon";
import SetttingsIcon from "@atoms/icons/setttingsIcon";
import TransactionsIcon from "@atoms/icons/transactionsIcon";

type IconOptions = {
  overview: JSX.Element;
  transaction: JSX.Element;
  messages: JSX.Element;
  card: JSX.Element;
  rewards: JSX.Element;
  settings: JSX.Element;
  logout: JSX.Element;
};

type Props = {
  iconName: string;
};

function SidebarMenuItemIcon({ iconName = "overview" }: Props) {
  const iconOptions: IconOptions = {
    overview: <OverviewIcon />,
    transaction: <TransactionsIcon />,
    messages: <MessagesIcon />,
    card: <CardIcon />,
    rewards: <RewardsIcon />,
    settings: <SetttingsIcon />,
    logout: <LogOutIcon />,
  };

  const Content = iconOptions[iconName as keyof IconOptions];
  return Content;
}

export default SidebarMenuItemIcon;

import React from "react";
import SidebarMenuItem from "../../molecules/sidebarMenuItem/sidebarMenuItemIcon";
import SidebarFooter from "./sidebarFooter";
import SidebarAvatar from "./sidebarAvatar";

type Props = {
  activePath: string;
};

function Sidebar({ activePath }: Props) {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <SidebarAvatar name="Lee Jieun" email="leejieun@gmai.com" />
        <div className="menus ">
          <SidebarMenuItem
            title="Overview"
            icon="overview"
            href="/member"
            activePath={activePath}
          />
          <SidebarMenuItem
            title="Transactions"
            icon="transaction"
            href="/member/transactions"
            activePath={activePath}
          />
          <SidebarMenuItem
            title="Rewards"
            icon="rewards"
            href="/member/rewards"
            activePath={activePath}
          />
          <SidebarMenuItem
            title="Card"
            icon="card"
            href="/member/card"
            activePath={activePath}
          />
          <SidebarMenuItem
            title="Settings"
            icon="settings"
            href="/member/settings"
            activePath={activePath}
          />
          <SidebarMenuItem
            title="Messages"
            icon="messages"
            href="/member/rewards"
            activePath={activePath}
          />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}

Sidebar.defaultProps = {
  activePath: "",
};

export default Sidebar;

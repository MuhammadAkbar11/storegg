/* eslint-disable react/default-props-match-prop-types */
import React from "react";
import Skeleton from "@components/atoms/skeleton";
import { usePrivateAuthContext } from "@utility/context/PrivateAuthContext";
import Cookies from "js-cookie";
import { useQueryClient } from "react-query";
import SidebarAvatar from "./sidebarAvatar";
import SidebarFooter from "./sidebarFooter";
import SidebarMenuItem from "../../molecules/sidebarMenuItem/sidebarMenuItemIcon";

type Props = {
  // eslint-disable-next-line react/require-default-props
  activePath: string;
};

function SidebarContent({ activePath }: Props) {
  const privateAuthCtx = usePrivateAuthContext();
  const authState = privateAuthCtx.user;
  const queryClient = useQueryClient();

  const onLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    Cookies.remove("userToken");
    queryClient.removeQueries("userAuth", { exact: true });
    window.location.href = "/";
  };

  // console.log("==========START==========");
  // console.log(authState, "Auth State Sidebar");
  // console.log("==========END==========");
  return (
    <section className="sidebar">
      <div className="content pt-md-50 pb-30 ps-30">
        {privateAuthCtx.isLoading ? (
          <div className=" d-flex-center flex-column pb-50 pe-30 ">
            <Skeleton
              width={90}
              height={90}
              className=" rounded-circle mb-2 "
            />
            <Skeleton width="60%" height={20} className="mb-2 rounded" />
            <Skeleton width="90%" height={18} className="rounded" />
          </div>
        ) : (
          <SidebarAvatar
            name={authState?.name || "..."}
            email={authState?.email || "..."}
            image={authState?.avatar}
          />
        )}

        <div className="menus">
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
          {/* <SidebarMenuItem
            title="Rewards"
            icon="rewards"
            href="/member/rewards"
            activePath={activePath}
          /> */}
          {/* <SidebarMenuItem
            title="Card"
            icon="card"
            href="/member/card"
            activePath={activePath}
          /> */}
          <SidebarMenuItem
            title="Settings"
            icon="settings"
            href="/member/settings"
            activePath={activePath}
          />
          <SidebarMenuItem
            title="Logout"
            icon="logout"
            href="/member/logout"
            onClick={onLogout}
            activePath={activePath}
          />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}

SidebarContent.defaultProps = {
  activePath: "",
};

export default SidebarContent;

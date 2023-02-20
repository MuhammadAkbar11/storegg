import Head from "next/head";
import React from "react";
import OverviewContent from "@organisms/overview";
import Sidebar from "@organisms/sidebar";
import { GetServerSidePropsContext } from "next";
import { notAuthRedirect } from "@utility/index.utils";
import { getAuthService } from "@services/auth.service";
import { IUserAuth } from "@utility/types";
import {
  PrivateAuthProvider,
  usePrivateAuthContext,
} from "@utility/context/PrivateAuthContext";

type Props = {
  userAuth: IUserAuth;
};

function Member({ userAuth }: Props) {
  const privateAuthCtx = usePrivateAuthContext();
  React.useEffect(() => {
    privateAuthCtx.onSetUser(userAuth);
  }, [userAuth]);

  return (
    <>
      {/* Overview */}
      <Head>
        <title>Member Dashboard | StoreGG</title>;
      </Head>
      <section className="overview overflow-auto">
        <Sidebar activePath="/member" />
        <OverviewContent />
      </section>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies?.userToken;
  if (!token) {
    return notAuthRedirect(`/auth/sign-in?redirect=${ctx.req.url}`);
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  try {
    const userAuth = await getAuthService(jwtToken);
    if (!userAuth)
      return notAuthRedirect(`/auth/sign-in?redirect=${ctx.req.url}`);
    return {
      props: {
        userAuth,
      },
    };
  } catch (error) {
    return notAuthRedirect(`/auth/sign-in?redirect=${ctx.req.url}`);
  }
}

Member.providers = [PrivateAuthProvider];

export default Member;

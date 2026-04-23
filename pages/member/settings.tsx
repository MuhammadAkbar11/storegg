import Head from "next/head";
import React from "react";
import Sidebar from "@organisms/sidebar";
import {
  PrivateAuthProvider,
  usePrivateAuthContext,
} from "@utility/context/PrivateAuthContext";
import { IUserAuth } from "@utility/types";
import { GetServerSidePropsContext } from "next";
import { uNotAuthRedirect } from "@utility/index.utils";
import { getAuthService } from "@services/auth.service";
import MemberPageTitle from "@components/molecules/memberPageTitle";
import useOnMount from "@hooks/useOnMount";
import MemberSettingsPasswordCard from "@organisms/memberSettingsPasswordCard";
import MemberSettingsProfileCard from "@organisms/memberSettingsProfileCard";

type Props = {
  userAuth: IUserAuth;
};

function Profile({ userAuth }: Props) {
  const privateAuthCtx = usePrivateAuthContext();

  useOnMount(() => {
    if (userAuth) {
      privateAuthCtx.onSetUser(userAuth);
    }
  }, [userAuth]);

  return (
    <>
      <Head>
        <title>Settings | StoreGG</title>;
      </Head>
      <section className="edit-profile overflow-auto">
        <Sidebar activePath="/member/settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <MemberPageTitle title="Settings" />
            <MemberSettingsProfileCard
              userAuth={userAuth}
              userData={privateAuthCtx.user}
              onProfileUpdated={privateAuthCtx.onUpdateUser}
            />
            <MemberSettingsPasswordCard />
          </div>
        </main>
      </section>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.req.cookies?.userToken;
  if (!token) {
    return uNotAuthRedirect(`/auth/sign-in?redirect=${ctx.req.url}`);
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  try {
    const userAuth = await getAuthService(jwtToken);
    if (!userAuth)
      return uNotAuthRedirect(`/auth/sign-in?redirect=${ctx.req.url}`);
    return {
      props: {
        userAuth,
      },
    };
  } catch (error) {
    return uNotAuthRedirect(`/auth/sign-in?redirect=${ctx.req.url}`);
  }
}

Profile.providers = [PrivateAuthProvider];

export default Profile;

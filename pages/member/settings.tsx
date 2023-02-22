import Head from "next/head";
import React from "react";
import { Button, Form } from "react-bootstrap";
import TrashIcon from "@atoms/icons/trashIcon";
import UploadIcon from "@atoms/icons/uploadIcon";
import Sidebar from "@organisms/sidebar";
import {
  PrivateAuthProvider,
  usePrivateAuthContext,
} from "@utility/context/PrivateAuthContext";
import { IUserAuth } from "@utility/types";
import { GetServerSidePropsContext } from "next";
import { notAuthRedirect } from "@utility/index.utils";
import { getAuthService } from "@services/auth.service";
import MemberPageTitle from "@components/molecules/memberPageTitle";

type Props = {
  userAuth: IUserAuth;
};

function Profile({ userAuth }: Props) {
  const privateAuthCtx = usePrivateAuthContext();

  React.useEffect(() => {
    privateAuthCtx.onSetUser(userAuth);
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

            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <Form action="#/">
                <div className="photo d-flex">
                  <div className="position-relative me-20">
                    <img
                      src="/img/avatar-1.png"
                      width={90}
                      height={90}
                      className="avatar img-fluid rounded-circle"
                    />
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <TrashIcon />
                    </div>
                  </div>
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      <div
                        style={{
                          height: 90,
                          width: 90,
                        }}
                      >
                        <UploadIcon />
                      </div>
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
                <Form.Group className="pt-30">
                  <Form.Label
                    htmlFor="name"
                    className="text-lg fw-medium color-palette-1 mb-10"
                  >
                    Full Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="rounded-pill text-lg"
                    id="name"
                    name="name"
                    aria-describedby="name"
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group className="pt-30">
                  <Form.Label
                    htmlFor="email"
                    className=" text-lg fw-medium color-palette-1 mb-10"
                  >
                    Email Address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="rounded-pill text-lg"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    placeholder="Enter your email address"
                  />
                </Form.Group>
                <Form.Group className="pt-30">
                  <Form.Label
                    htmlFor="phone"
                    className=" text-lg fw-medium color-palette-1 mb-10"
                  >
                    Phone
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    className="rounded-pill text-lg"
                    id="phone"
                    name="phone"
                    aria-describedby="phone"
                    placeholder="Enter your phone number"
                  />
                </Form.Group>
                <div className=" button-group d-flex flex-column pt-50">
                  <Button
                    type="submit"
                    className="btn-save fw-medium text-lg text-white rounded-pill"
                    role="button"
                  >
                    Save My Profile
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </main>
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

Profile.providers = [PrivateAuthProvider];

export default Profile;

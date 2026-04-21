import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigninInputTypes, signinSchema } from "@utility/schema/auth.schema";
import { Form, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import {
  postSigninService,
  saveUserTokenService,
} from "@services/auth.service";
import { useToastContext } from "@utility/context/ToastContext";
import useAuth from "@hooks/useAuth";

type Props = {};

function SignInForm({}: Props) {
  const router = useRouter();
  const toastCtx = useToastContext();
  const { refetchAuth } = useAuth();
  const methods = useForm<SigninInputTypes>({
    resolver: zodResolver(signinSchema),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;

  const mutation = useMutation(postSigninService);
  React.useEffect(() => {
    const redirect = router.query?.redirect?.toString() || "/";
    if (mutation.isSuccess) {
      router.push(redirect);
      refetchAuth();
    }
  }, [mutation.isSuccess, router.query]);

  const onSubmitHandler = (values: SigninInputTypes) => {
    mutation.mutate(values, {
      onSuccess(data) {
        if (data.token) {
          saveUserTokenService(data.token);
          toastCtx.onAddToast({
            variant: "success",
            message: `Sign in berhasil, selamat datang kembali <strong>${data.name}</strong>!`,
          });
        }
      },
      onError(error: any) {
        if (error && error?.validation) {
          if (error?.validation?.email)
            setError("email", {
              message: error?.validation?.email?.message[0],
            });
          if (error?.validation?.password)
            setError("password", {
              message: error?.validation?.password?.message[0],
            });
        } else {
          toastCtx.onAddToast({
            variant: "error",
            message: error.message || "Sign-in Failed! Please try again",
          });
        }
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <Form.Group className="pt-50" controlId="email">
        <Form.Label className="text-lg fw-medium color-palette-1 mb-10">
          Email Address
        </Form.Label>
        <Form.Control
          type="email"
          className=" rounded-pill text-lg"
          aria-describedby="email"
          placeholder="Enter your email address"
          isInvalid={errors?.email ? true : false}
          {...register("email")}
        />
        {errors?.email?.message ? (
          <Form.Control.Feedback type="invalid" className="ms-3 pt-1">
            {errors?.email?.message}
          </Form.Control.Feedback>
        ) : null}
      </Form.Group>
      <Form.Group className="pt-30" controlId="password">
        <Form.Label className=" text-lg fw-medium color-palette-1 mb-10">
          Password
        </Form.Label>
        <Form.Control
          type="password"
          className=" rounded-pill text-lg"
          aria-describedby="password"
          placeholder="Your password"
          isInvalid={errors?.password ? true : false}
          {...register("password")}
        />
        {errors?.password?.message ? (
          <Form.Control.Feedback type="invalid" className="ms-3 pt-1">
            {errors?.password?.message}
          </Form.Control.Feedback>
        ) : null}
      </Form.Group>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="submit"
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          role="button"
          disabled={mutation.isLoading || mutation.isSuccess}
        >
          {mutation.isLoading ? (
            <Spinner
              as="span"
              animation="border"
              className="me-2"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : null}
          Continue to Sign In
        </button>

        <Link href="/auth/sign-up">
          <a
            className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
            href="/auth/sign-up"
            role="button"
          >
            Sign Up
          </a>
        </Link>
      </div>
    </Form>
  );
}

export default SignInForm;

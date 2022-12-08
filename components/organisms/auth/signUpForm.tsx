import Link from "next/link";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupInputTypes, signupSchema } from "@utility/schema/auth.schema";
import { useForm } from "react-hook-form";
import { Form, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import { useSignupContext } from "@utility/context/SignupContext";

type Props = {};

function SignUpForm({}: Props) {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const {
    signupFormData,
    onSetFormData,
    error: errorSignup,
    onSetError: onSetErrorSignup,
  } = useSignupContext();

  const methods = useForm<SignupInputTypes>({
    resolver: zodResolver(signupSchema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = methods;

  React.useEffect(() => {
    if (signupFormData) {
      setValue("email", signupFormData?.email || "");
      setValue("name", signupFormData?.name || "");
      setValue("password", signupFormData?.password || "");
      setValue(
        "passwordConfirmation",
        signupFormData?.passwordConfirmation || ""
      );
    }
  }, [signupFormData]);

  React.useEffect(() => {
    if (
      errorSignup &&
      errorSignup?.validation &&
      errorSignup?.validation?.email
    ) {
      setError("email", {
        message: errorSignup?.validation?.email?.message[0],
      });
    }
  }, [errorSignup]);

  const onSubmitHandler = (values: SignupInputTypes) => {
    setLoading(true);
    onSetFormData(values);
    onSetErrorSignup(null);
    setTimeout(() => {
      setLoading(false);
      router.push("/auth/sign-up-photo");
    }, 300);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Form.Group className="pt-50" controlId="name">
        <Form.Label className="text-lg fw-medium color-palette-1 mb-10">
          Full Name
        </Form.Label>
        <Form.Control
          type="text"
          className="rounded-pill text-lg "
          aria-describedby="name"
          placeholder="Enter your name"
          isInvalid={errors?.name ? true : false}
          {...register("name")}
        />
        {errors?.name?.message ? (
          <Form.Control.Feedback type="invalid" className="ms-3 pt-1">
            {errors?.name?.message}
          </Form.Control.Feedback>
        ) : null}
      </Form.Group>
      <Form.Group controlId="email" className="pt-30">
        <Form.Label className="text-lg fw-medium color-palette-1 mb-10">
          Email Address
        </Form.Label>
        <Form.Control
          type="email"
          className="rounded-pill text-lg"
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
      <Form.Group className="pt-30" controlId="passwordConfirmation">
        <Form.Label className=" text-lg fw-medium color-palette-1 mb-10">
          Confirm Password
        </Form.Label>
        <Form.Control
          type="password"
          className=" rounded-pill text-lg"
          aria-describedby="passwordConfirmation"
          placeholder="Confirmation your password"
          isInvalid={errors?.passwordConfirmation ? true : false}
          {...register("passwordConfirmation")}
        />
        {errors?.passwordConfirmation?.message ? (
          <Form.Control.Feedback type="invalid" className="ms-3 pt-1">
            {errors?.passwordConfirmation?.message}
          </Form.Control.Feedback>
        ) : null}
      </Form.Group>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          disabled={loading}
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          type="submit"
        >
          {loading ? (
            <Spinner
              as="span"
              animation="border"
              className="me-2"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : null}
          Continue
        </button>
        <Link href={"/auth/sign-in"} passHref>
          <a
            className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </div>
    </Form>
  );
}

export default SignUpForm;

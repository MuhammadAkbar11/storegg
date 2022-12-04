import Link from "next/link";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupInputTypes, signupSchema } from "@utility/schema/auth.schema";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";

type Props = {};

function SignUpForm({}: Props) {
  const router = useRouter();

  const methods = useForm<SignupInputTypes>({
    resolver: zodResolver(signupSchema),
  });

  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isValid, touchedFields },
  } = methods;

  const onSubmitHandler = (values: SignupInputTypes) => {
    sessionStorage.setItem("signup-form", JSON.stringify(values));
    router.push("/auth/sign-up-photo");
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
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          type="submit"
        >
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

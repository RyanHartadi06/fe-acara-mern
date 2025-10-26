import useRegister from "@/pages/auth/register/useRegister";
import { Button, Card, CardBody, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { visiblePassword, handleVisiblePassword } = useRegister();
  return (
    <div className="flex w-full flex-col lg:flex-row items-center justify-center lg:gap-20 gap-10">
      <div className="flex w-full lg:w-1/3 flex-col items-center justify-center gap-10">
        <Image
          src="/images/general/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustration/login.svg"
          alt="logo"
          className="lg:w-full w-2/3"
          width={1024}
          height={1024}
        />
      </div>
      <div>
        <Card className="p-8">
          <CardBody>
            <h2 className="text-xl font-bold text-danger">Create Account</h2>
            <p className="mb-4 text-small">
              Have an account?&nbsp;
              <Link href="/auth/login" className="font-semibold text-danger-500">
                Login here
              </Link>
            </p>
          </CardBody>
          <form className="flex w-80 flex-col gap-4">
            <Input
              label="Fullname"
              type="text"
              variant="bordered"
              autoComplete="off"
            />
            <Input
              label="Username"
              type="text"
              variant="bordered"
              autoComplete="off"
            />
            <Input
              label="Email"
              type="email"
              variant="bordered"
              autoComplete="off"
            />
            <Input
              label="Password"
              type={visiblePassword.password ? "text" : "password"}
              variant="bordered"
              autoComplete="off"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("password")}
                >
                  {visiblePassword.password ? (
                    <FaEye className="pointer-events-none text-xl text-default-400" />
                  ) : (
                    <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                  )}
                </button>
              }
            />

            <Input
              label="Password Confirmation"
              type={visiblePassword.passwordConfirmation ? "text" : "password"}
              variant="bordered"
              autoComplete="off"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("passwordConfirmation")}
                >
                  {visiblePassword.passwordConfirmation ? (
                    <FaEye className="pointer-events-none text-xl text-default-400" />
                  ) : (
                    <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                  )}
                </button>
              }
            />
            <Button color="danger" size="lg" type="submit">Register</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;

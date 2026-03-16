import Link from "next/link";
import LoginForm from "./_components/login-from";
import AuthLogo from "./_components/auth-logo";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const LoginPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-4 ">
<Card className=" w-md">
  <CardHeader>
      <AuthLogo />
      <div className=" text-center gap-4 flex flex-col">
        <p className=" text-neutral text-sm">
          Login to Rwanda Pharmaceutical <br /> Pricing Database
        </p>
      </div>

  </CardHeader>
  <CardContent>
      <LoginForm />
  </CardContent>
</Card>
    </div>
  );
};

export default LoginPage;

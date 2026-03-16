
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AuthLogo from "../../_components/auth-logo";
import ForgotPasswordForm from "../../_components/forgot-password-form";

const ForgetPasswordPage = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">
      <Card className="w-md">
        <CardHeader>
          <AuthLogo />
          <div className="text-center gap-4 flex flex-col">
            <p className="text-neutral text-sm">
              Enter your email below and we’ll send you a link to reset your password.
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgetPasswordPage
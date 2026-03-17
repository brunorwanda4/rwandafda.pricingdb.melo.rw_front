import Image from "next/image";
import { cn } from "@/lib/utils";

interface AuthLogoProps {
  className?: string;
}

const AuthLogo = ({ className }: AuthLogoProps) => {
  return (
    <div className={cn("flex items-center flex-col", className)}>
      <Image
        priority
        src="/logo.svg"
        alt="Tega Logo"
        width={100}
        height={100}
      />
      <h1 className=" text-3xl font-semibold text-primary">Rwanda FDA</h1>
    </div>
  );
};

export default AuthLogo;

export const MobileLogo = () => {
  return (
    <div className="flex items-center flex-col ">
      <Image
        priority
        src="/logo.svg"
        alt="Tega Logo"
        width={70}
        height={70}
        className=" min-h-12 min-w-12"
      />
      <h1 className=" sr-only font-semibold text-primary ">Rwanda FDA</h1>
    </div>
  );
};

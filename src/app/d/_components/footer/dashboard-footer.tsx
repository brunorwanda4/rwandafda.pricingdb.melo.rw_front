"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface props {
  className?: string;
}

const DashboardFooter = ({ className }: props) => {
  return (
    <footer
      className={cn(
        "footer mt-4 footer-center text-base-content p-4 border-t border-t-base-200 bg-base-200 bottom-0",
        className,
      )}
    >
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <Link
            href={`https://melo.rw/`}
            target="_blank"
            className=" font-medium link-hover"
          >
            Melo.rw
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default DashboardFooter;

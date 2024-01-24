"use client";
import { FC } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface PaginationProps {
  totalPages: number;
}

interface PaginationArrowProps {
  direction: "left" | "right";
  href: string;
  isDisabled: boolean;
}

const PaginationArrow: FC<PaginationArrowProps> = ({
  direction,
  href,
  isDisabled,
}) => {
  const router = useRouter();
  const isLeft = direction === "left";
  const disabledClassName = isDisabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      onClick={() => router.push(href)}
      className={`join-item btn ${disabledClassName}`}
      aria-disabled={isDisabled}
      disabled={isDisabled}
    >
      {isLeft ? "«" : "»"}
    </button>
  );
};

export default function Pagination({
  totalPages = 5,
}: Readonly<PaginationProps>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="w-64 mx-auto my-6">
      <div className="join">
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
        <div className="join-item flex items-center px-4 bg-base-200">
          <span>Page {currentPage}</span>
        </div>
        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </div>
  );
}

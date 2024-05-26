"use client";

import { Button } from "@nextui-org/button";
import { useRef } from "react";
import { FaChevronLeft as BackIcon, FaChevronRight as ForwardIcon } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
  scrollWidth?: number;
};

export const ScrollableList = ({ children, scrollWidth = 300 }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleScroll(direction: "left" | "right") {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -scrollWidth : scrollWidth,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative w-full shadow-none">
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4">{children}</div>
      </div>
      <Button
        disableRipple
        className="hidden lg:flex absolute top-0 -left-20 w-12 h-full items-center justify-center bg-gray-50 bg-opacity-50"
        onClick={() => handleScroll("left")}
      >
        <BackIcon className="h-8 w-8 text-gray-900" />
      </Button>
      <Button
        disableRipple
        className="hidden lg:flex absolute top-0 -right-20 w-12 h-full items-center justify-center bg-gray-50 bg-opacity-50"
        onClick={() => handleScroll("right")}
      >
        <ForwardIcon className="h-8 w-8 text-gray-900" />
      </Button>
    </div>
  );
};

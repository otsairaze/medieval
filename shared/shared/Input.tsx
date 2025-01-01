import clsx from "clsx";
import React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ type, className, ...props }, ref) => {
    return (
      <input
        className={clsx(
          "p-2 text-white bg-transparent border-2 border-gray-500 rounded-md shadow-inner focus:outline-none focus:border-yellow-100 hover:bg-black transition duration-200",
          className
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

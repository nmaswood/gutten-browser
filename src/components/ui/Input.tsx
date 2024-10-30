import classNames from "classnames";
import { forwardRef } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={classNames(
          "flex h-10 w-full rounded-md border border-guttenBlue bg-guttenCream px-3 py-2 text-sm text-guttenText ring-offset-guttenCream file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-guttenText placeholder:text-guttenMutedText focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-guttenRing focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-serif [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

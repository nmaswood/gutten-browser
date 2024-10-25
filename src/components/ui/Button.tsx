import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-guttenCream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-guttenRing focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-guttenDarkBlue text-white hover:bg-[#506e8a]", // Dark blue with a subtle hover effect
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border border-guttenBlue bg-guttenCream text-guttenText hover:bg-guttenBlue/10 hover:text-guttenText",
        secondary:
          "bg-guttenBlue text-guttenText hover:bg-guttenBlue/80 hover:text-white",
        ghost: "hover:bg-guttenBlue/10 hover:text-guttenText",
        link: "text-guttenGreen underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={classNames(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

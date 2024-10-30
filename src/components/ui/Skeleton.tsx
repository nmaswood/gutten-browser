import classNames from "classnames";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classNames(
        "animate-pulse rounded-md bg-guttenMuted",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };

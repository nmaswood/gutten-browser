import Link from "next/link";
import classNames from "classnames";

interface LinkItem {
  id: string;
  href: string;
  title: string;
}

interface LinkListProps {
  items: LinkItem[];
  className?: string;
  maxHeight?: string;
}

export function LinkList({ items }: LinkListProps) {
  return (
    <ul className="p-3 space-y-2">
      {items.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={classNames(
              "flex items-center justify-between rounded-md p-4",
              "hover:bg-guttenBlue active:bg-guttenMuted",
              "border border-guttenMuted hover:border-guttenDarkBlue"
            )}
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-800 group-hover:text-gray-900">
                {item.title}
              </h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

import { SearchSection } from "@/components/SearchSection";
import { SeeHistory } from "@/components/SeeHistory";

export function Header() {
  return (
    <header className="w-full border-b border-guttenBlue bg-guttenBlue gap-4 flex items-center h-16 px-4 relative">
      <h1 className="hidden sm:block text-xl font-bold text-guttenText">
        Project Gutenberg Explorer
      </h1>

      <div className="flex-1 lg:absolute lg:inset-0 flex lg:justify-center justify-center md:justify-end items-center">
        <SearchSection />
        <SeeHistory />
      </div>
    </header>
  );
}

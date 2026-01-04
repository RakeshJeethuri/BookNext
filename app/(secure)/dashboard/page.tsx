import { BookFeed } from "@/components/secure-components/dashboard/book-feed";
import { RightSidebar } from "@/components/secure-components/dashboard/right-sidebar";


export default function Page() {
  return (
// In app/(secure)/dashboard/page.tsx
<div className="min-h-screen bg-background">
  <div className="container mx-auto px-4 sm:px-6 py-6 max-w-[1600px]">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
      <BookFeed />
      
      <div className="hidden lg:block sticky top-6 h-[calc(100vh-3rem)] overflow-y-auto">
        <RightSidebar />
      </div>
    </div>
  </div>
</div>
  );
}

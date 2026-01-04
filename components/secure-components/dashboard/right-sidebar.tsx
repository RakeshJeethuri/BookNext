import { AIAssistant } from './ai-assistence';
import { CommunityFeed } from './community-feed';

export function RightSidebar() {
  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col space-y-4">
      <CommunityFeed />
      <AIAssistant />
    </div>  
  );
}

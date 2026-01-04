import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function CommunityFeed() {
  return (
    <Card className="border-border/40 flex-1 flex flex-col overflow-hidden">
      <CardHeader className="pb-3 pt-4 px-4">
        <CardTitle className="text-base font-semibold">
          Community Feed
        </CardTitle>
        <CardDescription className="text-xs">
          See what others are reading
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 pb-4 flex-1 overflow-hidden">
        <ScrollArea className="h-full -mx-1 px-1">
          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex gap-2.5">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs font-medium">
                    U{i}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium">
                    User {i}
                  </p>
                  <p className="text-[11px] text-muted-foreground line-clamp-1">
                    Just listed &quot;Book Title&quot;
                  </p>
                  <p className="text-[11px] text-muted-foreground/70">
                    2 hours ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

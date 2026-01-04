import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export function AIAssistant() {
  return (
    <Card className="border-border/40 flex-1 flex flex-col overflow-hidden">
      <CardHeader className="pb-3 pt-4 px-4">
        <CardTitle className="text-base font-semibold">
          AI Assistant
        </CardTitle>
        <CardDescription className="text-xs">
          Get book recommendations
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 pb-4 flex-1 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1 rounded-lg border border-border/50 bg-muted/30 mb-3">
          <div className="p-3">
            <div className="bg-background rounded-lg p-2.5 shadow-sm">
              <p className="text-xs leading-relaxed text-foreground/90">
                Hello! I can help you find your next great read.
                What genre interests you?
              </p>
            </div>
          </div>
        </ScrollArea>

        <div className="flex gap-2">
          <Input
            placeholder="Ask for recommendations..."
            className="flex-1 text-xs h-8"
          />
          <Button size="icon" className="h-8 w-8">
            <Send className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

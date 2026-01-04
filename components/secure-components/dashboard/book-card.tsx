import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Tag } from 'lucide-react';

export function BookCard({ book }: any) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-200 group border-border/40">
      <CardContent className="p-0">
        <div className="aspect-[2/3] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 flex items-center justify-center text-4xl">
          {book.image}
        </div>

        <div className="p-2.5 space-y-1.5">
          <h3 className="font-semibold text-xs line-clamp-1">{book.title}</h3>
          <p className="text-[10px] text-muted-foreground">
            by {book.author}
          </p>

          <div className="flex flex-wrap gap-1">
            <Badge
              variant={book.type === 'sell' ? 'default' : 'secondary'}
              className="capitalize text-[9px] h-4 px-1.5"
            >
              {book.type}
            </Badge>
            <Badge variant="outline" className="text-[9px] h-4 px-1.5">
              <MapPin className="h-2 w-2 mr-0.5" />
              {book.city}
            </Badge>
            <Badge variant="outline" className="text-[9px] h-4 px-1.5">
              <Tag className="h-2 w-2 mr-0.5" />
              {book.genre}
            </Badge>
          </div>

          <Separator className="my-1.5" />

          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">{book.price}</span>
            <Button size="sm" className="text-[10px] h-6 px-2">
              {book.type === 'exchange' ? 'Exchange' : 'View'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

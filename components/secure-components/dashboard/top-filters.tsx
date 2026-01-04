'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter, X } from 'lucide-react';

export function TopFilters({ filters, setFilters }: any) {
  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.city !== 'all' ||
    filters.type !== 'all';

  return (
    <Card>
      <CardContent className="py-2 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
            <Filter className="h-4 w-4" />
            Filters
          </div>

          <div className="flex items-center justify-between w-[520px]">
            {/* Category */}
            <Select
              value={filters.category}
              onValueChange={(value) =>
                setFilters((p: any) => ({ ...p, category: value }))
              }
            >
              <SelectTrigger className="h-8 w-[150px] text-sm">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="fiction">Fiction</SelectItem>
                <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                <SelectItem value="self-help">Self-Help</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="biography">Biography</SelectItem>
              </SelectContent>
            </Select>

            {/* City */}
            <Select
              value={filters.city}
              onValueChange={(value) =>
                setFilters((p: any) => ({ ...p, city: value }))
              }
            >
              <SelectTrigger className="h-8 w-[130px] text-sm">
                <SelectValue placeholder="All Cities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
              </SelectContent>
            </Select>

            {/* Type */}
            <Select
              value={filters.type}
              onValueChange={(value) =>
                setFilters((p: any) => ({ ...p, type: value }))
              }
            >
              <SelectTrigger className="h-8 w-[130px] text-sm">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="sell">For Sale</SelectItem>
                <SelectItem value="exchange">For Exchange</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="min-w-[70px] flex justify-end">
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setFilters({
                    category: 'all',
                    city: 'all',
                    type: 'all',
                  })
                }
                className="h-7 px-2 text-xs text-muted-foreground"
              >
                <X className="h-3 w-3 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { TopFilters } from './top-filters';
import { BookCard } from './book-card';


export function BookFeed() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    city: 'all',
    type: 'all',
  });

  const books = [
    { id: 1, title: 'Atomic Habits', author: 'James Clear', city: 'mumbai', type: 'sell', price: '₹299', image: '📘', genre: 'self-help' },
    { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', city: 'bangalore', type: 'exchange', price: 'Exchange', image: '📕', genre: 'fiction' },
    { id: 3, title: 'Sapiens', author: 'Yuval Noah Harari', city: 'delhi', type: 'sell', price: '₹450', image: '📗', genre: 'non-fiction' },
    { id: 4, title: 'Zero to One', author: 'Peter Thiel', city: 'hyderabad', type: 'sell', price: '₹350', image: '📙', genre: 'business' },
    
    { id: 5, title: 'Deep Work', author: 'Cal Newport', city: 'chennai', type: 'sell', price: '₹399', image: '📓', genre: 'self-help' },
    { id: 6, title: 'The Psychology of Money', author: 'Morgan Housel', city: 'pune', type: 'sell', price: '₹320', image: '📖', genre: 'finance' },
    { id: 7, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', city: 'kolkata', type: 'sell', price: '₹420', image: '📒', genre: 'psychology' },
  ];

  const filteredBooks = books.filter((book) => {
    if (search && !`${book.title} ${book.author}`.toLowerCase().includes(search.toLowerCase())) return false;
    if (filters.category !== 'all' && book.genre !== filters.category) return false;
    if (filters.city !== 'all' && book.city !== filters.city) return false;
    if (filters.type !== 'all' && book.type !== filters.type) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search books or authors..."
          className="pl-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <TopFilters filters={filters} setFilters={setFilters} />

      <p className="text-sm text-muted-foreground px-1">
        {filteredBooks.length} books found
      </p>

      {filteredBooks.length === 0 ? (
        <Card className="p-12 text-center">No books found</Card>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 px-2">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

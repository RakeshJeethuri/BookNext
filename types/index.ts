export interface Book {
    id: number
    title: string
    author: string
    city: string
    type: 'sell' | 'exchange'
    price: string
    image: string
    genre: string
}

export interface Filters {
    category: string
    city: string
    type: string
}

export interface TopFiltersProps {
    filters: Filters
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

// Add other types as needed

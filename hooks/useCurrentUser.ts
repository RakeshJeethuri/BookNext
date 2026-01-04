'use client'

import { useEffect, useState } from 'react';
import { ITokenPlayLoad } from '@/lib/auth/getCurrentuser';
import { getCurrentUser } from '@/lib/auth/getCurrentuser';

export function useCurrentUser() {
    const [user, setUser] = useState<ITokenPlayLoad | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getCurrentUser();
                setUser(userData);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch user'));
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading, error };
}

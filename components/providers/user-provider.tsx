"use client";
import { createContext, useContext, useMemo } from "react";

interface UserData {
    id: string;
    email: string;
    name: string;
    exp: number;
}

type UserContextType = UserData | null;

export const UserContext = createContext<UserContextType | undefined>(undefined);

export default function UserProvider({
    children,
    user
}: {
    children: React.ReactNode;
    user: UserData | null
}) {
    // Memoize the user value to prevent unnecessary re-renders
    const value = useMemo(() => user, [user]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = (): UserData | null => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};

export const useCurrentUser = () => {
    const user = useUser();

    return {
        user,
        isAuthenticated: !!user,
        email: user?.email,
        userId: user?.id,
        userName: user?.name,
        // Add any other computed properties you need
    };
};
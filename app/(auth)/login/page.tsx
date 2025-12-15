'use client';

import { IUser } from "@/constants/interfaces";
import { useUser } from "@/hooks/users/useUser";

export default function Login() {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading users</div>;
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <h1 className="text-xl font-bold mb-4">Users</h1>

      {data?.map((user:any) => (
        <div
          key={user.id}
          className="border p-3 rounded mb-2"
        >
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ))}
    </div>
  );
}

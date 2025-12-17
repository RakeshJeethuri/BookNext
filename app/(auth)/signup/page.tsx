'use client';

import { BookOpen } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { useSignup } from '@/hooks/auth/useSignup';
import { toast } from 'sonner';
import { APP_INFO } from '@/constants/appInfo';
import { da } from 'zod/v4/locales';

export default function SignupPage() {
  const { data, mutate, isPending } = useSignup();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  console.log(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    mutate(
      { username, email, password },
      {
        onSuccess: () => {
          toast.success('Account created successfully! You can now log in.');
          
        },
        onError: (error) => {
          toast.error(`Signup failed: ${error.message}`);
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">{APP_INFO.APP_NAME}</span>
          </div>

          <CardTitle className="text-center">
            Create your {APP_INFO.APP_NAME} account
          </CardTitle>

          <CardDescription className="text-center">
            Sign up to buy, sell, or exchange books
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={username}
                disabled={isPending}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                disabled={isPending}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                disabled={isPending}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                disabled={isPending}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <Button className="w-full" disabled={isPending} type="submit">
              {isPending ? 'Creating account...' : 'Sign up'}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <Separator />

          <p className="text-sm text-muted-foreground text-center">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              Login
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

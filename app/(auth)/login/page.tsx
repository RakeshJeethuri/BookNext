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
import { useLogin } from '@/hooks/auth/useLogin';
import { toast } from 'sonner';
import { APP_INFO } from '@/constants/appInfo';

import { GoogleLogin } from '@react-oauth/google';
import { useCurrentUser, useUser } from '@/components/providers/user-provider';
export default function LoginPage() {
  const { data, mutate, isPending } = useLogin();
  console.log("Login response data:", data);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email & Password required");
      return;
    }

    mutate({
      provider: "auth",
      email,
      password,
    });
  };

  const handleGoogleLogin = (googleIDToken: string) => {
    mutate({
      provider: "google",
      token: googleIDToken,
      email: "",
      password: "",
    });
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
            Welcome back to {APP_INFO.APP_NAME}
          </CardTitle>

          <CardDescription className="text-center">
            Login to buy, sell, or exchange books
          </CardDescription>

        </CardHeader>


        {/* form */}
        <CardContent>
          <form className="space-y-4" onSubmit={handleAuthSubmit}>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                disabled={isPending}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                disabled={isPending}
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              className="w-full"
              disabled={isPending}
              type="submit"
            >
              {isPending ? "Logging in..." : "Login"}
            </Button>

          </form>
        </CardContent>


        {/* Footer */}
        <CardFooter className="flex flex-col space-y-4">

          <Separator />

          {/* Google login */}
          <GoogleLogin
            onSuccess={(res) => handleGoogleLogin(res.credential!)}
            onError={() => toast.error("Google Login Failed")}
          />

          <p className="text-sm text-muted-foreground text-center">
            Don&apos;t have an account?{' '}
            <a href="/signup" className="text-primary hover:underline font-medium">
              Sign up
            </a>
          </p>

        </CardFooter>

      </Card>

    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Zod schema for signin validation
const signinSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SigninFormData = z.infer<typeof signinSchema>;

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
  });

  // TanStack Query mutation for signin
  const signinMutation = useMutation({
    mutationFn: async (data: SigninFormData) => {
      const response = await axios.post("http://localhost:8080/login", data);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
      reset();
    },
    onError: (error: any) => {
      console.error("Login failed:", error);
    },
  });

  const onSubmit = (data: SigninFormData) => {
    console.log(data);
    signinMutation.mutate(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl border-0">
        <CardHeader>
          <div className="flex flex-col items-center gap-2">
            <img src="/vite.svg" alt="Logo" className="h-10 w-10 mb-2" />
            <CardTitle className="text-center text-2xl font-bold text-purple-700">Sign In</CardTitle>
            <p className="text-gray-500 text-sm">Welcome back! Please sign in to your account.</p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="rounded-lg border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password")}
                className="rounded-lg border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
            {signinMutation.error && (
              <p className="text-sm text-red-500 text-center">
                {signinMutation.error.response?.data?.message || "Login failed"}
              </p>
            )}
            {signinMutation.isSuccess && (
              <p className="text-sm text-green-600 text-center">Login successful!</p>
            )}
            <Button 
              type="submit" 
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg shadow-md" 
              disabled={isSubmitting || signinMutation.isPending}
            >
              {(isSubmitting || signinMutation.isPending) ? "Signing in..." : "Sign In"}
            </Button>
            <div className="text-center text-sm text-gray-600 mt-2">
              Don't have an account? <a href="/signup" className="text-purple-600 hover:underline">Sign up</a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

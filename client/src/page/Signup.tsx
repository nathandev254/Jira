import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Zod schema for signup validation
const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignupFormData = z.infer<typeof signupSchema>;

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  // TanStack Query mutation for signup
  const signupMutation = useMutation({
    mutationFn: async (data: SignupFormData) => {
      const response = await axios.post("http://localhost:8080/register", data);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Registration successful:", data);
      reset();
    },
    onError: (error: any) => {
      console.error("Registration failed:", error);
    },
  });

  const onSubmit = (data: SignupFormData) => {
    signupMutation.mutate(data);
    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl border-0">
        <CardHeader>
          <div className="flex flex-col items-center gap-2">
            <img src="/vite.svg" alt="Logo" className="h-10 w-10 mb-2" />
            <CardTitle className="text-center text-2xl font-bold text-purple-700">Sign Up</CardTitle>
            <p className="text-gray-500 text-sm">Create your account to get started.</p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-700">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                {...register("username")}
                className="rounded-lg border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username.message}</p>
              )}
            </div>
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
            {signupMutation.error && (
              <p className="text-sm text-red-500 text-center">
                {signupMutation.error.response?.data?.message || "Registration failed"}
              </p>
            )}
            {signupMutation.isSuccess && (
              <p className="text-sm text-green-600 text-center">Registration successful! You can now sign in.</p>
            )}
            <Button 
              type="submit" 
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg shadow-md" 
              disabled={isSubmitting || signupMutation.isPending}
            >
              {(isSubmitting || signupMutation.isPending) ? "Signing up..." : "Sign Up"}
            </Button>
            <div className="text-center text-sm text-gray-600 mt-2">
              Already have an account? <a href="/signin" className="text-purple-600 hover:underline">Sign in</a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Signup;

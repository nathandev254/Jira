import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock, ArrowRight } from "lucide-react";
import { useToast, ToastContainer } from "@/components/ui/toast";

// Zod schema for signup validation
const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignupFormData = z.infer<typeof signupSchema>;

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const { toasts, toast, removeToast } = useToast();
  
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
      toast.success("Account created successfully!", "You can now sign in with your credentials.");
      reset();
    },
    onError: (error: any) => {
      console.error("Registration failed:", error);
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      toast.error("Registration Failed", errorMessage);
    },
  });

  const onSubmit = (data: SignupFormData) => {
    signupMutation.mutate(data);
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply blur-xl opacity-20 animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply blur-xl opacity-20 animate-pulse [animation-delay:4s]"></div>
      </div>

      <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl">
        <CardHeader className="pb-8 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <User className="h-8 w-8 text-white" />
            </div>
            <div className="text-center">
              <CardTitle className="text-3xl font-bold text-white mb-2">Create Account</CardTitle>
              <p className="text-white/70 text-sm">Join us and start your journey today</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="px-8 pb-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white/90 text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4" />
                Username
              </Label>
              <div className="relative">
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  {...register("username")}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:bg-white/15 transition-all duration-300 focus:-translate-y-0.5 focus:shadow-lg focus:shadow-purple-500/25"
                />
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
              </div>
              {errors.username && (
                <p className="text-sm text-red-300 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-300 rounded-full"></span>
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/90 text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:bg-white/15 transition-all duration-300 focus:-translate-y-0.5 focus:shadow-lg focus:shadow-purple-500/25"
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
              </div>
              {errors.email && (
                <p className="text-sm text-red-300 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-300 rounded-full"></span>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white/90 text-sm font-medium flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password")}
                  className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:bg-white/15 transition-all duration-300 focus:-translate-y-0.5 focus:shadow-lg focus:shadow-purple-500/25"
                />
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/70 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-300 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-300 rounded-full"></span>
                  {errors.password.message}
                </p>
              )}
            </div>


            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] active:translate-y-0" 
              disabled={isSubmitting || signupMutation.isPending}
            >
              {(isSubmitting || signupMutation.isPending) ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>

            <div className="text-center pt-4">
              <p className="text-white/70 text-sm">
                Already have an account?{" "}
                <a 
                  href="/signin" 
                  className="text-white font-medium hover:text-white/80 underline underline-offset-4 transition-colors"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}

export default Signup;

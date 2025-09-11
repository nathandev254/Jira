import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await axios.post("/api/login", { email, password });
      setSuccess("Login successful!");
      // Store user/session here (e.g., localStorage, context, etc.)
      // localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-lg border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-lg border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>
            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
            {success && <p className="text-sm text-green-600 text-center">{success}</p>}
            <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg shadow-md" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
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

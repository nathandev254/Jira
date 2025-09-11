import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
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
      await axios.post("/api/register", { username, email, password });
      setSuccess("Registration successful! You can now sign in.");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
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
            <CardTitle className="text-center text-2xl font-bold text-purple-700">Sign Up</CardTitle>
            <p className="text-gray-500 text-sm">Create your account to get started.</p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-700">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="rounded-lg border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>
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
              {loading ? "Signing up..." : "Sign Up"}
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

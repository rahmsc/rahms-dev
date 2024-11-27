"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.success) {
      router.push("/blog/add-post");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <main className="min-h-screen p-4 sm:p-8">
      <div className="max-w-md mx-auto">
        <header className="mb-8">
          <pre className="text-center mb-4">
            {`
 _                _       
| |    ___   __ _(_)_ __  
| |   / _ \\ / _\` | | '_ \\ 
| |__| (_) | (_| | | | | |
|_____\\___/ \\__, |_|_| |_|
            |___/         
`}
          </pre>
          <Link
            href="/blog"
            className="block text-center text-green-400 hover:text-green-600 transition-colors"
          >
            &lt; Back_to_Blog
          </Link>
        </header>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-green-400 mb-2">
              &gt; Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-green-400 p-2 text-green-400 focus:outline-none focus:border-green-600"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full border border-green-400 p-2 text-green-400 hover:bg-green-400 hover:text-black transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

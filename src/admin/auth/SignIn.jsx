import React, { useState } from "react";
import { supabase } from "../../SupabaseClient";
import Loading from "../../Components/Loading";
import toast from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error: SignInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (SignInError) throw SignInError;
      toast.success("Signed In");
    } catch (error) {
      console.error("Error while signing in.:", error);
      toast.error("Error while signing in.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex w-full justify-center items-center min-h-screen">
        <form
          onSubmit={handleignIn}
          className="text-text-primary rounded-sm p-2 gap-2 flex flex-col bg-gray-800 w-80"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-700 px-4 py-1 rounded-sm outline-0"
            type="email"
            placeholder="Email Adress"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 px-4 py-1 rounded-sm outline-0"
            type="password"
            placeholder="Password"
            required
          />
          <button
            className={`${
              isLoading ? "pointer-events-none opacity-60" : ""
            } bg-accent select-none cursor-pointer flex justify-center gap-2`}
            type="submit"
          >
            {isLoading ? (
              <>
                <Loading />
                Signing In
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;

import React, { useState } from "react";
import { supabase } from "../../SupabaseClient";
import Loading from "../../Components/Loading";

const SignOut = () => {
  const [isLoading, setIsLoading] = useState(false);
  const signOut = async () => {
    setIsLoading(true);
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => {
            if (window.confirm("Are you sure?")) {
              signOut();
            }
          }}
          className={`${
            isLoading ? "pointer-events-none opacity-60" : ""
          } bg-red-800 px-4 py-1 text-sm rounded-sm cursor-pointer hover:brightness-90`}
        >
          {isLoading ? <Loading /> : "Sign Out"}
        </button>
      </div>
    </>
  );
};

export default SignOut;

import React, { useEffect, useState } from "react";
import SignIn from "./auth/SignIn";
import AdminHome from "./AdminHome";
import { Outlet } from "react-router-dom";
import { supabase } from "../SupabaseClient";

const Dashboard = () => {
  const [session, setSession] = useState(null);
  const handleSession = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data);
  };
  useEffect(() => {
    handleSession();
    const { data: authListner } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );
    return () => {
      authListner.subscription.unsubscribe();
    };
  }, []);
  return (
    <div className="w-screen">
      {session ? (
        <div className="px-4 md:ml-40">
          <AdminHome /> <Outlet />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Dashboard;

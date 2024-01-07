import { router } from "expo-router";
import { useEffect } from "react";

import { supabase } from "../utils/supabase";

export default function App() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace("/(app)");
      } else {
      }
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.replace("/(app)");
      } else {
        router.replace("/(auth)");
      }
    });
  }, []);
}

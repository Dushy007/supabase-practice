import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import supabase from "../../supabaseConfig";

const Home = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    const fetchDetails = async () => {
      if (!router.isReady) {
        console.log("Entered");
        return;
      }
      console.log("ID", id);
      const { data } = await supabase.from("users").select("name").eq("id", id);
      if (data !== null) {
        setName(data[0].name);
      }
    };
    fetchDetails();
  }, [router.isReady]);
  console.log(name);
  return (
    <div>
      <input type="text" readOnly value={name} />
    </div>
  );
};

export default Home;

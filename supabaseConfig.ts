import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eyovessfjjmexwujfphn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5b3Zlc3NmamptZXh3dWpmcGhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA2NzczNTcsImV4cCI6MTk4NjI1MzM1N30.gPo277x-Xmmdb19kh-I6mMql40eIpp7mekwJIl6kuM4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

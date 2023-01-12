import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yytqanbbhkbfgzxzictb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5dHFhbmJiaGtiZmd6eHppY3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0NDcyODgsImV4cCI6MTk4NzAyMzI4OH0.Q1EKHNaEa1NCI-lhozXoIo7oz65desJ1Xyy6OgM-1DM";
export const supabase = createClient(supabaseUrl, supabaseKey);

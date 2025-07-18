import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xdtyxlderzfqytpsvtrc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkdHl4bGRlcnpmcXl0cHN2dHJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NTYwNjMsImV4cCI6MjA2ODQzMjA2M30.ZCuTJIVLwYA23VyYX7szUvqgxsBmxZm2hquBWS_8aW4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

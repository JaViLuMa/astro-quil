import { createClient } from '@supabase/supabase-js';

export default createClient(
  import.meta.env.SECRET_SUPABASE_URL,
  import.meta.env.SECRET_SUPABASE_KEY
);

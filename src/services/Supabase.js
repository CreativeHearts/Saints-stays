import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://ijoclvxjysdkwqmoqhuu.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlqb2NsdnhqeXNka3dxbW9xaHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1OTU5OTUsImV4cCI6MjAyNzE3MTk5NX0.uADEIHv0ddu5ay421drosgSG2bMrI-V0YpelfaEYCN8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

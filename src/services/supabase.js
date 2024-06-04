
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://ukkeqhwmqbcwjkggfjeg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVra2VxaHdtcWJjd2prZ2dmamVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzNDcxNjQsImV4cCI6MjAyODkyMzE2NH0.A4q8Adb6Vt4nGptprYKuLAhEXhu_Qs81AyUMNiJKBxI';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
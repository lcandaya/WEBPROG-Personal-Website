import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://iadxkwpnnvceoeymufvn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhZHhrd3BubnZjZW9leW11ZnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMzY3ODIsImV4cCI6MjA1MzgxMjc4Mn0.7UnwWOG0rVpev60SYq0xkE1jGqNRRhISjy_BljgjE-g')

import { createClient } from '@supabase/supabase-js'


export const supabaseUrl = 'https://jhxwdkiocqjbjytzrcxi.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoeHdka2lvY3FqYmp5dHpyY3hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxMjI5OTIsImV4cCI6MjAzOTY5ODk5Mn0.IauMmJ2doPTE_8vDyPDMI0vrvlItKhtZm5KHFA3D2x8"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase

const dotenv = require('dotenv').config()
const supabase = require('@supabase/supabase-js')

const url = process.env.URL
const key = process.env.KEY

const cliente = supabase.createClient(url, key)

module.exports = cliente
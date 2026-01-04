import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Save stock query to database
 */
export async function saveStockQuery(data: {
  emiten: string;
  from_date?: string;
  to_date?: string;
  bandar?: string;
  barang_bandar?: number;
  rata_rata_bandar?: number;
  harga?: number;
  ara?: number;
  arb?: number;
  fraksi?: number;
  total_bid?: number;
  total_offer?: number;
  total_papan?: number;
  rata_rata_bid_ofer?: number;
  a?: number;
  p?: number;
  target_realistis?: number;
  target_max?: number;
}) {
  const { data: result, error } = await supabase
    .from('stock_queries')
    .insert([data])
    .select();

  if (error) {
    console.error('Error saving to Supabase:', error);
    throw error;
  }

  return result;
}

import { supabase } from "@/utils/supabase/client";

export async function fetchProducts(limit: number = 10, offset: number = 0) {
    let { data, error } = await supabase
        .from('Products')
        .select('*')
        .range(offset, offset + limit - 1); // Fetches items based on limit and offset

    if (error) {
        console.error('Error fetching data:', error);
        return { data: null, error };
    } else {
        return { data, error: null };
    }
}

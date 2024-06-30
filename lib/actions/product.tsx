import { supabase } from "@/utils/supabase/client";

export async function fetchProducts(limit: number = 10, offset: number = 0, category?: string) {
    let query = supabase
        .from('Products')
        .select('*')
        .range(offset, offset + limit - 1);

    if (category) {
        query = query.eq('category', category); // Apply category filter if provided
    }

    let { data, error } = await query;

    if (error) {
        console.error('Error fetching data:', error);
        return { data: null, error };
    } else {
        return { data, error: null };
    }
}

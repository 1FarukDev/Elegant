import { supabase } from "@/utils/supabase/client";


export async function fetchProducts() {
    let { data, error } = await supabase
        .from('Products')
        .select('*'); // Select all columns, or specify particular columns e.g., .select('id, name, price')

    if (error) {
        console.error('Error fetching data:', error);
        return { data: null, error };
    } else {
        return { data, error: null };
    }
}



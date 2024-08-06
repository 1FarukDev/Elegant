import { supabase } from "@/utils/supabase/client";

export async function applyCoupon(code: string): Promise<{ discount?: number, error?: string }> {
    console.log("Coupon code received:", code);

    const { data, error } = await supabase
        .from('coupon')
        .select('*')
        .eq('code', code)
        .maybeSingle();

    if (error) {
        console.error('Error fetching coupon:', error);
        return { error: 'An error occurred while fetching the coupon.' };
    }

    if (!data) {
        console.log('Coupon code not found.');
        return { error: 'Coupon code not found.' };
    }

    console.log('Coupon data retrieved:', data);

    if (data.is_active && data.usage_count < data.usage_limit) {
        const now = new Date();
        const validFrom = new Date(data.valid_from);
        const validTo = new Date(data.valid_to);

        console.log('Checking coupon validity...');

        if (now >= validFrom && now <= validTo) {
            console.log('Coupon is valid and applied:', data.discount);

            await updateCouponUsage(data.id, data.usage_count, data.usage_limit);

            return { discount: data.discount };
        } else {
            console.log('Coupon is not valid at this time.');
            return { error: 'Coupon is not valid at this time.' };
        }
    } else {
        console.log('Coupon is inactive or has reached its usage limit.');
        return { error: 'Coupon is inactive or has reached its usage limit.' };
    }
}

async function updateCouponUsage(couponId: bigint,  currentUsageCount: number, currentUsageLimit: number) {
    const { data, error } = await supabase
        .from('coupon')
        .update({
            usage_count: currentUsageCount + 1,
            usage_limit: currentUsageLimit - 1
        })
        .eq('id', couponId);

    if (error) {
        console.error('Error updating coupon usage count:', error);
    } else {
        console.log('Coupon usage count updated successfully:', data);
    }
}

export default function calculateDiscountedPrice(actualPrice: string | any, discountPercentage: string | undefined): string {
    // Ensure actualPrice is a valid number
    const parsedActualPrice = parseFloat(actualPrice);
    if (isNaN(parsedActualPrice) || parsedActualPrice <= 0) {
        throw new Error('Invalid actual price. Please provide a valid price.');
    }

    // Check if discountPercentage is undefined or empty
    if (!discountPercentage) {
        return parsedActualPrice.toFixed(2); // No discount applied
    }

    // Ensure discountPercentage is a valid number
    const parsedDiscountPercentage = parseFloat(discountPercentage.replace('%', ''));
    if (isNaN(parsedDiscountPercentage) || parsedDiscountPercentage < 0 || parsedDiscountPercentage > 100) {
        throw new Error('Invalid discount percentage. Please provide a valid percentage.');
    }

    // Calculate the discounted amount
    const discountAmount = (parsedDiscountPercentage / 100) * parsedActualPrice;

    // Calculate the discounted price
    const discountedPrice = parsedActualPrice - discountAmount;
    // Return the discounted price, rounded to two decimal places
    return discountedPrice.toFixed(2);
}

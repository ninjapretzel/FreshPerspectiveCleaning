export function calculatePrice(bath, frequency) {
    const hourlyRate = 75
    let time = bath * 1
    let softTotal = hourlyRate * time
    let grandTotal
    if (frequency === "One Time") {
        return grandTotal = softTotal
    } else if (frequency === "Every 4 Weeks") {
        return grandTotal = softTotal - softTotal * 0.10
    } else if (frequency === "Every 3 Weeks") {
        return grandTotal = softTotal - softTotal * 0.15
    } else if (frequency === "Every 2 Weeks") {
        return grandTotal = softTotal - softTotal * 0.25
    } else if (frequency === "Every Week") {
        return grandTotal = softTotal - softTotal * 0.30
    }
}
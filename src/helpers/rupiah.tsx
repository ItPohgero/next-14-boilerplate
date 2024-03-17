export const Rupiah = (amount: any) => {
    if (!amount) return null
    const numberAmount = Number(amount)
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(numberAmount)
}

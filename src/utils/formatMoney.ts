export default function formatMoney(value: number) {
  let valueFormatted = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR'
  }).format(value)

  return valueFormatted
}

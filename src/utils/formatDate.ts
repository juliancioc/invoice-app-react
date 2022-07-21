export default function formatDate(date: Date) {
  const options: any = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  const month = date.toLocaleDateString('en-GB', options)

  return `${month}`
}

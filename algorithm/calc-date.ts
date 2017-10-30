export default function calcDate (date1: string, date2: string): number {
  const dayOfDate1 = new Date(`${date1.slice(0, 4)},${date1.slice(4, 6)},${date1.slice(6, 8)}`)
  const msecOfDate1 = dayOfDate1.getTime()

  const dayOfDate2 = new Date(`${date2.slice(0, 4)},${date2.slice(4, 6)},${date2.slice(6, 8)}`)
  const msecOfDate2 = dayOfDate2.getTime()

  return Math.abs(msecOfDate1 - msecOfDate2) / 86400000
}

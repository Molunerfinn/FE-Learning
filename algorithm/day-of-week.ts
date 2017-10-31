export default function dayOfWeek (date: string): string {
  const tempDate: Date = new Date()
  const mescOfDate: number = new Date(`${date.slice(0, 4)},${date.slice(4, 6)},${date.slice(6, 8)}`).getTime()
  const today: Date = new Date(`${tempDate.getFullYear()}, ${tempDate.getMonth() + 1}, ${tempDate.getDate()}`)
  const dayOfToday: number = today.getDay()
  const weekday: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let diffDay: number = (mescOfDate - today.getTime()) / 86400000
  diffDay < 0 ? diffDay = diffDay % 7 + 7 + dayOfToday : diffDay += dayOfToday
  return weekday[Math.abs(diffDay) % 7]
}

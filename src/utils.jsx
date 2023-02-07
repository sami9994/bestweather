export default function calcDate(dt) {
  return new Date(dt * 1000).toLocaleString()
}

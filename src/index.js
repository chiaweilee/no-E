export default function (e) {
  const matches = /^([\d.]+)e((\+?|-)\d+)$/i.exec(e)
  if (!matches) {
    return e
  }
  const [, baseNumber, pow] = matches
  const b = baseNumber.split('.')
  const i = Number(pow)
  if (i > 0 && b[1]) {
    if (b[1].length > i) {
      b[1] = b[1].split('')
      b[1].splice(Number(pow), 0, '.')
      b[1] = b[1].join('')
    } else {
      b[1] = b[1] + Math.pow(10, i - b[1].length).toString().substr(1)
    }
  } else {
    if (i > 0) {
      b[1] = Math.pow(10, i).toString().substr(1)
    } else {
      b[0] = '0.' + (Math.pow(10, -i - b[0].length) + b[0]).substr(1)
    }
  }
  return b.join('')
}

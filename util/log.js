const log = function () {
  let timeoutId = null
  let index = 0
  return function (msg, ...rest) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      index = 0
    }, 2000)
    console.log(`%c${++index}. %c生命周期：%c${msg}`,
      'color: blue;font-size: 20px;',
      'color:green;font-size:20px;',
      'font-size: 20px',
      rest)
  }
}();
export default log
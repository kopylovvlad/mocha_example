const i = 2

global.console.log(i)

const b = {
  a: 123,
  b: msg => {
    setTimeout(() => {
      global.console.log(msg)
    }, 1 * 1000)
  }
}

global.console.log(b.b('hello'))

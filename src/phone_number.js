module.exports = {
  validate(number) {
    return /^\d{8}$/.test(number)
  }
}

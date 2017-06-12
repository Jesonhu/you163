const isProdMode = (process.env.NODE_ENV === 'production')

module.exports = {
  baseUrl: isProdMode ? 'http://github.easysolves.com/' : 'http://127.0.0.1:3333/'
}

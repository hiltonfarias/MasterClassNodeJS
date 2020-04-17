const os = require('os')

const { freemem, totalmem } = os

setInterval(() => {
  const total = parseInt(totalmem() / 1024 / 1024)
  const men = parseInt(freemem() / 1024 / 1024)
  const percents = parseInt((1.0 - men / total) * 100)

  const stats = {
    free: `${men} MB`,
    total: `${total} MB`,
    usage: `${percents} %`,
  }

  console.clear()
  console.log('====== PC STATS =======')
  console.table(stats)
}, 1000)
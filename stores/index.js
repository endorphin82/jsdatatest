const ADAPTER = process.env.ADAPTER || "mongodb"

const { Store } = require(`./${ADAPTER}`)
export { Store }
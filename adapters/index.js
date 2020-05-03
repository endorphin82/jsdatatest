const ADAPTER = process.env.ADAPTER || "mongodb"

const { Adapter } = require(`./${ADAPTER}`)
// import { adapter} from `./${ADAPTER}`
export { Adapter }
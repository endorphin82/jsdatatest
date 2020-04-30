const ADAPTER = process.env.ADAPTER || "mongodb"

const { adapter } = require(`./${ADAPTER}`)
// import { adapter} from `./${ADAPTER}`
export { adapter }
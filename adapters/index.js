const ADAPTER = process.env.ADAPTER || "mongodb"

const { adapter } = require(`./${ADAPTER}/mongodb`)
// import { adapter} from `./${ADAPTER}`
export { adapter }
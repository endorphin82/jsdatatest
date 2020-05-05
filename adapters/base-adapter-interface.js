class BaseAdapterInterface {
  connect(OPTIONS) {
    return new Error("Please implement connect method!")
  }
}

export {
  BaseAdapterInterface
}
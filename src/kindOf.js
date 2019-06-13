const kindOf = x =>
  Object.prototype.toString
    .call(x)
    .replace(
      /\[object (.*)?\]/,
      (_a, b) => b.charAt(0).toLowerCase() + b.substr(1)
    )

export default kindOf

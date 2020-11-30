export default (expression) => {
  //new is used bcoz of object creation
  const matched = (new RegExp('([\\d]+\\.?[\\d]*)?([-+/*][\\d]+\\.?[\\d]*)*')).exec(expression) //exec works only with RegEx

  if (!matched) {
    return 0;
  }

  // if (/^[*+\/]/.test(expression)){
  //   return () => {
  //     throw new Error('Cannot start the expression with invalid operators')
  //   }
  // }

  return new Function(`return ${matched[0]}`)()
}
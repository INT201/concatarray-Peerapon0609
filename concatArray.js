const { template } = require('@babel/core')

function concatArray(array1, array2) {
  return (array1==null||undefined)&&(array2==null||undefined)?undefined:(array1==null||undefined)?array2:(array2==null||undefined)?array1:array1.concat(array2)
}
module.exports = concatArray

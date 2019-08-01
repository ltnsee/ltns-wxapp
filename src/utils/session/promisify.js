/**
 * 将普通的方法转换为promise的方法
 * @param {*} api
 */
const promisify = api => {
  return (options, ...params) => new Promise((resolve, reject) => {
    api({ ...options, success: resolve, fail: reject }, ...params)
  })
}
export default { promisify }

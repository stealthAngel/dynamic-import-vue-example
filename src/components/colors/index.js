const files = require.context('.', false, /\.vue$/)
console.log("🚀 ~ file: index.js ~ line 2 ~ files", files)
const modules = {}
files.keys().forEach((key) => {
     if (key === './index.js') return
     modules[key.replace(/(\.\/|\.vue)/g, '')] = files(key)
})
export default modules
module.exports = {
  plugins : [
    require('autoprefixer')(
      {
        browsers : ['> 1%','last 5 versions','Firefox >= 45','ios >= 8','Safari >= 8','ie >= 10']
      }
    )
  ]
}

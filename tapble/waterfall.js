function Tapable () {
  this._plugins = {}
}

module.exports = Tapable


Tapable.prototype.plugin = function(name, fn){
  if (!this._plugins[name]) {
    this._plugins[name] = [fn]
  } else {
    this._plugins[name].push(fn)
  }
}

Tapable.prototype.applyPluginsWaterfall = function (name, ...args) {
  if(!this._plugins[name]) return
  const plugins = this._plugins[name]
  let [ current, ...others ] = args
  plugins.forEach(plugin => {
    current = plugin.apply(this, [current, ...others])
  })
  return current
}
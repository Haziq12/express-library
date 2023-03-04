import methods from 'methods'

const app = {}
export default app 

app.init = function() {
  this.cache = {}
  this.engines = {}
  this.settings = {}
  this._router = undefined 
}

let slice = Array.prototype.slice 

methods.forEach((method) => {
  app[method] = (path) => {
    this.lazyrouter() 
    let route = this._router.route(path) 
    route[method].apply(route, slice.call(arguments, 1))
    return this; 
  }
})
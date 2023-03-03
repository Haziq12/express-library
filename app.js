const app = {}
export default app 

app.init = function() {
  this.cache = {}
  this.engines = {}
  this.settigs = {}
  this._router = undefined 
}
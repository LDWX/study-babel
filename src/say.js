let _name = "shenxin"
module.exports = {
  get name() {
    return _name
  },
  changeName: (n) => {
    _name = n
  },

  getName: () => {
    return _name
  }  
}
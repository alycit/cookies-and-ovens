var PrepTable = function() {
  this.attributes = {
    items: []
  }
}

PrepTable.prototype = {
  addItem: function(item) {
    this.attributes.items.push(item)
  },
  removeItem: function(id) {
    var item = this.findItem(id)
    var index = this.attributes.items.indexOf(item)
    this.attributes.items.splice(index, 1)
    return item
  },
  findItem: function(id) {
    var result = null
    $(this.attributes.items).each(function(i, item) {
      if (item.getId() == id) {
        result = item
        return false
      }
    })

    return result
  }
}

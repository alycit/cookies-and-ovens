var PrepTable = function() {
  var items = [];
  
  this.getItems = function() {
    return items;
  }
}

PrepTable.prototype = {
  addItem: function(item) {
    this.getItems().push(item)
  },
  removeItem: function(id) {
    var item = this.findItem(id);
    var index = this.getItems().indexOf(item);
    this.getItems().splice(index, 1);
    return item;
  },
  findItem: function(id) {
    var result = null
    $(this.getItems()).each(function(i, item) {
      if (item.getId() == id) {
        result = item;
        return false;
      }
    })

    return result;
  }
}

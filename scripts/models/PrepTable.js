var PrepTable = function() {
  this.attributes = {
    items: []
  }
}

PrepTable.prototype = {
  addItem: function(item) {
    this.attributes.items.push(item);
    $.Topic("PrepTable:addingItem").publish(item);
  },
  moveItem: function(id) {
    var item = this.findItem(id);
    this.removeItem(item);
    $.Topic("PrepTable:movingItem").publish(item);
  },
  removeItem: function(item) {
    var index = this.attributes.items.indexOf(item);
    this.attributes.items.splice(index, 1);
    $.Topic("PrepTable:removingItem").publish(item);
  },
  findItem: function(id) {
    var result = null;
    $(this.attributes.items).each(function(i, item) {
      if (item.getId() == id) {
        result = item;
        return false;
      }
    });

    return result;
  }
}

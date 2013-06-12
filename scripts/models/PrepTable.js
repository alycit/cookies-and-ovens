var PrepTable = function() {
  this.attributes = {
    items: []
  }
}

PrepTable.prototype = {
  addItem: function(item) {
    this.attributes.items.push(item);
    $.Topic("PrepTable:addingItemToPrepTable").publish(item);
  },
  moveItemToOven: function(id) {
    var item = this.findItem(id);
    this.removeItem(item);
    $.Topic("PrepTable:movingItemToOven").publish(item);
  },
  removeItem: function(item) {
    var index = this.attributes.items.indexOf(item);
    this.attributes.items.splice(index, 1);
    $.Topic("PrepTable:removingItemFromPrepTable").publish(item);
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

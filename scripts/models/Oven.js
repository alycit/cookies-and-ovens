var Oven = function() {
  var items = [];
  
  this.getItems = function() {
    return items;
  }
}

Oven.prototype = {
  addItem: function(item) {
    this.getItems().push(item);
  },
  bake: function() {
    $(this.getItems()).each(function(i, item) {
      item.bake();
    })
  },
  // see iterator pattern: https://github.com/abinoda/design-patterns/blob/master/iterator_pattern.md
  each: function(callback) {
    var items = this.getItems();
    for (i = 0; i < items.length; i++) {
      var item = items[i]
      callback(item)
    }
  }
}

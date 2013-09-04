var Oven = function() {
  this.attributes = {
    items: []
  }
}

Oven.prototype = {
  addItem: function(item) {
    this.attributes.items.push(item)
  },
  bake: function() {
    $(this.attributes.items).each(function(i, item) {
      item.bake()
    })
  },
  // see iterator pattern: https://github.com/abinoda/design-patterns/blob/master/iterator_pattern.md
  each: function(callback) {
    for (i = 0; i < this.attributes.items.length; i++) {
      var item = this.attributes.items[i]
      callback(item)
    }
  }
}

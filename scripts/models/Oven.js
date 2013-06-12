var Oven = function() {
  this.attributes = {
    items: []
  }
}

Oven.prototype = {
  addItem: function(item) {
    this.attributes.items.push(item);
  },
  bake: function() {
    $(this.attributes.items).each(function(i, item) {
      item.bake();
    });
  }
}

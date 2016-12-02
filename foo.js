module.exports = {
  
  quux: require("./quux"),
  
  foo: function(x) { return x + 2; },
  BAR: 23,
  baz: function(name) {
    return project.getGroup(name);
  }
};

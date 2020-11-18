module.exports = {
  
  quux: require("./quux"),
  
  foo: function(x) { return x + 2; },
  BAR: 27,
  baz: function(name) {
    return project.getGroup(name);
  },
  hmm: function() {
    throw new Error('hmm');
  }
};

function oops(heapSpace) {
  var x = [];
  var i = 0;
  while (true)
  {
      if (heapSpace)
      {
        x.push({a:"i" + i, b: i});
      }
      i++; 
  }
}

module.exports = {
  
  quux: require("./quux"),
  
  foo: function(x) { return x + 2; },
  BAR: 42,
  baz: function(name) {
    return project.getGroup(name);
  },
  hmm: function() {
    throw new Error('hmm');
  },
  oops: oops
};

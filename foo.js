module.exports = {
  
  quux: require("./quux.js?v3"),
  
  foo: function(x) { return x + 2; },
  BAR: 13,
  baz: function(name) {
    return project.getGroup(name);
  }
};


console.log('name: ' + project.name);
sendReply("wtf?");

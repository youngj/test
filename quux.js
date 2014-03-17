exports.abc = function(str) { return "abc " + str };

exports.def = function() { 
  return project.name;  
};

exports.ghi = function(x) {
  console.log(x);
};

//sendSMS("123123", "hello");
console.log(httpClient.request("http://www.google.com").content.length);
console.log("content = " + content);
console.log("from_number = " + message.from_number);

var dom = new DOMImplementation();
var doc2 = dom.createDocument();
var foo = doc2.createElement('foo');
foo.setAttribute('baz', '1213');
var bar = doc2.createElement('bar');
bar.appendChild(doc2.createTextNode('wtf'));
doc2.appendChild(foo);
foo.appendChild(bar);

console.log('' + doc2);

//console.log("word1 = " + word1);

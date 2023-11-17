// List the properties of an JavaScript Object

var student = {
  name: "David Ray",
  sclass: "VI",
  rollno: 12,
};

function listProperties(obj) {
  var propertNames = Object.keys(obj);
  var propertList = propertNames.join(", ");
  return propertList;
}

console.log(listProperties(student));

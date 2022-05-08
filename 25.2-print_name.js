

const obj = {
  name: "Naama",

  printName: function () {
    console.log(this.name);
  },

  printNameAfterDelay: function () {
    const printName2 = obj.printName.bind(obj);
    setTimeout(printName2, 1000);
  },
};

function applyObjFunctions(func1, func2) {
  console.log("print 1:");
  func1.call(obj);
  console.log("print 2:");
  func2();
}
applyObjFunctions(obj.printName, obj.printNameAfterDelay);

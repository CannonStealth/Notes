// I can't describe this, maybe executes your string?


console.log(eval("2 + 2"));         // 4
eval("console.log(2 + 2)")          // 4
eval("console.log(eval(\"2+2\"))")  // 4
eval("console.log(eval(\"2+2\"))")  // 4
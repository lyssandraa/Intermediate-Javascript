// simple function that logs "hello codenation" //
function sayHello() {
  console.log("Hello Codenation");
}

// higher order function that runs sayHello five times //
function runFiveTimes(func) {
  for (let i = 0; i < 5; i++) func();
}

// executing the previous function //
runFiveTimes(sayHello);

class ExampleClass {
  constructor() {
    this.exampleVariable = 0;
    this.exampleList = [];
  }

  setExampleVariable(exampleVariable) {
    this.exampleVariable = exampleVariable;
  }

  getExampleVariable() {
    return this.exampleVariable;
  }

  addExampleToList(exampleString) {
    this.exampleList.push(exampleString);
  }

  getExampleList() {
    return this.exampleList;
  }
}

function main() {
  const exampleObject = new ExampleClass();

  // This loop is an example of a code smell - long method
  for (let i = 0; i < 100; i++) {
    exampleObject.setExampleVariable(i);
    if (i % 2 === 0) {
      exampleObject.addExampleToList("even");
    } else {
      exampleObject.addExampleToList("odd");
    }
  }

  // This block is an example of a code smell - duplicate code
  for (let i = 0; i < exampleObject.getExampleVariable(); i++) {
    if (i % 2 === 0) {
      exampleObject.addExampleToList("even");
    } else {
      exampleObject.addExampleToList("odd");
    }
  }

  // This block is an example of a code smell - large function
  function largeFunction() {
    // This block is an example of a code smell - excessive nesting
    if (condition1) {
      if (condition2) {
        if (condition3) {
          // Do something
        }
      }
    }
    // This block is an example of a code smell - inconsistent indentation
      console.log("This line is not indented properly.");
  }

  // This block is an example of a code smell - unused variables
  const unusedVariable = "This variable is never used.";

  // This block is an example of a code smell - inconsistent naming
  function ExampleFunction() {
    // Do something
  }

  // This block is an example of a bug - division by zero
  const a = 5;
  const b = 0;
  const c = a / b;

  // This block is an example of a bug - unhandled exception
  try {
    nonExistentFunction();
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

main();

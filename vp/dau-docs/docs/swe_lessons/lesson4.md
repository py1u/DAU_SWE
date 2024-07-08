---
sidebar_label: 'Beginner JavaScript'
sidebar_position: 4
---

# DAU SWE Lesson 4

## Beginner JavaScript

### JavaScript Intro

JavaScript is a programming language commonly used in frontend development. With the creation of Node.js, a runtime environment for JavaScript, the language can now run on both client and server sides. This means JavaScript can be used for backend development too.

- It can be used for:
  - Adding interactive elements to webpages.
  - Creating dynamic content and live-changing interfaces.
  - Handling events and user inputs.
  - Manipulating the DOM (Document Object Model).
  - Communicating with servers using APIs.
  - Developing complex web applications with frameworks like React and Node.js.

### JavaScript Basics

#### Variables

Variables are used to store data that can be used and manipulated later in your program.

- **Declaring Variables**:
  There are three ways to declare a variable, but we focus on **let** and **const**.
  ```javascript
  var name = 'Peter'; 
  let age = 21;       
  const pi = 3.14;    
  ```
  The difference between `let` and `const` is that `const` does not allow you to change the assigned value. Use `const` whenever you are sure that the variable and value will not need to be changed.

#### Data Types

JavaScript has several data types:

- **String**: Represents textual data.
  ```javascript
  let greeting = "Hello, World!";
  ```
  You may use single quotes '' or double quotes "", but it is preferred to use double quotes.

- **Number**: Represents numerical values.
  ```javascript
  let score = 99.5;
  ```

- **Boolean**: Represents true or false.
  ```javascript
  let isActive = true;
  ```

- **Array**: Represents a list of values.
  ```javascript
  let fruits = ["Apple", "Banana", "Cherry"];
  ```

- **Object**: Represents a collection of key-value pairs.
  ```javascript
  let person = { name: "John", age: 25 };
  ```

JavaScript is an interpreted programming language, so we can explore how data types are implicitly interpreted in operations.

#### Operators

Operators are used to perform operations on variables and values.

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
  ```javascript
  let sum = 10 + 5;    // 15
  let product = 10 * 5; // 50
  ```

- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
  ```javascript
  let isEqual = 10 == "10";    // true
  let isStrictEqual = 10 === "10"; // false
  ```
  The difference between equality (`==`) and strict equality (`===`) is that strict equality checks both the value and the data type of the variable.

- **Logical Operators**: `&&`, `||`, `!`
  - **AND (`&&`)**: Both conditions must be true to return true.
  - **OR (`||`)**: Either condition being true will return true.
  - **NOT (`!`)**: Returns the opposite of the logical result.

  ```javascript
  let andOperation = true && false; // false
  let orOperation = true || false;  // true
  let notOperation = !false; // true
  ```

---

### Conditional Statements

Conditional statements are used to perform different actions based on different conditions. These are commonly known as:
- If
- If-Else
- If-ElseIf-Else 
- Switch

- **if...else**:
  ```javascript
  let age = 20;
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }
  ```

- **if...else if...else**:
  ```javascript
  let score = 85;
  if (score >= 90) {
    console.log("Grade: A");
  } else if (score >= 80) {
    console.log("Grade: B");
  } else if (score >= 70) {
    console.log("Grade: C");
  } else {
    console.log("Grade: F");
  }
  ```

- **switch**:
  ```javascript
  let day = "Monday";
  switch (day) {
    case "Monday":
      console.log("Start of the week!");
      break;
    case "Friday":
      console.log("End of the week!");
      break;
    default:
      console.log("Midweek days.");
  }
  ```

### Loops

Loops are used to repeat a block of code multiple times.

- **for loop**:
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

- **while loop**:
  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

- **do...while loop**:
  ```javascript
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```

---

### Functions

Functions are blocks of code designed to perform a particular task, executed when called.

- **Function Declaration**:
  ```javascript
  function greet(name) {
    return "Hello, " + name;
  }
  console.log(greet("John"));
  ```

- **Function Expression**:
  ```javascript
  const greet = function(name) {
    return "Hello, " + name;
  };
  console.log(greet("John"));
  ```

- **Arrow Function**:
  ```javascript
  const greet = (name) => {
    return "Hello, " + name;
  };
  console.log(greet("John"));
  ```

---

### Objects

Objects are collections of related data and functions (called properties and methods).

- **Creating an Object**:
  ```javascript
  let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function() {
      console.log("Car started");
    }
  };
  ```

- **Accessing Object Properties**:
  ```javascript
  console.log(car.make); // Toyota
  car.start();           // Car started
  ```

---

### DOM Manipulation

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

- **Selecting Elements**:
  ```javascript
  const element = document.getElementById("myElement");
  const elements = document.getElementsByClassName("myClass");
  ```

- **Changing Content**:
  ```javascript
  element.innerHTML = "New Content";
  ```

- **Changing Styles**:
  ```javascript
  element.style.color = "blue";
  ```

---

### Events

JavaScript can respond to user actions such as clicks, mouse movements, and keyboard inputs.

- **Adding Event Listeners**:
  ```javascript
  const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    alert("Button was clicked!");
  });
  ```

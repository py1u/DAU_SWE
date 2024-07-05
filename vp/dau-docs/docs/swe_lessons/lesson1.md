---
sidebar_label: 'Web Dev Intro'
sidebar_position: 1
---

# DAU SWE Lesson 1
## Introduction to Web Development

We are working on building a full-scale platform for DAU over the summer and expecting to launch before the start of the fall quarter 2024. To prepare everyone, I am leading a series of lessons that go from beginner to intermediate web development that everyone can follow and utilize to contribute to the development of the platform.

Web Development or Web Dev is the job of building, maintaining, and testing websites and web applications. This usually involves working on web design, development, and database management. 

### Three Components of a Webpage:
1. **HTML**
   - Hypertext Markup Language
   - Structures and defines content of our web page

2. **CSS**
   - Cascading Style Sheets
   - Styles and looks of our web page

3. **JavaScript**
   - Scripting or programming language
   - Adds interactivity to our web page

Unlike HTML and CSS, JavaScript (JS) is a programming language. It allows us to bring interactivity to our website such as:
- Event listening
- Communication between client and server
- Creating animations
- Building games
- Performing backend development

Building a strong foundation in JS early will make learning libraries and tools such as React,Nextjs much easier. Have a strong understanding of HTMl and CSS then javascript as someone new to web development!

We learn in this order because it's the simplest way to understand web development:
- The majority of time will be spent learning JavaScript 
- HTML and CSS can be picked up along the way

At the end of the day, users are focused on what is delivered and displayed from the frontend development but backend implementations such as page loading, media queries, and keeping the website up and running matter as well,

Websites can be simply split into two layers: the frontend and backend. In software engineering, we use this split to create a separation of concerns. This results in three popular roles: Frontend Developer, Backend Developer, and Full-Stack Developer. Lets go over what each layer is and the respective roles.

### The Frontend
- Everything a user sees and interacts with visually
- Made of client-side interactions and the user interface
- Comprised of HTML, CSS, and JS
- Should represent a design idea or vision that attracts users
- Easy navigation, diverse usability, and visual appeal
- Technologies include: React, Angular, Vue

#### The Frontend Developer
- Develops the user interface and user experience 
- Bridges the gap between the user (client) and backend (server)
- Tasks a frontend developer may work on:
  - Design and prototype UI
  - Creating style guides for brand identity
  - Translating static designs into a functional website
  - Responsive websites are everything
    - Optimally displayed for all screen types (mobile, tablet, desktop)
  - Developing websites that function on all browsers
  - Creating accessibility for all functions of a website
    - Text and speech translation
    - Keyboard-only navigation
    - Color combinations and contrasts
  - Site performance and load time
  - Webforms and user data and information collection

### The Backend
- Hidden processes of a website application
- Storing and securely manipulating user data
- Made of server-side rendering and sending data to client interface
- Helps the frontend function smoothly
- Optimization techniques
- Algorithms and data structures

#### The Backend Developer
- Develops server-side rendering and application logic
- Handles database communication between client and server
- Tasks a backend developer may work on:
  - Handling client-side requests for data
  - Creating server-side scripts that fetch data from the server
  - Manages database integrity and security
    - Setting up a proper database
    - Maintaining the database
    - Protecting and securing user information
  - Improves speed of client-server communication
  - Implementing APIs supporting CRUD operations
  - Improving logic behind web apps
  - Making the frontend function optimally

#### The Full Stack Developer
- Develops both frontend and backend technology for a web app
- Broad range of knowledge of both layers
- Usually a senior role but sometimes junior
- Less specific and specialized in frontend and backend
- Experienced full stack developers are very good with expertise in either role

## Covering Some Basics

We cover the basics of coding and getting started with building a simple webpage structure with **HTML**, styling using **CSS**, and learning the basics of **Javascript**

### HTML Intro
- Stands for **H**yper**T**ext **M**arkup **L**anguage
- Structures a webpage and its content
- HTML is made of **elements** that are used to wrap parts of content that structure and make up a HTML document
- Elements are made of tags and content
- Tags contain the content and specify the type of element
  - An opening tag `<>`
  - A closing tag `</>`
  - Content is in between tags and is what you want to display to a webpage

    `<tag> type content here</tag>`

  Example of a paragraph tag `<p></p>`
  ```html
  <p> Welcome to Design At UCR </p>
  ```
- Elements and tags are NOT the same
Attributes are usually used to configure and make elements behave a certain way
- attributes are make of a name value pair: `class="class name here"`
- stored in the opening tag

Here are two attributes that are used to style a element with css:
  - `class`: groups similar elements together that can be reused
  - `id`: uniquely defined element that exists usually on a single webpage
  - `style`: peform inline styling with CSS
  
  Example: giving a div a class name:
  ```html
  <div class= "about">here this is about </div>
  ```
  Style the div element in css:
  ```css
  .about {
    color:red;
  }
  ```
HTML Template to get started:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      
  </body>
</html>
```
- html elements are usually nested for structure and readability:
- nested elements should be indented 

```html
<div class="outer element">
  <p>Inner nested content</p>
</div>
```

#### Common HTML elements:

- Divider: `<div></div>` creates a container for content usually flowing and usually is changed with CSS
  ```html
    <div> this is a div </div>
  ```
- Span: `<span></span>` wrap content to be styled with CSS
  ```html
    <p> The font is <span style="bold">bold<span> here<p>
  ```
- Paragraph: `<p></p>` used for sentence or paragraph content
```html
  <p> some content here</div>
```
- Breakpoint: `<br>` creates a break between text or elements
```html
  <!-- breakpoint for content-->
  <p>line one<br>line two</div>

  <!-- breakpoint for element -->
  <div>heres some content</div><br>
```
- Head: `<head></head>` stores metadata and information that you dont want to be displayed, usually link tags

- Link: `<link>` stores links and references used in the head element

- Anchor: `<a>` turns text into a link
  ```html
    <a href="some url here">text you want to turn into a link</a>
  ```
- title: `<title></title>` used to changes the tab name

- headings: `<h1></h1>` used to specify titles or headings with 6 levels h1 -> h6
  ```html
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  ```

### CSS Intro
- Styles and makes a webpage look nice
- Most of the heavy frontend development is using CSS

Three ways to add CSS: **internal**, **external**, and **inline**

Inline writes CSS between the opening tag of an HTML element
  ```html
  <div class="box" style= "border-solid;"> gives this container a box</div>
  ```
**Internal** uses the `<style></style>` tag and css is written in there
  ```html 
  <style>
    box {
      border:solid;
    }
  </style>  
  ```
**External** stores CSS code in a separate folder
  ```css title="/src/public/style.css"
  .box {
    border:solid;
  }
  ```
#### CSS Selectors
Selectors are used to select elements from class, id, or the element name itself. Here are some of the most commonly used selectors:

- **Element Selector**: Selects all elements of a given type.
  ```css
  p {
    color: blue;
  }
  ```

- **Class Selector**: Selects all elements with a given class.
  ```css
  .my-class {
    color: green;
  }
  ```

- **ID Selector**: Selects an element with a specific ID.
  ```css
  #my-id {
    color: red;
  }
  ```

- **Attribute Selector**: Selects elements with a specific attribute.
  ```css
  [type="text"] {
    color: purple;
  }
  ```

- **Descendant Selector**: Selects all elements that are descendants of a specified element.
  ```css
  div p {
    color: orange;
  }
  ```

- **Pseudo-classes**: Selects elements based on their state.
  ```css
  a:hover {
    color: pink;
  }
  ```

#### Basic CSS Properties

#### Color and Background
- **color**: Sets the color of text.
  ```css
  p {
    color: blue;
  }
  ```

- **background-color**: Sets the background color of an element.
  ```css
  div {
    background-color: yellow;
  }
  ```

- **background-image**: Sets an image as the background.
  ```css
  body {
    background-image: url('background.jpg');
  }
  ```

#### Text
- **font-size**: Sets the size of the font.
  ```css
  h1 {
    font-size: 24px;
  }
  ```

- **font-family**: Sets the font of the text.
  ```css
  p {
    font-family: Arial, sans-serif;
  }
  ```

- **font-weight**: Sets the weight (or boldness) of the font.
  ```css
  strong {
    font-weight: bold;
  }
  ```

- **text-align**: Sets the horizontal alignment of text.
  ```css
  h1 {
    text-align: center;
  }
  ```

#### Box Model
The box model is what makes up the container that a element stores content in. 

- **width** and **height**: Sets the width and height of an element.
  ```css
  div {
    width: 100px;
    height: 100px;
  }
  ```

- **padding**: Sets the padding inside an element.
  ```css
  div {
    padding: 10px;
  }
  ```

- **margin**: Sets the margin outside an element.
  ```css
  div {
    margin: 20px;
  }
  ```

- **border**: Sets the border around an element.
  ```css
  div {
    border: 1px solid black;
  }
  ```

#### Layout
These include diplay, positioning, and layers. 

- **display**: Specifies the display behavior of an element.
Here we are using the flexbox property.

  ```css
  .container {
    display: flex;
    /* use flexbox properties below */
  }
  ```

- **position**: Specifies the type of positioning method used for an element.
  ```css
  .box {
    position: absolute;
    top: 50px;
    left: 50px;
  }
  ```
  - others include relative, fixed, sticky, static
  - also have top, right, bottom, left for final locations of elements

Examples:

  ```css 
    position: static;
    position: relative;
    position: absolute;
    position: fixed;
    position: sticky;

    top: 0px;
    right: 0px;
    left: 0px;
    right: 0px;
  ```

- **z-index**: Sets the stack order of an element.
  - this changes how elements and css are layered upon eachother
  - the larger the number, the more elements it will overlap
  ```css
  .overlay {
    z-index: 10;
  }
  ```

#### Flexbox
- **flex-direction**: Defines the direction of the flex items.

The element that contains the `display: flex;` property is the parent called "flex contianer". The nested elements are called the childern or "flex items"
  ```css
  .container {
    display:flex;
    flex-direction: row;
  }
  ```
- These next flexbox properties are used almost always to center elements
- **justify-content**: Aligns flex items along the main axis.
  ```css
  .container {
    justify-content: center;
  }
  ```

- **align-items**: Aligns flex items along the cross axis.
  ```css
  .container {
    align-items: center;
  }
  ```

#### Atomic CSS
Atomic CSS is a methodology where each class corresponds to a single CSS property, allowing for highly reusable and maintainable styles. Examples include frameworks like Tailwind CSS.

- **Example of Atomic CSS with Tailwind**
  ```html
  <div class="text-center text-blue-500 bg-yellow-200 p-4 m-2">
    Atomic CSS Example
  </div>
  ```

#### Benefits of Atomic CSS
- **Efficiency**: Reduced CSS file size due to reusable classes.
- **Consistency**: Consistent styling across the application.
- **Maintainability**: Easier to manage and update styles.

Atomic CSS is important to understand because it is similar to Tailwind CSS, a CSS Library used to rapidly develop website CSS much faster.


### JavaScript Intro
JavaScript is a programming language commonly used in frontend development. Beacause of the creation of Nodejs, a run time environment for Javascript, the language has adapted into being able to run on both client and server side. This means that javscript can be used to perform backend development too.
- It can be used for:
  - Adding interactive elements to webpages
  - Creating dynamic content and live changing interfaces
  - Handling events and user inputs
  - Manipulating the DOM (Document Object Model)
  - Communicating with servers using APIs
  - Developing complex web applications with frameworks like React and Node.js

#### JavaScript Basics

#### Variables
Variables are used to store data that can be used and manipulated later in your program.

- **Declaring Variables**:
There are three ways to declare a variable but we focus on **let** and **const**
  ```javascript
  var name = 'Peter'; 
  let age = 21;       
  const pi = 3.14;    
  ```
  The difference between `let` and `const` is that const does not allow you change the value that is assigned. Use `const` whenever you are sure that the variable and value will not need to be changed. 

#### Data Types
JavaScript has several data types

- **String**: Represents textual data.
  ```javascript
  let greeting = "Hello, World!";
  ```
You may use single quotes '' or double quotes "" but prefered to use double quotes
Sometimes you need to display a string with quotes so you could use double and single quotes inside.


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
Javascript is a interpreted programming language so we can explore how datatypes are implicitly interpreted in operations.

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
The difference between equality and strict equality is that strict will check the value and the datatype of the variable.

- **Logical Operators**: `&&`, `||`, `!`
There are three types of logical operators. 
- **AND** states that both conditions must be true to return true
- **OR** states that either condition is true and the statement will return true
- **NOT** means the opposite of the logical result

  ```javascript
  let andOperation = true && false; // false
  let orOperation = true || false;  // true
  let trueStatement != false // if not false, then trueStatement is true
  ```

---

Lets look at Control Structures. We primarily use conditional statements and loops.

#### Conditional Statements
Conditional statements are used to perform different actions based on different conditions.

- **if...else**:
  ```javascript
  let age = 20;
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
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

## Functions
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

## Objects
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

## DOM Manipulation
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

## Events
JavaScript can respond to user actions such as clicks, mouse movements, and keyboard inputs.

- **Adding Event Listeners**:
  ```javascript
  const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    alert("Button was clicked!");
  });
  ```


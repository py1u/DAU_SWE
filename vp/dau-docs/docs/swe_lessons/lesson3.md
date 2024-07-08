---
sidebar_label: 'Learning CSS'
sidebar_position: 3
---

# DAU SWE Lesson 3

## Learning CSS

### What is CSS
- Stands for Cascading Sytle Sheets
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


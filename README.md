### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   ans:
   #. getElementById
   This will get the element given a specific ID. This will always get only one element.

   #. getElementsByClassName
   It selects all elements with the same class name.
   It can return multiple elements with the same class name.
   It returns an HTMLCollection.

   #. querySelector
   This allows you to select elements using any CSS selector id, class, tag, attribute, etc. its finds the first HTML element in a document that matches a specified CSS selector.

   #. querySelectorAll
   It can also select all elements using any CSS selector.
   It returns all matching elements.
   and it returns a NodeList

2. How do you **create and insert a new element into the DOM**?

   ans:
     <body>
     <div id="container"></div>

     <script>
     // 1. First you need to create a new element
     const newElement = document.createElement("p");
   
     // 2.NewElement can be given some text or style.
     newElement.textContent = "new paragraph";
     newElement.style.color= "red";
   
     // 3. You need to select where to add the DOM.
     const container = document.getElementById("container");
     container.appendChild(newElement);
     </script>
     </body>

3. What is **Event Bubbling** and how does it work?

   ans: When an event occurs on an element, the event is first triggered on that element. Then the event gradually propagates to its parent element, grandparent element, and so on, and so on, to its larger parent elements. This is called Event Bubbling.

   When you click on a button.
   The click event will first work on that button.
   Then step by step the click event will go to the parent element of that button such as div, body, html. This is how it works.

4. What is **Event Delegation** in JavaScript? Why is it useful?

   ans: Event Delegation means working by placing a listener on their parent element, rather than placing separate event listeners on smaller elements.

   If a new element is added to the DOM later, there is no need to set a separate event. The event listener on the parent element will also catch the event for that new element.
   It doesn't require setting up separate events for every small element, so it takes less time and uses less memory.
   Writing the code this way makes it nice and clean.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

   ans: preventDefault()---: Stops the default behavior of the event.
   stopPropagation() ----: Stops event bubbling or capturing, meaning the event does not propagate to the parent element.

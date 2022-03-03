# Introduction to Javascript
JavaScript is a cross-platform, object-oriented and a scripting language used to make webpages interactive.</br>`Example: webpages having complex animations, clickable buttons, popup menus, etc.`
### Cross-Platform:
--> In computing, cross-platform software also called as a platform-independent software simply means it is designed to work on several computing platforms.
### Object-oriented:
--> It works through the creation, utilization and manipulation of reusable objects to perform a specific task, process or objective.
### Scripting language:
A high-level programming language that is interpreted (translated on the fly) rather than compiled ahead of time. JavaScript is not a programming language in a strict sense. Instead, it is a scripting language because it uses the browser to do the dirty work.</br>
--> If you command an image to be replaced by another image, JavaScript tells the browser to go do it.

**Most of the times you are told to learn JS right after HTML and CSS, WHY IS THAT?**

# Role of JS in relevance with HTML and CSS
(Following uses are just given to clear the concept and role of JS so it might include some advanced code snippets.)
### 1. Writing into an HTML element i.e changing its content
--> The flow can go from HTML to JS whenever an event occurs, for example when a user clicks on a button.</br>
--> We can define a certain action to be performed when user clicks on the button.
#### Example:
```
<p id="para">This is a paragraph</p>
<button onclick="textChange()">Change The Text</button>
<script>
  function textChange(){
    document.getElementById('para').innerHTML='Text Changed';
  } 
</script> 
```
**The example above finds an HTML element (with id="para"), and changes the element content(innerHTML) to "Text Changed".**

--> To access HTML elements JavaScript uses `document.getElementById('idOfElement')` method.</br>
--> Script tag can be added within HTML's **body tag**, **head tag** or you can create **a separate file and link it with HTML file**.</br>
--> To link an external JS file use the following syntax inside the head tag:</br></br>
  `<script src="JSfileName.js"></script>`

### 2. Changing HTML element's style/attribute (CSS)
```
<p id="para">This is a paragraph</p>
<button onclick="changeColor()">Change The Text Color</button>
<script>
  function changeColor(){
    document.getElementById('para').style.color='red'
  } 
</script> 
```
**The example above finds an HTML element (with id="para"), and changes the element color.**
### 3. Writing into an empty HTML element. 
--> You do not even have to create any function for this.
```
<p id="emptyElement"></p>
    <script>
        // without onclick function:
        document.getElementById('emptyElement').innerHTML='Text Inserted to an empty element using JS';
    </script>
```
**The example above finds an HTML element (with id="emptyElement"), and fills it with content provided by user.**</br>

These are just a few examples, JS has uncountable uses in designing webpages and making them user friendly.  

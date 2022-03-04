//  possibilities to display output using JS

// 1. Writing into an html element i.e changing its content (use .innerHTML='content')
function change(){
    var h1 = document.getElementById("heading");
    h1.innerHTML="Welcome to JavaScript Tutorial";
}


// 2. Writing into html webpage (use document.write() method)
function docWrite(){
    document.write('Document write method applied');
}

// 3. using window.alert() or simply alert()
function sayHello(){
    alert('Hello there dear user!');
}

// 4. Using console
console.log("Hello")
// It is used for debugging purpose

// 5. print
print();
// it prints contents of current window/webpage
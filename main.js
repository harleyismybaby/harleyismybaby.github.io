var MenuLogo = document.getElementById("menu-container");
var MenuNav = document.getElementById("menu");
var Nav = document.getElementById("navigator");

MenuLogo.addEventListener("click", listen);
MenuLogo.addEventListener("click", open);

function listen(e) {
    e.preventDefault();
    if (MenuNav.classList.contains("closed" && "open")) {
        MenuNav.classList.add("roll");
        MenuNav.classList.remove("open");
        MenuNav.classList.remove("closed");
        setTimeout(RolltoClose, 500);
        function RolltoClose() {
            MenuNav.classList.add("closed");
            MenuNav.classList.remove("roll");            
        }
    }
    else if(MenuNav.classList.contains("closed")) {
        MenuNav.classList.remove("closed");
        MenuNav.classList.add("open");
    } else if(MenuNav.classList.contains("open")){
        MenuNav.classList.add("roll");
        MenuNav.classList.remove("open");
        setTimeout(RolltoClose, 500);
        function RolltoClose() {
            MenuNav.classList.add("closed");
            MenuNav.classList.remove("roll");            
        }
    } else if(MenuNav.classList.contains("roll")){
        MenuNav.classList.add("open");
        MenuNav.classList.remove("roll");       
    
    } 
}
function open() {
    // e.preventDefault();
    if(Nav.classList.contains("closed")) {
        Nav.classList.remove("closed");
        Nav.classList.add("open");
}   else {
    Nav.classList.remove("open");
    Nav.classList.add("closed");
}
}
var todo = [];
var todoElement = [];

for (let i = 0; i < 24; i++) {
    todo.push(localStorage.getItem(`tobedo${i}`));
    let regex = /true/
    todo[i] = regex.test(todo[i]);
    todoElement.push(document.getElementById(`todo${i}`));
    todoElement[i].checked = todo[i];
}
    console.log(todo);
    console.log(todoElement);
    
    setInterval(function(){
        for (let i = 0; i < 24; i++) {
            localStorage.setItem(`tobedo${i}`, todoElement[i].checked)
        }
    }, 1000);

// for (let i = 0; i < 24; i++) {
//     todo.push(document.getElementById(`todo${i}`));
//     localStorage.getItem(`tobedo${i}`);
// }

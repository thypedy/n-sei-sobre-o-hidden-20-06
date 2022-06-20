let colors = ['blue', 'yellow', 'green', 'pink', 'grey', 'cyan', 'white', 'greenyellow', 'chocolate', 'purple', 'red', 'saddlebrown', 'hotpink', 'midnightblue', 'orchid', 'plum'];
let btn = document.getElementById("btn-change");

btn.addEventListener('click', function(){
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let body = document.querySelector('body');
    body.style.background = randomColor;

    if(colors == midnightblue){
        
    }
})
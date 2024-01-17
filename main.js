var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 1;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional

        mouseEvent = "mousedown";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        
        
        ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        
 
        ctx.stroke();
        }

        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;

    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseup";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

var lastPositionOfTouchX, lastPositionOfTouchY;

width=screen.width;
newWidth=screen.width - 70;

height=screen.height;
newHeight=screen.height - 300;


if(width < 992)
{
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
    console.log("my_touchstart");

    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;

         
    lastPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;
    
    ctx.moveTo(lastPositionOfX, lastPositionOfY);
    ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
    
    ctx.stroke();

    lastPositionOfTouchX = currentPositionOfTouchX; 
    lastPositionOfTouchY = currentPositionOfTouchY;
   
}


function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

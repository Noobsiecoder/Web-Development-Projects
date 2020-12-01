var ctx = document.getElementById("myCanvas").getContext("2d");

ctx.fillStyle = "#f00";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // x, y, width, height

ctx.fillStyle = "#000";
ctx.fillText("Hello World!", 40, 32) // text coord (x, y)
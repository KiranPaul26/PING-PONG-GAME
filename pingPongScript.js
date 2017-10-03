//CONSTRUCTOR
function pingPongGame() {
    var canvas = document.getElementById("canvas");
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext("2d");
    
    this.context.fillStyle = "white";
    this.context.strokeStyle = "white";
    
}
    
//pingPongGame HAS TWO MAIN FUNCTIONS update() AND draw()
pingPongGame.prototype.draw = function()
{
    //DASHED LINES
    this.context.beginPath()
    this.context.setLineDash([2,3]);
    this.context.moveTo(275,20);
    this.context.lineTo(275,230)
    this.context.closePath();
    this.context.stroke();
    
    //CLEAR BOTH RECTANGLE
    this.context.fillRect(20, 20, this.width - 40, this.height - 235);
    this.context.fillRect(20, 215, this.width - 40, this.height - 235);
    
};


pingPongGame.prototype.update = function()
{
    if (this.paused)
        return;
};    

//INITIALISE OUR GAME INSTANCE
var game = new pingPongGame();

//MainLoop() FUNCTION WHICH CALLS THE GAME UPDATE AND DRAW FUNCTIONS
function MainLoop(){
    game.update();
    game.draw();
    //CALLS THE MainLoop() FUNCTION CONTINUOUSELY AFTER SPECIFIED NUMBER OF MILISECONDS (1000ms = 1 second)
    setTimeout(MainLoop, 33.3333);
    
}

//START GAME EXECUTION
MainLoop();

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_x=35;
greencar_y=300;
function add() {
	background_img=new Image();
	background_img.onload=uploadBackground();
	background_img.src=background_image;
	greencar_img=new Image();
	greencar_img.onload=uploadBackground();
	greencar_img.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_img,greencar_x,greencar_y,greencar_width,greencar_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=80){
		greencar_y=greencar_y-10
		console.log("up arrow pressed"+greencar_x+","+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencar_y<=320){
		greencar_y=greencar_y+10
		console.log("down arrow pressed"+greencar_x+","+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(greencar_x>=0){
		greencar_x=greencar_x-10
		console.log("left arrow pressed"+greencar_x+","+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencar_x<=650){
		greencar_x=greencar_x+10
		console.log("right arrow pressed"+greencar_x+","+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function success(){
	if((greencar_x>=355&&greencar_x<=385&&greencar_y>=90&&greencar_y<=160)||(greencar_x>=595&&greencar_x<=625&&greencar_y>=90&&greencar_y<=160)){
document.getElementById("h1_1").innerHTML="Success!!!";
	}
	else if((((greencar_x<=315&&greencar_y<=250)||(greencar_x>=425&&greencar_x>=555&&greencar_y<=250)||(greencar_y=70)||(greencar_y=330)))){
		document.getElementById("h1_1").innerHTML="You Crashed";
	}
	else{
		document.getElementById("h1_1").innerHTML="Try Again";
	}
}
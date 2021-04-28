var canvas = new fabric.Canvas('myCanvas');

x_coord = 10;
y_coord = 10;

character_width = 30;
character_height = 30;

var player_object = "";
var block_object = "";

function player_update(){
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img){
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToWidth(140);
    player_object.set({top:y_coord, left:x_coord});
    canvas.add(player_object);
    });
}

function new_image(get_image){
    console.log("hello");
    fabric.Image.fromURL(get_image, function(Img){
    block_object = Img;
    
    block_object.scaleToWidth(character_width);
    block_object.scaleToWidth(character_height);
    block_object.set({top:y_coord, left:x_coord});
    canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    if(e.shiftKey == true && keyPressed == "80"){
        character_width = character_width + 10;
        character_height = character_height + 10;
        document.getElementById("current_width").innerHTML = character_width;
        document.getElementById("current_height").innerHTML = character_height;
    }

    if(e.shiftKey && keyPressed == "77"){
        character_width = character_width - 10;
        character_height = character_height - 10;
        document.getElementById("current_width").innerHTML = character_width;
        document.getElementById("current_height").innerHTML = character_height;
    }

    if(keyPressed == "70"){
        new_image("https://i.postimg.cc/hGnyTPLB/ironman-face.png");
    }

    if(keyPressed == "66"){
        new_image("https://i.postimg.cc/FscwL6M0/spiderman-body.png");
    }

    if(keyPressed == "76"){
        new_image("https://i.postimg.cc/KzF6GDqt/hulk-legs.png");
    }

    if(keyPressed == "82"){
        new_image("https://i.postimg.cc/8s8BGtwS/thor-right-hand.png");
    }

    if(keyPressed == "72"){
        new_image("https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png");
    }

    if(keyPressed == "38"){
        up();
    }

    if(keyPressed == "40"){
        down();
    }

    if(keyPressed == "37"){
        left();
    }

    if(keyPressed == "39"){
        right();
    }

}

function up()
{
	if(y_coord >=0)
	{
		y_coord = y_coord - character_height;
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(y_coord <=500)
	{
		y_coord = y_coord + character_height;
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(x_coord >0)
	{
		x_coord = x_coord - character_width;
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(x_coord <=850)
	{
		x_coord = x_coord + character_width;
		canvas.remove(player_object);
		player_update();
	}
}

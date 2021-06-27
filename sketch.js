var database;




function setup(){
    database = firebase.database()
    createCanvas(500,500);
   
    form = new Form()
    //we are displaying in function setup since it is displaying only once
    form.display();
}

function draw(){
    background("white");
    
    drawSprites();
}


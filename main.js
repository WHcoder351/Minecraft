canvas = new fabric.Canvas('myCanvas');
bW = 30;
bH = 30;
Px = 10;
Py = 10;
pO = "";
BiO = "";
function player_up(){
    fabric.Image.fromURL("player.png",function(Img){
        pO = Img;
        pO.scaleToWidth(105);
        pO.scaleToHeight(100);
        pO.set({
            top:Py, left:Px
        }); 
        canvas.add(pO);
     });
} 
function newImg(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        BiO = Img;
        BiO.scaleToWidth(bW);
        BiO.scaleToHeight(bH);
        BiO.set({
            top:Py, 
            left:Px

    }) ;
    canvas.add(BiO);
});
}
 window.addEventListener("keydown", key);
    function key(e)
 {
    keyp = e.keyCode;
    console.log(keyp);
    if (keyp == "38") {
    up();
    console.log("up");
    }
    if (keyp == "40") {
        down();
        console.log("down");
        }
        if (keyp == "39") {
            right();
            console.log("right");
            }
            if (keyp == "37") {
                left();
                console.log("right");
                }
                if (keyp == "84") {
                    newImg("trunk.jpg");
                    console.log("t");
                    }
                    if (keyp == "68") {
                        newImg("dark_green.png");
                        console.log("d");
                        }
                        if (keyp == "76") {
                            newImg("light_green.png");
                            console.log("l");
                            }
                            if (keyp == "71") {
                                newImg("ground.png");
                                console.log("g");
                                }
                                if (keyp == "87") {
                                    newImg("wall.jpg");
                                    console.log("w");
                                    }
                                    if (keyp == "89") {
                                        newImg("yellow_wall.png");
                                        console.log("y");
                                        }
                                        if (keyp == "82") {
                                            newImg("roof.jpg");
                                            console.log("r");
                                            }
                                            if (keyp == "67") {
                                                newImg("cloud.jpg");
                                                console.log("c");
                                                }
                                                if (keyp == "85") {
                                                    newImg("unique.png");
                                                    console.log("u");
                                                    }
                                                if (e.shiftKey == true&&keyp =="77") {
                                                    bW = bW-10;
                                                     bH = bH-10;
                                                     document.getElementById("cW").innerHTML=bW;
                                                     document.getElementById("cH").innerHTML=bH;
                                                    console.log("shift&m");
                                                    }
                                                    
                                                if (e.shiftKey == true&&keyp =="80") {
                                                    bW = bW+10;
                                                     bH = bH+10;
                                                     document.getElementById("cW").innerHTML=bW;
                                                     document.getElementById("cH").innerHTML=bH;
                                                    console.log("shift&P");
                                                    } 
                                                }

                                                function up(){
                                                    if (Py >=0) {
                                                        Py=Py-bH;
                                                        console.log("when up is pressed, x="+Px+"y="+Py+"block height = "+bH+"block width ="+bW);
                                                       canvas.remove(pO);
                                                       player_up();
                                                    }
                                                }

                                                    function down(){
                                                        if (Py <=550) {
                                                            Py=Py+bH;
                                                            console.log("when down is pressed, x="+Px+"y="+Py+"block height = "+bH+"block width ="+bW);
                                                           canvas.remove(pO);
                                                           player_up();
                                                        }
                                                    }
                                                        function left(){
                                                            if (Px >=0) {
                                                                Px=Px-bW;
                                                                console.log("when left is pressed, x="+Px+"y="+Py+"block height = "+bH+"block width ="+bW);
                                                               canvas.remove(pO);
                                                               player_up();
                                                            }
                                                        }
                                                            function right(){
                                                                if (Py <=550) {
                                                                    Px=Px+bW;
                                                                    console.log("when right is pressed, x="+Px+"y="+Py+"block height = "+bH+"block width ="+bW);
                                                                   canvas.remove(pO);
                                                                   player_up();
                                                                }
                                                            }
                                                        
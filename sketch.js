var bgimg, bg;
var carrotseedimg, potatoseedimg
var gameState = "wait"

var storybutton, mutebutton, musicbutton, nextbutton, playbutton
var ground, groundimg,rand
var infobutton,ingredients
var tomatoimg,eggimg,basilimg,roccaleavesimg,pizzasliceimg,cheeseimg,peproniimg,capsicumimg,mushroomimg,jalapenoimg,olivesimg,cornimg,onionimg
var chef,chefidleright,chefidleleft,chefgetright,chefgetleft

function preload() {
    bgimg = loadImage("assets/splash.gif");
    groundimg = loadImage("assets/level1bg.PNG")
    tomatoimg=loadImage("assets/ingredients/tomato.png")
    eggimg=loadImage("assets/ingredients/eggs.png")
    basilimg=loadImage("assets/ingredients/basil.png")
    roccaleavesimg=loadImage("assets/ingredients/roccaleaves.png")
    pizzasliceimg=loadImage("assets/ingredients/pizzaslice.png")
    cheeseimg=loadImage("assets/ingredients/cheese.png")
    peproniimg=loadImage("assets/ingredients/peproni.png")
    capsicumimg=loadImage("assets/ingredients/capsicum.png")
    mushroomimg=loadImage("assets/ingredients/mushroom.png")
    jalapenoimg=loadImage("assets/ingredients/jalapeno.png")
    olivesimg=loadImage("assets/ingredients/olives.png")
    cornimg=loadImage("assets/ingredients/corn.png")
    onionimg=loadImage("assets/ingredients/onion.png")

chefidleright=loadImage("assets/ingredients/chefidleright.gif")
chefidleleft=loadImage("assets/ingredients/chefidleright.gif")
chefgetright=loadImage("assets/ingredients/chefgetright.gif")
chefgetleft=loadImage("assets/ingredients/chefgetleft.gif")




}


function setup() {
    createCanvas(windowWidth, windowHeight)
    playbutton = createImg("assets/play.png")
    playbutton.position(width - 160, height / 2)

    musicbutton = createImg("assets/music.png")
    musicbutton.position(width - 160, height / 2 + 130)

    mutebutton = createImg("assets/mute.png")
    mutebutton.position(width - 170, height / 2 + 145)
    mutebutton.hide()

    nextbutton = createImg("assets/rightarrow.gif")
    nextbutton.position(width - 100, height - 150)
    nextbutton.size(100, 100)
    nextbutton.hide()

    infobutton = createImg("assets/ingredients2.gif")
    infobutton.position(0, 0)
    infobutton.size(width, height)
    infobutton.hide()

    ground = createSprite(width / 2, height / 2)
    ground.addImage(groundimg)
    ground.visible = false
    ground.scale = 1.55
    // groundimg.resize(width*1.5,height)
    ground.velocityX = -3
    ground.x = ground.width / 2

// character
chef=createSprite(150,height-180)
chef.addImage("idleleft",chefidleleft)
chef.addImage("idleright",chefidleright)
chef.addImage("chefgetleft",chefgetleft)
chef.addImage("chefgetright",chefgetright)
chef.visible=false
chef.scale=1.75





}

function draw() {
    if (gameState === "wait") {
        background(bgimg)
        nextbutton.hide()
    }

    playbutton.mousePressed(() => {
        playbutton.hide()
        infobutton.show()
          
    })


    if (gameState === "level1") {
        ground.visible = true
        mutebutton.hide()
        musicbutton.hide()
        if (ground.x < 0) {
            ground.x = ground.width / 2
        }
        spawnIngredients()
        console.log("ingredients")
        chef.visible=true


    }
    infobutton.mousePressed(() => {
        gameState = "level1"
        playbutton.hide()
        infobutton.hide()
        
    })



    musicbutton.mousePressed(() => {
        musicbutton.hide()
        mutebutton.show()
    })

    mutebutton.mousePressed(() => {
        musicbutton.show()
        mutebutton.hide()
    })

    drawSprites()

}


function spawnIngredients(){
    if(frameCount%80 ==0){
        var randX=Math.round(random(50,width-50))
ingredients=createSprite(randX,0)
ingredients.velocityY=4
ingredients.scale=0.5


rand=Math.round(random(1,13))
switch(rand){
    case 1: ingredients.addImage(onionimg)
    break;

    case 2: ingredients.addImage(olivesimg)
    break;

    case 3: ingredients.addImage(mushroomimg)
    break;

    case 4: ingredients.addImage(roccaleavesimg)
    break;

    case 5: ingredients.addImage(cheeseimg)
    break;

    case 6: ingredients.addImage(cornimg)
    break;

    case 7: ingredients.addImage(capsicumimg)
    break;

    case 8: ingredients.addImage(pizzasliceimg)
    break;

    case 9: ingredients.addImage(peproniimg)
    break;

    case 10: ingredients.addImage(basilimg)
    break;

    case 11: ingredients.addImage(jalapenoimg)
    break;

    case 12: ingredients.addImage(eggimg)
    break;

    case 13: ingredients.addImage(tomatoimg)
    break;

    default: break;


}


    }
}
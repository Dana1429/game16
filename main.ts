controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . 4 4 2 4 2 4 4 4 4 4 2 4 . 
        . . . 4 2 2 4 4 4 4 2 4 4 4 4 . 
        . . . 4 4 4 4 2 4 4 4 4 2 4 . . 
        . . . . 4 2 4 4 . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
})
let enemyShip: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 6 6 6 4 4 
    . . . . . . . . . 6 6 8 6 4 4 . 
    . . . . . . . 8 6 6 8 6 2 2 . . 
    . . . . . 6 6 6 8 6 6 2 . . . . 
    . . . 6 6 6 8 6 8 8 2 . . . . . 
    . 6 6 6 8 6 6 6 6 6 2 . . . . . 
    . 8 6 6 8 6 8 8 8 8 2 2 . . . . 
    . . . . . 6 6 6 6 8 6 8 . . . . 
    . . . . . . . . . 6 8 6 2 . . . 
    . . . . . . . . . . . 6 4 4 4 4 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    enemyShip = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . 2 2 2 5 5 2 2 2 . . . 
        . . . . . 2 5 5 2 2 5 5 2 . . . 
        . . . . 2 2 5 2 5 5 2 5 2 . . . 
        . . . . 2 2 5 2 5 2 2 5 2 . . . 
        . . . . 2 2 5 2 2 5 5 2 2 . . . 
        . . . . . 2 2 5 5 2 2 2 . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemyShip.x = scene.screenWidth()
    enemyShip.vx = -20
    enemyShip.y = randint(10, scene.screenHeight() - 10)
})

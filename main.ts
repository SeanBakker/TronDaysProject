namespace SpriteKind {
    export const coin = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playerGoose.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f d d . 
        . . . . e . . . . . . f . . . . 
        . . . e . e . . e e f . . . . . 
        . . e . . . e e 1 1 e e . . . . 
        . . . e . . e 1 1 1 1 e . . . . 
        . . . . . e 1 1 1 e e . . . . . 
        . . . . . e 1 1 e . e . . . . . 
        . . . . f e e e . . . e . . . . 
        . . . f . . . f . . . . e . . . 
        . . f . . . f . . e . e . . . . 
        . f . . . f . . . . e . . . . . 
        . . f e . . f e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    playerGoose.y += -15
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    coin.destroy(effects.rings, 100)
})
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.setLife(0)
})
let largePillarDown: Sprite = null
let smallPillarDown: Sprite = null
let largePillarUp: Sprite = null
let smallPillarUp: Sprite = null
let countA = 0
let coin: Sprite = null
let playerGoose: Sprite = null
playerGoose = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . f d d 
    . . . . . e . . . . . . f . . . 
    . . . . e . . . e e e f . . . . 
    . . . e . . . e 1 1 e e . . . . 
    . . . . e . e 1 1 1 1 e . . . . 
    . . . . . e 1 1 1 1 e . . . . . 
    . . . . e 1 1 1 1 e . . . e . . 
    . . . . . e 1 1 e . e . e . . . 
    . . . . . f e e . . . e . . . . 
    . . . . f . . f . . . . . . . . 
    . . . f . . f . . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
playerGoose.setFlag(SpriteFlag.StayInScreen, true)
let gravity = 12
info.setLife(1)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999955555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999555555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99995555555555555999999999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9995555555555555559999999999999999999999999999999999999999999999f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999555555555555555999999999999999999999999999999999999999999999f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999555555555555555999999999999f99999999f999999999999999f9999999f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9995555555555555559999999999999f999999f99999999999999999f99999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99955555555555555599999999999999f9999f9999999999999999999f9999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99955555555555555599999999999999f9999f9999999999999999999f9999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999555555555555555999999999999999ff9f99999999999f999999999ffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99995555555555555999999999999999999f999999f99999f9999999999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999555555555555599999999999999999999999999f999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999955555555555999999999999999999999999999f999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999995555555999999999999999999999999999999fff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999f999999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999f9999f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999f99f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999f9f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999ff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999996699999969999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999996669999969999999999996999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999966666999966999999999966699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999666666699966999999999966699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999696666999666999999999666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999966666999666699999999666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999666666699966999999999966669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999966669669966699999996666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999666666999666999999999666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999996696666699666699999996666696699999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999966666666666699999966666669999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999666666666666666666699666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999699999999996666666666666666666669966666699999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999999999999999999
    9999999999996669999999999966666666666666666666666999999999999999999999999999999999999999999999999999999999999999999999999999999999999996999966999999999999999999
    9999999999996699999999996666666666666666666666666699999999999999999999999999999999996999999999999999999999999999999999999999999999999996699966999999999999999999
    9999999999966699999999966666666666666666666666666669999999999999999999999999999999996699999999999999999999999999999999999999999999999996699666999999999999999999
    9999999999666669999996666666666666666666666666666666999999999999999999999999999999996699999999999999999999999999999999999999999999699966669666669999999999999999
    9999999999966699999666666666666666666666666666666666699999999999999999999999999999966669999999999999999999999999999999999999999996669966669966999999999999999999
    9999999999996669996666666666666666666666666666666666669999999999999999999999999999966669999699999999999999999999999999999999999996669996699666666999999999999999
    9999999999666699666666666666666666666666666666666666666999999999999999999999669999996699999699999999999999999999999999999999999966669666666666999999999699999999
    9999999999966666666666666666666666666666666666666666666699999999999999999996669999666666999669999999999999999999999999999999999999666966669996699999999699999999
    9999999999996666666666666666666666666666666666666666666669999999999999999966669999966669999669999999999999999999999999999999999996669966666996999999996666999999
    9999999999996666666666666666666666666666666666666666666666999999999999999999666999966666996669999999999999699999999999999999999666666666666696999999999699999999
    9999999999966666666666666666666666666666666666666666666666999999999999999966666696666666696666999999999996699999999999999999999966666666666666666999966669999999
    9999999999666666666666666666666666666666666666666666666666699999999999999666666966666666669669999999999996669999999999999699999666669966666666666669996669999999
    9999999966666666666666666666666666666666666666666666666666669999999999999996666669966669999666999999999966666999999999999699996666666666666666666666996666699999
    9999999666666666666666666666666666666666666666666666666666666999999999999966666699666666996669999999999666666699999999999669999966666666666666666666666666999999
    9999996666666666666666666666666666666666666666666666666666666699999999999666666666666666666666669999999696666999999999999669999666666666666666666666666669999999
    9999966666666666666666666666666666666666666666666666666666666669999999999999666666666666666666666669999966666999999999996669999666666666666666666666666669999999
    9996666666666666666666666666666666666666666666666666666666666666999999999996666666666666666666666666699666666699999999999699996666666666666666666666666666999999
    9966666666666666666666666666666666666666666666666666666666666666699999999666666666666666666666666666666966669699999999996666996666666666666666666666666666669999
    9666666666666666666666666666666666666666666666666666666666666666666999996666666666666666666666666666666666666999999999999669966666666666666666666666666666666699
    6666666666666666666666666666666666666666666666666666666666666666666699966666666666666666666666666666666666666699999999966666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999996666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999966666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
scene.setBackgroundColor(1)
info.startCountdown(60)
game.onUpdate(function () {
    playerGoose.setVelocity(0, gravity)
})
game.onUpdateInterval(5000, function () {
    coin = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.coin)
    coin.setVelocity(-20, 0)
    coin.setPosition(160, randint(20, 100))
})
game.onUpdateInterval(1500, function () {
    countA = randint(1, 20)
    if (countA <= 5) {
        smallPillarUp = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ..77777777777777777777..
            ..77777777777777777777..
            ..77777777777777777777..
            ..77777777777777777777..
            ...777777777777777777...
            ...777777777777777777...
            ....7777777777777777....
            ....7777777777777777....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            .....55777777777777.....
            .....75555777777777.....
            .....77775555577777.....
            .....77777777555557.....
            .....77777777777755.....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            .....55557777777777.....
            .....77755557777777.....
            .....77777755557777.....
            .....77777777755555.....
            .....77777777777777.....
            `, SpriteKind.Enemy)
        smallPillarUp.setVelocity(-20, 0)
        smallPillarUp.setPosition(160, 100)
    } else if (countA <= 10) {
        largePillarUp = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ..77777777777777777777..
            ..77777777777777777777..
            ..77777777777777777777..
            ..77777777777777777777..
            ...777777777777777777...
            ...777777777777777777...
            ....7777777777777777....
            ....7777777777777777....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            .....55777777777777.....
            .....75555777777777.....
            .....77775555577777.....
            .....77777777555557.....
            .....77777777777755.....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            .....55557777777777.....
            .....77755557777777.....
            .....77777755557777.....
            .....77777777755555.....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            .....55577777777777.....
            .....77555777777777.....
            .....77777555777777.....
            .....77777775555777.....
            .....77777777775557.....
            .....77777777777755.....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            .....55777777777777.....
            .....75557777777777.....
            .....77755557777777.....
            .....77777755555777.....
            .....77777777775555.....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            .....77777777777777.....
            `, SpriteKind.Enemy)
        largePillarUp.setVelocity(-20, 0)
        largePillarUp.setPosition(160, 90)
    } else if (countA <= 15) {
        smallPillarDown = sprites.create(img`
            ......7777777777777.....
            ......7777777777777.....
            ......7777777777775.....
            ......7777777775555.....
            ......7777755555777.....
            ......7555557777777.....
            ......5577777777777.....
            ......7777777777777.....
            ......7777777777777.....
            ......7777777777777.....
            ......7777777777777.....
            ......7777777777555.....
            ......7777755555577.....
            ......7775557777777.....
            ......5555777777777.....
            ......7777777777777.....
            ......7777777777777.....
            .....777777777777777....
            .....777777777777777....
            ....77777777777777777...
            ....77777777777777777...
            ....77777777777777777...
            ...7777777777777777777..
            ...7777777777777777777..
            ...7777777777777777777..
            ...7777777777777777777..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        smallPillarDown.setVelocity(-20, 0)
        smallPillarDown.setPosition(160, 20)
    } else {
        largePillarDown = sprites.create(img`
            .....7777777777777......
            .....7777777777777......
            .....7777777777777......
            .....7777777777777......
            .....7777777775555......
            .....7777755555777......
            .....7775557777777......
            .....7555777777777......
            .....5577777777777......
            .....7777777777777......
            .....7777777777777......
            .....7777777777777......
            .....7777777777555......
            .....7777775555577......
            .....7775555777777......
            .....7555777777777......
            .....5577777777777......
            .....7777777777777......
            .....7777777777777......
            .....7777777777777......
            .....7777777777777......
            .....7777777777777......
            .....7777777777775......
            .....7777777775555......
            .....7777755555777......
            .....7555557777777......
            .....5577777777777......
            .....7777777777777......
            .....7777777777777......
            .....7777777777777......
            .....7777777777777......
            .....7777777777555......
            .....7777755555577......
            .....7775557777777......
            .....5555777777777......
            .....7777777777777......
            .....7777777777777......
            ....777777777777777.....
            ....777777777777777.....
            ...77777777777777777....
            ...77777777777777777....
            ...77777777777777777....
            ..7777777777777777777...
            ..7777777777777777777...
            ..7777777777777777777...
            ..7777777777777777777...
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        largePillarDown.setVelocity(-20, 0)
        largePillarDown.setPosition(160, 25)
    }
})
game.onUpdateInterval(500, function () {
    playerGoose.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . f d d 
        . . . . . e . . . . . . f . . . 
        . . . . e . . . e e e f . . . . 
        . . . e . . . e 1 1 e e . . . . 
        . . . . e . e 1 1 1 1 e . . . . 
        . . . . . e 1 1 1 1 e . . . . . 
        . . . . e 1 1 1 1 e . . . e . . 
        . . . . . e 1 1 e . e . e . . . 
        . . . . . f e e . . . e . . . . 
        . . . . f . . f . . . . . . . . 
        . . . f . . f . . . . . . . . . 
        . . . . f . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})

export function makePlayer(k) {
    return k.make([
        k.sprite("kriby"),
        k.area({ shape: new k.Rect(k.vec2(0, 1.5), 8, 5) }),
        k.anchor("center"),
        k.body({ jumpForce: 600 }),
        k.scale(SCALE_FACTOR),
        {
            isDead: false,
            speed: 600,
            keyControllers: [],
            setControls() {
                const jumpLogic = () => {
                    k.play("jump"),
                    this.jump();
                };
            
                this.imputControllers.push(k.onKeyPress("space", jumpLogic));
                this.inputControllers.push(k.onClick(jumpLogic));
                this.imputControllers.push(k.onGamepadButtonPress("south", jumpLogic))
            },
            disableControls() {
              this.inputControllers.forEach(keyControllers => 
                keyController.cancel())  
            }
        },
    ])
}
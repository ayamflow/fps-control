
fps-control
===

### A naive FPS throttler implementation


### Installation :package:

`npm i fps-control -S`

### Usage & example :floppy_disk:

```
    import FPSControl from 'fps-control'

    let fps = new FPSControl(30);

    function update() {
        if (!fps.check()) return;

        // Drawn at 30FPS
        ctx.drawImage(sprite.img, sprite.x, sprite.y);
    }
```

* `new FPSControl(framerate)`
Returns a new instance sync to a given `framerate` value

* `instance.set(framerate)`
Sets `framerate` as the target framerate. Some examples values are 60 (no throttling), 30 (1/2 throttling).

* `instance.check()`
Returns `true` if the current frame matches the target framerate, `false` otherwise.

### License :pencil:
MIT.
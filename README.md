# scrollback

This simple module allows you to hook up a callback for when the user scrolls the page to a particular Y position, either going up or down.

## How to use it

### Import as an ES6 Module...
```
<script type="module">
  import scrollback from './scrollback.mjs'
</script>
```

### ...or as a simple script (ES5)
```
<script src="./scrollback.js"></script>
```

### Create a request object
```
const request = {
  callback: callbackReference,
  position: positionInPixelsToTriggerCallback,
  direction: ifTheCallbackIsTriggerGoingUpDownOrBoth, // Optional. Default "down"
  oneShot: isItCallableOnlyOnce // Optional. Default false
}
```
### Attach request with register method
```
scrollback.register( request )
```

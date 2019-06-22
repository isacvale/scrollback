let lastY = window.scrollY
let registered = []

// Returns false if request is invalid, otherwise fill in defaults
function register( request ){
  if( !request.callback || !request.position )
    return false
  registered.push({
    direction: "down",
    oneShot: false,
    ...request
  })
}

function onYChange( e ){
  let limits = {curr: window.scrollY, last: lastY}
  lastY = window.scrollY

  let direction = limits.curr<limits.last ? "up" : "down"

  registered.filter( request =>
      [direction, "both"].includes( request.direction ) &&
      isBetween( request.position, limits.last, limits.curr )
  ).forEach( request => {
    setTimeout( request.callback, 0 )
    if( request.oneShot )
      registered = registered.filter( req => req != request )
  })
}

function isBetween( num, a, b ){
  return num > Math.min(a,b) && num <= Math.max(a,b)
}

window.addEventListener( 'scroll', onYChange )

export default {
  registered,
  register
}

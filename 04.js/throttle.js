const throttle = function(func,delay){
  let timer = null
  let startTime = Date.now()
  return function(){
    let curTime = Date.now()
    let remaining = delay - (curTime - startTime)
    let context = this
    let args = arguments
    clearTimeout(timer)
    if(remaining <= 0){
      func.apply(context, args)
      startTime = Date.now()
    }else{
      timer = setTimeout(func,remaining)
    }
  }
}

function handle(){
  console.log(Math.random())
}

window.addEventListener('scroll',throttle(handle,1000))
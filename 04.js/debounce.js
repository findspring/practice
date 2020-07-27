function debouce (fn,wait){
  let timeout = null
  return function(){
    if(timeout)
    clearTimeout(timeout)
    timeout = setTimeout(fn,wait)
  }
}

//处理函数
function handle(){
  console.log(Math.random())
}

//滚动事件
window.addEventListener('scroll',debouce(handle,1000))
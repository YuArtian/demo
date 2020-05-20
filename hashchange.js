window.onhashchange = function(e){
  console.log('onhashchange',e)
}
window.onpopstate = function(e){
  console.log('onpopstate',e)
}

window.location.hash = '/aaa'
setTimeout(() => {
  window.location.hash = '/aaa'
})

// window.history.pushState({}, null, '/aaa')
// reject
/* const p1 = new Promise((reslove, reject) => {
  if(1) {
    reject();
  }
});
p1.catch((e) => console.log('p1 error')); */

window.addEventListener('error', function(e){
  console.log('addEventListener error')
  console.log('e',e)
})
window.onerror=function(message, source, lineno, colno, error) {
  console.log('onerror',message, source, lineno, colno, error)
}
function main() {
  try {
    setTimeout(() => {
      throw new Error('async error')
    }, 1000)
  } catch(e) {
    console.log(e, 'err')
    console.log('continue...')
  }
}

main();

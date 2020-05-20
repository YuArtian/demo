let after = function(times,task){
  return function(){
    if(times-- == 1){
      return task.apply(this,arguments);
    }
  }
}
let fn = after(3,function(){
  console.log(3);
});

fn();
fn();
fn();


//被观察者
class Subject {
  constructor(name){
    this.name = name
    this.observers = []

  }
}

//观察者
class Observer {
  constructor(){

  }
}

let sub = new Subject('sub')
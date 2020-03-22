const EventEmmiter = require("events");

const emmiter = new EventEmmiter();

// emmiter.on("anything", data => {
//   console.log("on ...", data);
// });

// emmiter.emit("anything", { a: 2 });

// setTimeout(() => {
//   emmiter.emit("anything", { a: 5 });
// }, 2000);

class Dispatcher extends EventEmmiter {
  subscribe(eventName, cb) {
    console.log("Subscribe");

    this.on(eventName, cb);
  }

  dispatch(eventName, data) {
    console.log("Dispatch");

    this.emit(eventName, data);
  }
}

const dis = new Dispatcher();

dis.subscribe("disP", data => {
  console.log("ON: disp", data);
});

dis.dispatch("disP", { disp: { aa: 33 } });

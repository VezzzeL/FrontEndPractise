class Phone {
  call(user) {
    console.log("Calling: " + user);
  }
}
class Smartphone extends Phone {
  videoCall(user) {
    console.log("Facetiming: " + user);
  }
}

let device = new Smartphone();
device.call("Mom");
device.videoCall("Dad");

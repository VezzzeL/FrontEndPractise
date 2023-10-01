class Meeting {
  constructor(date, time, name) {
    this.date = date;
    this.time = time;
    this.name = name;
  }
  sendNotification() {
    console.log(
      "This is a reminder that your meeting with " +
        this.name +
        " is on " +
        this.date +
        " at " +
        this.time +
        "."
    );
  }
}

class VideoCall extends Meeting {
  constructor(date, time, name, link) {
    super(date, time, name);
    this.link = link;
  }
  sendNotificationLink() {
    super.sendNotification();
    console.log("This is the link to your video meeting: " + this.link);
  }
  test() {
    console.log("Testing audio and video...success!");
  }
}
let firstMeeting = new Meeting("30.05", "12:00", "Breakfast");
firstMeeting.sendNotification();
let firstVideo = new VideoCall("30.05", "12:00", "Breakfast", "https://godot");
firstVideo.sendNotificationLink();
firstVideo.test();

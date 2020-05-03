export default class Attack {
  constructor(ip, port, time, method, startTime, id) {
    this.id = id;
    this.ip = ip;
    this.port = port;
    this.time = time;
    this.timeLeft = time;
    this.method = method;
    this.startTime = startTime;
    this.running = true;
    setInterval(() => {
      this.timeLeft--;
      if(this.timeLeft < 0) {
        this.running = false;
      }
    }, 1000)
  }
}

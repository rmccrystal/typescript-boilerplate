const uuid = require("uuid/v1");
const Attack = require("./Attack").default;

export default class AttackService {
  static async startAttack(ip, port, time, method) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve({
            success: true,
            attack: new Attack(ip, port, time, method, Date.now(), uuid()),
            output: `${method} attack started to ${ip}:${port} for ${time} seconds`
          });
        } else {
          resolve({
            success: false,
            errors: ["Error 1", "error 2"]
          })
        }
      }, 1000);
    });
  }

  static async getRunningAttacks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const getRandomInt = function(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        let runningAttacks = [];
        for (let i = 0; i < Math.random() * 5; i++) {
          let newAttack = new Attack(
            "testip",
            getRandomInt(5, 100),
            getRandomInt(5, 50),
            "TEST_ATTACK",
            Date.now(),
            uuid()
          );
          runningAttacks.push(newAttack);
        }
        console.log(runningAttacks);
        resolve(runningAttacks);
      }, 1000);
    });
  }

  static async stopAttack(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          success: true
        });
      }, 1000);
    });
  }

  static async getAttackNodesOnline() {
    const getRandomInt = function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getRandomInt(0, 10));
      }, 1000);
    })
  }
}

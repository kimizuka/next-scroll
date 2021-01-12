export type Easing = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';

export function easeIn (x: number) {
  return 1 - Math.cos(x * Math.PI / 2);
}

export function easeOut(x: number) {
  return Math.sin(Math.PI * x / 2);
}

export function easeInOut(x: number) {
  return (1 - Math.cos(Math.PI * x)) / 2;
}

class Animation {
  public isStop: boolean = false;
  private startValue: number;
  private targetValue: number;
  private duration: number;
  private easing: Easing = 'linear';
  private step: (val: number) => void = function(val: number) {};
  private complete: (val: number) => void = function(val: number) {};
  private promise: Promise<number>;
  private progress:number = 0;

  constructor (param: {
    startValue: number;
    targetValue: number;
    duration: number;
    easing?: Easing;
    step?: (val: number) => void;
    complete?: (val: number) => void;
  }) {
    this.isStop = false;
    this.startValue = param.startValue;
    this.targetValue = param.targetValue;
    this.duration = param.duration;
    this.easing = param.easing || this.easing;
    this.step = param.step || this.step;
    this.complete = param.complete || this.complete;
    this.promise = new Promise((resolve, reject) => {
      const diff = this.targetValue - this.startValue;
      let startTime = 0;

      tick.call(this, startTime);

      function tick(delta) {
        if (!startTime) {
          startTime = delta;
        }

        if (!process.browser) {
          resolve(1);
          this.callback(1);
          return;
        }

        this.progress = Math.min((delta - startTime) / this.duration, 1);

        switch (param.easing) {
          case 'easeIn':
            this.progress = easeIn(this.progress);
            break;
          case 'easeOut':
            this.progress = easeOut(this.progress);
            break;
          case 'easeInOut':
            this.progress = easeInOut(this.progress);
            break;
        }

        this.step(this.progress);

        if (this.isStop) {
          resolve(this.progress);
          return;
        }

        if (this.progress < 1) {
          requestAnimationFrame((delta: number) => {
            tick.call(this, delta);
          });
        } else {
          resolve(1);
        }
      }
    });
    this.promise.then(this.complete);
  }

  public stop(): Animation {
    this.isStop = true;

    return this;
  }
};

export default Animation;
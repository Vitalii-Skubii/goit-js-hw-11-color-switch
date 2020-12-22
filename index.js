const refs = {
  bodyDom: document.querySelector('body'),
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]')
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const colorChanger = {
  intervalId: null,
  isChanging: false,
  start() {
    if (this.isChanging){
      return;
    }
    this.isChanging = true;
    this.intervalId= setInterval(() => {
      ;
       refs.bodyDom.style.backgroundColor=colors[randomIntegerFromInterval(0, colors.length - 1)];
      
    }, 1000);
  },
  stop() {
    this.isChanging = false;
    clearInterval(this.intervalId);
    this.intervalId= null;
  }
};

const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

refs.startButton.addEventListener('click', colorChanger.start.bind(colorChanger));
refs.stopButton.addEventListener('click', colorChanger.stop.bind(colorChanger));




// const bodyBgcolor = colors[randomIntegerFromInterval(0, colors.length - 1) ];

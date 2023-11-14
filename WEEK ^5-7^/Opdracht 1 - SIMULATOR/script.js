let img_0 = document.getElementById("traffic-light_0");
let img_1 = document.getElementById("traffic-light_1");
let img_2 = document.getElementById("traffic-light_2");
let img_3 = document.getElementById("traffic-light_3");
let images = ["img/trafficLightRed.png", "img/trafficLightYellow.png", "img/trafficLightGreen.png"];
let shut_off = "img/shutOff2.png";
let durations = [8, 10, 2];
let currentImageIndex = 0;
let unfinshed_bussness = false;
let knipperenDurations = [0.5, 0.5, 0.5];
let originalDurations = durations;




function changeImage() {
    img_0.src = images[currentImageIndex];
    img_1.src = images[currentImageIndex];
    img_2.src = images[currentImageIndex];
    img_3.src = images[currentImageIndex];

    if (currentImageIndex === 0) {
        img_0.style.backgroundColor = 'red';
        img_1.style.backgroundColor = 'red';
        img_2.style.backgroundColor = 'green';
        img_3.style.backgroundColor = 'green';
    } else if (currentImageIndex === 1) {
        img_0.style.backgroundColor = 'yellow';
        img_1.style.backgroundColor = 'yellow';
        img_2.style.backgroundColor = 'yellow';
        img_3.style.backgroundColor = 'yellow';
    } else {
        img_0.style.backgroundColor = 'green';
        img_1.style.backgroundColor = 'green';
        img_2.style.backgroundColor = 'red';
        img_3.style.backgroundColor = 'red';
    }

    currentImageIndex = (currentImageIndex + 1) % images.length;

    timeoutId = setTimeout(changeImage, durations[currentImageIndex] * 100);
}

let finshed_bussness = false;

document.getElementById("aan").addEventListener("click", function () {
    unfinshed_bussness = true;
    finshed_bussness = unfinshed_bussness;
    currentImageIndex = 0;
    durations = originalDurations;

    changeImage();

    if (finshed_bussness === true) {
        document.getElementById("kinpperen").addEventListener("click", function () {
            currentImageIndex = 0;
            durations = knipperenDurations;
            clearTimeout(timeoutId);
            changeImage();
        });
    }
});

document.getElementById("uit").addEventListener("click", function () {
    unfinshed_bussness = false;
    finshed_bussness = false;
    clearTimeout(timeoutId);
    img_0.src = shut_off;
    img_1.src = shut_off;
    img_2.src = shut_off;
    img_3.src = shut_off;
});

changeImage();

const car2 = {
    element: document.getElementById("car_2"),
    position: 0,
    speed: 2,
    animationId: null,

    moveCarDown: function () {
        this.position += this.speed;
        this.element.style.top = this.position + "px";

        if (this.position < window.innerHeight) {
            this.animationId = requestAnimationFrame(this.moveCarDown.bind(this));
        } else {
            this.resetCar();
            this.moveCarDown();
        }
    },

    stopCar: function () {
        cancelAnimationFrame(this.animationId);
    },

    resetCar: function () {
        this.position = -this.element.clientHeight;
        this.element.style.top = this.position + "px";
    },
};

const car1 = {
    element: document.getElementById("car_1"),
    position: window.innerHeight - document.getElementById("car_1").clientHeight,
    speed: 2,
    animationId: null,

    moveCarUp: function () {
        this.position -= this.speed;
        this.element.style.top = this.position + "px";

        if (this.position > -this.element.clientHeight) {
            this.animationId = requestAnimationFrame(this.moveCarUp.bind(this));
        } else {
            this.resetCar();
            this.moveCarUp();
        }
    },

    stopCar: function () {
        cancelAnimationFrame(this.animationId);
    },

    resetCar: function () {
        this.position = window.innerHeight - this.element.clientHeight;
        this.element.style.top = this.position + "px";
    },
};


const car4 = {
    element: document.getElementById("car_4"),
    position: 0,
    speed: 2,
    animationId: null,

    moveCarRight: function () {
        this.position += this.speed;
        this.element.style.left = this.position + "px";

        if (this.position < window.innerWidth) {
            this.animationId = requestAnimationFrame(this.moveCarRight.bind(this));
        } else {
            this.resetCar();
            this.moveCarRight();
        }
    },

    stopCar: function () {
        cancelAnimationFrame(this.animationId);
    },

    resetCar: function () {
        this.position = -this.element.clientWidth;
        this.element.style.right = this.position + "px";
    },
};

const car3 = {
    element: document.getElementById("car_3"),
    position: window.innerWidth - document.getElementById("car_3").clientWidth,
    speed: 2,
    animationId: null,

    moveCarLeft: function () {
        this.position -= this.speed;
        this.element.style.left = this.position + "px";

        if (this.position > -this.element.clientWidth) {
            this.animationId = requestAnimationFrame(this.moveCarLeft.bind(this));
        } else {
            this.resetCar();
            this.moveCarLeft();
        }
    },

    stopCar: function () {
        cancelAnimationFrame(this.animationId);
    },

    resetCar: function () {
        this.position = window.innerWidth + this.element.clientWidth;
        this.element.style.left = this.position + "px";
    },
};

function startCar() {

    car1.moveCarUp();
    car2.moveCarDown();
    car3.moveCarLeft();
    car4.moveCarRight();

}

function loopCarAnimation() {
    for (let n = 0; n < 7; n++) {
        startCar();
    }
}

loopCarAnimation();

const cars = [car1, car2, car3, car4];

const buttons = ['start', 'stop', 'reset', 'aan', 'knipperen', 'uit'];

buttons.forEach((btn) => {
    const button = document.getElementById(btn);
    button.addEventListener('click', () => {
        if (btn === 'start') {
            cars.forEach((car) => car.speed = 2);
        } else if (btn === 'stop') {
            cars.forEach((car) => car.speed = 0);
        } else if (btn === 'reset') {
            cars.forEach((car) => car.resetCar());
        }
    });
});
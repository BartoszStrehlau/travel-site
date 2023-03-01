import '../styles/styles.css'

// eslint-disable-next-line no-undef
if (module.hot) {
    // eslint-disable-next-line no-undef
    module.hot.accept()
}

// Lesson example code below this line  

function Person(fullName, favColor) {
    this.name = fullName;
    this.color = favColor;
    this.greet = function() {
        console.log('Oh Hello! My name is '+this.name+' and my favourite color is '+this.color+'.');
    }
}

let john = new Person('John Doe', 'blue');
john.greet();
let jane = new Person('Jone Smith', 'green');
jane.greet();

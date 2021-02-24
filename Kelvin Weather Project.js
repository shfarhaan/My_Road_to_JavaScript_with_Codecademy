/* It’s time to build fluency in JavaScript fundamentals. In this next Pro Project, 
we’re going to practice variables and printing to the console in JavaScript so you 
can hone your skills and feel confident taking them to the real world. Why? You’ve 
got to master the basics. Get comfortable with these fundamentals. What’s next? 
A mad scientist, temperature conversion, more JavaScript. You got this! */

/* Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered 
weather prediction. Recently, Kelvin began publishing his weather forecasts on his website.
However there’s a problem: All of his forecasts describe the temperature in Kelvin.
With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit. */

// Inititalizing Kelvin Scale
const kelvin = 293;

// Inititalizing Celsius Scale
const celsius = kelvin - 273;

// Inititalizing Fahrenheit Scale
let fahrenheit = celsius * (9 / 5) + 32;

// To round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// Inititalizing Kelvin Scale
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);

// Set up canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width = 700;
const height = canvas.height = 700;
const canvas2 = document.getElementById('myChart');
const ctx2 = canvas2.getContext("2d");
canvas2.width = 700;
canvas2.height = 700;


// // Draw circle
ctx.beginPath();
ctx.arc(width / 2, height / 2, width / 2, 0, 2 * Math.PI);
ctx.strokeStyle = "aqua";
ctx.stroke();

// // Initialize counters
let number = 1000
let inside = 0;
let total = 0;
const xValues = Array.from(Array(number).keys());
var time = 0

// // Start animation loop
var interval = setInterval(animate,0);


function animate() {
  time += 1;
  if(time >= (number)){ // one minute
    clearInterval(interval);
  }
  // Generate new point
  const x = Math.random() * width;
  const y = Math.random() * height;
  
  // Check if point is inside circle
  if (Math.sqrt(Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2)) <= width / 2) {
    ctx.fillStyle = "aqua";
    inside++;
  } else {
    ctx.fillStyle = "aliceblue";
  }
  
  // Draw point on canvas
  ctx.fillRect(x, y, 5, 5);
  total++;
  
  // Update estimation
  const PI=Math.PI;
  const pi = 4 * inside / total;
  chart.data.datasets[0].data.push(pi);
  chart.data.datasets[1].data.push(Math.PI);
  chart.update('none')
  
  // Display result
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Estimated value of π: ${pi.toFixed(6)}`;
  const realElement = document.getElementById("r");
  realElement.textContent = `          π: ${PI.toFixed(6)}`;
  
}

var chart = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: xValues,
    datasets: [
      {
        label: 'Estimate Pi',
        pointRadius: 1,
        data: [],
        borderColor: "rgba(0,255,255,0.5)",
      },
      {
        label: 'Exact Pi',
        pointRadius: 1,
        data: [],
        borderColor: "rgb(240,248,255)",
      },
  ]
  },
  options: {
    scales: {
      y: {
        min: 2,max:4
      },
    }
  }
});


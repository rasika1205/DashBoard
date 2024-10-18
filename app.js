const xValues = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Nov','Dec'];
                        
new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{ 
            data: [220,200,180,140,200,300,340,350,300,250,200,150],
            borderColor: "red",
            fill: false
        }, { 
            data: [230,330,380,300,200,260,300,340,300,250,200,180],
            borderColor: "green",
            fill: false
        }, { 
            data: [320,300,280,240,200,280,320,330,290,240,190,150],
            borderColor: "blue",
            fill: false
        }]
            },
        options: {
            legend: {display: false}
}
});

var xValues1 = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var yValues1 = [14,18,5,15,12,16,20];
var yValues2 = [12,10,22,5,11,12,12]

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues1,
    datasets: [{
      label: "Online Sales",
      backgroundColor: "lightgreen",
      borderColor: "darkgreen",
      borderWidth: 1,
      data: yValues1
    },
    {
        label: "Offline Sales",
        backgroundColor: "lightblue",
        borderColor: "blue",
        borderWidth: 1,
        data: yValues2
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      
    }
  }
});
let ctx = document.getElementById('myChart3').getContext('2d');
let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1st-6th',
                         '7th-12th', 
                         '13th-18th', 
                         '19th-24th',
                         '25th-30th'],
                datasets: [{
                    label: 'Last Month',
                    data: [5,6,3,4,6,6.5,7.5],
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: 'start'
                },{
                    label: 'This Month',
                    data: [8,7,7.5,6,7.8,5,9],
                    backgroundColor: 'aqua',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: 'start'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Page Views'
                        }
                    }
                },
                layout: {
                    padding: {
                        left: 20,
                        right: 20,
                        top: 20,
                        bottom: 20
                    }
                }
            }
        });

const barChartData2 = {
    labels: [
        "Jan","Feb","Mar","Apr","May","Jun","July"],
    datasets: [
        {
            label: "Reality Sales",
            backgroundColor: "green",
            borderColor: "red",
            borderWidth: 1,
            data: [8000,7000,6000,8000,10000,10000,10000]
        },
        {
            label: "Target Sales",
            backgroundColor: "yellow",
            borderColor: "blue",
            borderWidth: 1,
            data: [9000,8000,10000,9000,12000,12000,12000]
        }
            ]
          };
          
          var chartOptions = {
            responsive: true,
            legend: {
              position: "top"
            },
            title: {
              display: true
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
          
          window.onload = function() {
            var ctx = document.getElementById("myChart4").getContext("2d");
            window.myBar = new Chart(ctx, {
              type: "bar",
              data: barChartData2,
              options: chartOptions
            });
          };

          var xValues3 = ["Home Decor Range","Disney Princess bag","Bathroom Esentials","Apple Smartphones"];
          var yValues = [45,29,18,35];
          var barColors = [
            "blue",
            "green",
            "purple",
            "orange"
          ];
         
          new Chart("myChart5", {
            type: "pie",
            data: {
              labels: xValues3,
              datasets: [{
                backgroundColor: barColors,
                data: yValues
              }]
            },
            options: {
              title: {
                display: true,
                text: "Popularity"
              }
            }
          });

          const xyValues = [
            {y:500, x:1},
            {y:200, x:2},
            {y:300, x:3},
            {y:600, x:4},
            {y:150, x:5},
            {y:400, x:6},
            {y:250, x:7},
            {y:300, x:8},
          ];
          
          new Chart("myChart6", {
            type: "scatter",
            data: {
              datasets: [{
                pointRadius: 4,
                pointBackgroundColor: "rgb(0,0,255)",
                data: xyValues
              }]
            },
            options: {
              legend: {display: false},
              scales: {
                xAxes: [{ticks: {min: 1, max:8}}],
                yAxes: [{ticks: {min: 0, max:500}}],
              }
            }
          });   
let inp1=document.querySelector("#searchinp");
let inp2=document.querySelector("#addinp");
let btn1=document.querySelector("#search");
let btn2=document.querySelector("#add");
let p=document.querySelector("#searchPrint");
let ol=document.querySelector("ol");
let lis=document.querySelectorAll("#listItems");
btn1.addEventListener("click", function(){
  for (li of lis){
    if (inp1.value==li.innerText){
      p.innerText=`The product ${inp1.value} is available `;
      inp1.value='';
      break;
    }
    else{
      p.innerText="The product is not available";
    }
  }
});
btn2.addEventListener("click",function(){
  let item=document.createElement("li");
  item.innerText=inp2.value;
  ol.appendChild(item);
  inp2.value='';
});
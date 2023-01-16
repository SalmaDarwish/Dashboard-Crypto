// const chart = document.getElementById('Chart');

// new Chart(chart, {
//   type: 'line',
//   data: {
//     labels: ["","","","",""],
//     datasets: [{
//       label:"",
//       data: [0, 10, 6, 15, 20],
//       borderWidth: 0.5,
//       borderDashOffset:5,
//       borderDash:[2],
//       borderColor:"white"
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }

//     }
//   }
// });
//   Chart One  ------ 

var options = {
    chart: {
        height: 180,
        type: 'line',
        toolbar: {
            tools: {
                download: false,
                selection: false,
                zoom: false,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true | '<img src="/static/icons/reset.png" width="20">',


            }
        }


    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [0, 10, 6, 15, 20]
    }],
    xaxis: {
        axisBorder: {
            show: false,
        },
        labels: {
            show: false,
        },

    },
    yaxis: [{
        axisBorder: {
            show: false,
        },
        labels: {
            show: false,
        },

    }],
    stroke: {
        dashArray: 3,
        curve: "straight",
        width: 2,
        colors: "white"
    },
    grid: {
        show: false,
    },


}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
//   Chart TWO  ------ 

var options2 = {
    chart: {
        height: 180,
        type: 'line',
        toolbar: {
            tools: {
                download: false,
                selection: false,
                zoom: false,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true | '<img src="/static/icons/reset.png" width="20">',


            }
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [0, 10, 6, 15, 20]
    }],
    xaxis: {
        axisBorder: {
            show: true,
        },
        labels: {
            show: false,

        },

    },
    yaxis: [{
        axisBorder: {
            show: false,
        },
        labels: {
            show: false,
        },
        opposite: false,


    }],
    stroke: {
        dashArray: 3,
        curve: "straight",
        width: 2,
        colors: "white"
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },


}

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);

chart2.render();


//   Chart THREE  ------ 
var options3 = {
    series: [60],
    chart: {
        type: 'donut',

    }, plotOptions: {
        pie: {
            customScale: 0.8,
            donut: {
                size: '80%'
            },


        },

    },
    legend: {
        show: false
    },


    responsive: [{
        breakpoint: 1420,
        options: {
            chart: {
                width: 160
            },


        }
    }],



}

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);

chart3.render();

//   Chart Four  ------ 


var options4 = {
    chart: {
        id: 'realtime',

        height: 230,
        type: 'line',
        toolbar: {
            tools: {
                download: false,
                selection: false,
                zoom: false,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true | '<img src="/static/icons/reset.png" width="20">',


            }
        }


    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [0, 10, 6, 15, 20, 5, 50, 30]
    }, { data: [10, 50, 20, 30, 60, 40, 15, 3] },
    { data: [30, 20, 10, 50, 70, 40, 10, 30] }
    ],
    xaxis: {
        axisBorder: {
            show: false,
        },
        labels: {
            show: true,
        },

    },
    yaxis: [{
        axisBorder: {
            show: false,
        },
        labels: {
            show: true,
        },

    }],
    stroke: {
        curve: "straight",
        width: 2,

    },
    grid: {
        show: true,
        borderColor: 'grey',
        padding: {
            top: 0
        }

    },
    legend: {
        show: false
    },


}

var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);

chart4.render();

//   Chart five  ------ 

options5 = {
    chart: {
        type: 'bar',
        dataLabels: {
            enabled: false
        },
        height: 180,

    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "50%"
        },

    },
    series: [{
        data: [{
            x: '',
            y: 50
        }, {
            x: '',
            y: 18
        }, {
            x: '',
            y: 13
        },
        {
            x: '',
            y: 30
        },
        {
            x: '',
            y: 30
        }]
    }],
    grid: {
        show: false,
        padding: {
            top: 10,
            right: 0,
            bottom: 0,
        },
    },
    fill: {
        colors: ["white"],


    },
    dataLabels: {
        enabled: false
    },
    yaxis:{
        labels:{
            show:false
        }
    }

}
var chart5 = new ApexCharts(document.querySelector("#chart5"), options5);

chart5.render();

// Chart Six -----

var options6 = {
    chart: {
        height: 80,
        type: 'line',
       
            toolbar: {
                show:false,
            
            }
        
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [0, 10, 6, 15, 20]
    }],
    xaxis: {
        axisBorder: {
            show: true,
        },
        labels: {
            show: false,

        },

    },
    yaxis: [{
        axisBorder: {
            show: false,
        },
        labels: {
            show: false,
        },
        opposite: false,


    }],
    stroke: {
        dashArray: 3,
        curve: "straight",
        width: 2,
        colors: "white"
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },


}

var chart6 = new ApexCharts(document.querySelector("#chart6"), options6);

chart6.render();

// Chart Seven ----- 
var options7 = {
    chart: {
        height: 80,
        type: 'line',
        toolbar: {
            show:false,
        
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        data: [0, 10, 6, 15, 20]
    }],
    xaxis: {
        axisBorder: {
            show: true,
        },
        labels: {
            show: false,

        },

    },
    yaxis: [{
        axisBorder: {
            show: false,
        },
        labels: {
            show: false,
        },
        opposite: false,


    }],
    stroke: {
        dashArray: 3,
        curve: "straight",
        width: 2,
        colors: "white"
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },


}

var chart7 = new ApexCharts(document.querySelector("#chart7"), options7);

chart7.render();



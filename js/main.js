// global variable
const windowHeight = window.innerHeight; 

// add class active
let links = document.querySelectorAll( 'aside li a' );
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    for (var j = 0; j < links.length; j++) {
      if (links[j] !== this) {
        links[j].classList.remove('active');
      }
    }
    this.classList.add( 'active' );
    localStorage.setItem( 'active', this.name );
  });
}

// Save class active in localStorage
window.addEventListener('load', function() {
  const myClass = localStorage.getItem('active');
  if (myClass) {
    links.forEach(l => l.classList.remove('myClass'));
    const link = document.querySelector(`a[name="${myClass}"]`);
    if (link) {
      link.classList.add('active');
    }
  }
} );

// button to hidden and show aside 
let aside = document.querySelector( "aside" );
let toggle = document.querySelector( ".toggle" );
let ico1 = document.querySelector( ".ico1" );
let ico2 = document.querySelector( ".ico2" );
ico1.addEventListener( 'click', function () { 
  aside.classList.add( "show" );
  ico1.classList.add( "hidden" );
  ico2.classList.add( "show-toggle-2" );
})
ico2.addEventListener( 'click', function (){
  aside.classList.remove( "show" );
  ico2.classList.remove( "show-toggle-2" );
  ico1.classList.remove( "hidden" );
} );
aside.addEventListener( 'click', function () { 
  aside.classList.add( "show" );
  ico1.classList.add( "hidden" );
  ico2.classList.add( "show-toggle-2" );
} )
// hidden aside when clicked on any place in page
window.addEventListener('mouseup',function(event){
  if(event.target != toggle && event.target.parentNode != toggle){
    aside.classList.remove( "show" );
    ico2.classList.remove( "show-toggle-2" );
    ico2.classList.add( "hidden" );
    ico1.classList.remove( "hidden" );
  }
});
// button scroll To Top
let mybutton = document.querySelector( ".btn-toup" );
window.onscroll = function(){
  if ( window.scrollY >= 180 )
  {
    mybutton.style.opacity = "1";
    mybutton.style.pointerEvents = "auto";
    mybutton.style.cursor="pointer";
  }
  else
  {
    mybutton.style.opacity = "0";
    mybutton.style.pointerEvents = "none";
  }
}
mybutton.onclick= function(){
  window.scrollTo({
    top:0
  })
}

// Dark and Light Mode
let dark = document.querySelector( "#dark" );
let light = document.querySelector( "#light" );
dark.addEventListener( "click",  ()=> {
  document.body.classList.add( "dark" )
  dark.style.color="#696767";
  light.classList.add( "shadow" );
  light.style.border = "1.5px solid #c6c6c6"
  dark.classList.remove( "shadow" );
  localStorage.setItem( "mode", "dark" );
});
light.addEventListener( "click",  ()=> {
  document.body.classList.remove( "dark" )
  dark.classList.add( "shadow" );
  light.classList.remove( "shadow" );
  light.style.border = "1.5px solid #8181d542"
  dark.style.color = "#6c5395";
  localStorage.setItem( "mode", "light" );
} );

// Save The Them Mode in localStorage
if (localStorage.getItem("mode")==="dark") {
  document.body.classList.add( "dark" );
  light.classList.add( "shadow" );
  dark.style.color="#000";
  light.style.border = "1.5px solid #c6c6c6"
  dark.style.color="#696767";
}else{
  document.body.classList.remove( "dark" )
  dark.classList.add( "shadow" );
  light.style.border = "1.5px solid #8181d542"
};

// Show and hidden drop-down-menu in cards
const menuEls = document.querySelectorAll(".box");
menuEls.forEach((menue) => {
  const button = menue.querySelector("button");
  const content = menue.querySelector(".list");
    button.addEventListener("click", () => {
    button.classList. toggle("active-span");
    content.classList.toggle("show-list");
    content.classList.remove( "hidden-list" );
// hidden drop-down-menu when clicked on any place in page
    window.addEventListener('mouseup', function (event) {
    if (event.target != button && event.target.parentNode != button) {
      content.classList.remove("show-list");
      button.classList.remove("active-span");
    }
  });
});
} );

// Show and hidden drop-down-menu in content
const menus = document.querySelectorAll(".date");
menus.forEach((menu) => {
  const buttonn = menu.querySelector(".ico");
  const contentt = menu.querySelector(".list");
    buttonn.addEventListener("click", () => {
    buttonn.classList. toggle("active-span");
    buttonn.classList. toggle("rotate");
    contentt.classList.toggle("show-list");
    contentt.classList.remove( "hidden-list" );
// hidden drop-down-menu when clicked on any place in page
    window.addEventListener('mouseup', function (event) {
    if (event.target != buttonn && event.target.parentNode != buttonn) {
      contentt.classList.remove("show-list");
      buttonn.classList.remove("active-span");
      buttonn.classList.remove("rotate");
    }
  });
});
} );

// Show and hidden drop-down-menu in profile
const menu = document.querySelectorAll(".profile");
menu.forEach((menu) => {
  const buttonn = menu.querySelector(".ico");
  const contentt = menu.querySelector(".list");
    buttonn.addEventListener("click", () => {
    buttonn.classList. toggle("active-span");
    buttonn.classList. toggle("rotate");
    contentt.classList.toggle("show-list");
    contentt.classList.remove( "hidden-list" );
// hidden drop-down-menu when clicked on any place in page
    window.addEventListener('mouseup', function (event) {
    if (event.target != buttonn && event.target.parentNode != buttonn) {
      contentt.classList.remove("show-list");
      buttonn.classList.remove("active-span");
      buttonn.classList.remove("rotate");
    }
  });
});
} );

// circular-progress-1
let progressBar1 = document.querySelector(".circular-progress1");
let valueContainer1 = document.querySelector(".value-container1");
let progressValue1 = 0;
let progressEndValue1 = 78;
let speed1 = 13;

let observer1 = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      let progress1 = setInterval(function() {
        progressValue1++;
        valueContainer1.textContent = `${progressValue1}%`;
        progressBar1.style.background = `conic-gradient(
          var(--main-color) ${progressValue1 * 3.6}deg,
          var(--bg-color-s) ${progressValue1 * 3.6}deg
        )`;
        if (progressValue1 == progressEndValue1) {
          clearInterval(progress1);
        }
      }, speed1);
      observer1.unobserve(entry.target);
    }
  });
});
observer1.observe( progressBar1 );

// circular-progress-2
let progressBar2 = document.querySelector(".circular-progress2");
let valueContainer2 = document.querySelector(".value-container2");
let progressValue2 = 0;
let progressEndValue2 = 78;
let speed2 = 13;
let observer2 = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      let progress2 = setInterval(function() {
        progressValue2++;
        valueContainer2.textContent = `${progressValue2}%`;
        progressBar2.style.background = `conic-gradient(
          var(--yellow-color) ${progressValue2 * 3.6}deg,
          var(--bg-color-s) ${progressValue2 * 3.6}deg
        )`;
        if (progressValue2 == progressEndValue2) {
          clearInterval(progress2);
        }
      }, speed2);
      observer2.unobserve(entry.target);
    }
  });
});
observer2.observe( progressBar2 );

// circular-progress-3
let progressBar3 = document.querySelector(".circular-progress3");
let valueContainer3 = document.querySelector(".value-container3");
let progressValue3 = 0;
let progressEndValue3 = 78;
let speed3 = 13;
let observer3 = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      let progress3 = setInterval(function() {
        progressValue3++;
        valueContainer3.textContent = `${progressValue3}%`;
        progressBar3.style.background = `conic-gradient(
          var(--braun-color) ${progressValue3 * 3.6}deg,
          var(--bg-color-s) ${progressValue3 * 3.6}deg
        )`;
        if (progressValue3 == progressEndValue3) {
          clearInterval(progress3);
        }
      }, speed3);
      observer3.unobserve(entry.target);
    }
  });
});
observer3.observe(progressBar3);


// Line-progress
let elements = document.querySelectorAll('.prog span');
let counters = document.querySelectorAll('.line > span');
let text = ['80', '55', '47', '37', '26'];
let observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      let element = entry.target;
      let index = Array.from(elements).indexOf(element);
      element.style.width = ['81%', '56%', '48%', '38%', '27%'][index];
      updateCounters(index);
      observer.unobserve(element);
    }
  });
});
elements.forEach(function(element) {
  observer.observe(element);
});
function updateCounters(index) {
  let counter = counters[index];
  let value = parseInt(counter.textContent);
  let target = parseInt(text[index]);
  let increment = Math.ceil(target / 100);
  if (value < target) {
    counter.textContent = value + increment + '%';
    setTimeout(function() {
      updateCounters(index);
    }, 400 / target);
  } else {
    counter.textContent = target + '%';
  }
}

// gender animation
window.addEventListener('scroll', function() {
  let gender = document.querySelector( ".gender-progress" )
  const genderPosition = gender.getBoundingClientRect().top; 
  if (genderPosition < windowHeight ) { 
    gender.classList.add('animat'); 
  }
});

//Line chart-1 Js
var options = {
  series: [
    { 
      name: '',
      data: [ 42, 42, 45, 36, 44, 37, 41 ],
      colors: ['6e00ff']
    },
    {
      name: '',
      colors: [ '#f3b304' ],
      data: [ 15, 10, 20, 19, 23, 25, 15 ],
    },
    { 
      name: '',
      data: [ 32, 33, 30, 29, 31, 22, 20 ],
      colors: ['#ff7a49']
    },
  ],
  chart: {
    type: 'bar',
    height: 240,
    width: '100%',
    stacked:true,
    toolbar: {
      show: true
    },
    animations: {
      enabled:true,
      easing: 'linear',
      speed: 500,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 2,
      columnWidth: '4px',
      dataLabels: {
        show: true
      },
    },
    series: {
      animations: {
        enabled: true
      }
    }
  },
  colors: ['#ff7a49', '#f3b304', '#6e00ff'],
  fill: {
    type: 'pattern',
    pattern: {
      style: ['circle', 'square', 'triangle'],
      width: 6,
      height: 6,
      strokeWidth: 2
    },
  },
  dataLabels: {
    enabled: false,
    animations: {
      enabled: true
    }
  },
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    labels: {
      show: true,
      style: {
        colors: "var(--tex-color)"
      }
    }
  },
  yaxis: {
    title: {
      text: undefined
    },
    labels: {
      formatter: function (val) {
        return val + "%"
      },
      style: {
        colors: "var(--tex-color)"
      }
    },
    min: 20,
    max: 100,
    tickAmount: 4
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "% AP"
      }
    },
    animations: {
      enabled: false
    }
  },
  markers: {
    animations: {
      enabled: true
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'center',
    offsetX: 20,
  }
};

var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
var target = document.querySelector( "#chart1" );
var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};
var observerr1 = new IntersectionObserver(function (entries, observerr1) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      chart1.render();
      observerr1.unobserve(entry.target);
    }
  });
}, options);
observerr1.observe(target);

//Area chart-2 Js
const newLocal = false;
var options = {
  chart: {
    height: 210,
    type: "area",
    toolbar: {
      show: true,
      tools: {
        download: true,
        selection: false,
        zoom: newLocal,
        zoomin: true,
        zoomout: true,
        pan: false,
        reset: false | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
    },
    animations: {
      enabled:true,
      easing: 'linear',
      speed: 500,
    },
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: " Received Time",
      data: [45, 52, 88, 65, 99, 63, 70],
      marker: {
        fillColors: ["var(--bg-color-p)"]
      },
      states: {
        hover: {
          filter: "none"
        }
      }
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.3,
      opacityTo: 0.7,
      stops: [0, 90, 10],
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 1,
        left: 0,
        top: 0
      }
    }
  },
  xaxis: {
    categories: [
      "8 AM",
      "10 AM",
      "12 PM",
      "2 PM",
      "4 PM",
      "6 PM",
      "8 PM"
    ],
    labels: {
      style: {
        colors: "var(--tex-color)"
      }
    }
  },
  yaxis: {
    min: 25,
    max: 100,
    tickAmount: 3,
    labels: {
      formatter: function (value) {
        return value.toFixed(0) + "%";
      },
      style: {
        colors: "var(--tex-color)"
      },
      offsetY: -10,
      offsetX: -5,
      show: true
    }
  },
  colors: [ "rgba(255, 122, 73, 0.9)" ],
};
var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
var target = document.querySelector( "#chart2" );
var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};
var observerr2 = new IntersectionObserver(function (entries, observerr2) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
        chart2.render();
      observerr2.unobserve(entry.target);
    }
  });
}, options);
observerr2.observe(target);

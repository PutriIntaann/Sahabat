var slideWidth = 380;
var leftSlide = document.getElementById("slide").offsetLeft;
var idSlider = document.getElementById("slider");
var classSlider = document.getElementsByClassName("slide");

function itunganmines(i) {
  idSlider.style.marginLeft = slideWidth * i * -1 + "px";
}

function slideLeft() {
  let i = 1;
  if (i < classSlider.length - 3) {
    console.log("benar");
    idSlider.style.marginLeft = slideWidth * i * -1 + "px";
    i++;
  } else {
    console.log("salah");
  }
}

// function slideRight() {
//   if (offsetLeft == "0") {
//     console.log("benar");
//     document.getElementById("slide").style.marginLeft = "-2370px";
//   } else {
//     if (i.offsetLeft == "-2370") {
//       document.getElementById("slide").style.marginLeft = "-1770px";
//     } else {
//       if (i.offsetLeft == "-1770") {
//         document.getElementById("slide").style.marginLeft = "-1170px";
//       } else {
//         if (i.offsetLeft == "-1170") {
//           document.getElementById("slide").style.marginLeft = "-570px";
//         } else {
//           if (i.offsetLeft == "-570") {
//             document.getElementById("slide").style.marginLeft = "30px";
//           }
//         }
//       }
//     }
//   }
// }

var music = document.getElementById("bgm");

document.addEventListener("DOMContentLoaded", () => {
  // when page elements are available
  const list = ["cantik", "lucu", "imut", "bidadari"];

  const validate = (e) => {
    e.preventDefault(); // cancel submit
    const answer = document.getElementById("text1").value.trim().toLowerCase();
    console.log(answer, list.includes(answer));
    document
      .getElementById("loadscreen")
      .classList.toggle("top-100", list.includes(answer));
      music.play();
  };
  document.getElementById("form1").addEventListener("submit", validate);

});

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  var time = h + "." + m;
  document.getElementById("time").innerText = time;
  document.getElementById("time1").innerText = time;
  document.getElementById("time2").innerText = time;
  document.getElementById("time").textContent = time;
  document.getElementById("time1").textContent = time;
  document.getElementById("time2").textContent = time;

  setTimeout(showTime, 10000);
}

showTime();

var chat1 = document.getElementById("chat1");
var chat2 = document.getElementById("chat2");
var chat3 = document.getElementById("chat3");
var isi1 = document.getElementById("isichat1");
var isi2 = document.getElementById("isichat2");
var isi3 = document.getElementById("isichat3");
var time0 = document.getElementById("time");
var time1 = document.getElementById("time1");
var time2 = document.getElementById("time2");

chat1.onanimationstart = () => {
  chat1.style.paddingRight = "8px";
  isi1.style.opacity = "1";
  time0.style.display = "none";
};
chat1.onanimationend = () => {
  chat1.style.paddingRight = "30px";
  time0.style.display = "inline";
  isi1.innerHTML = "Haii Intaann, Intan apa kabar? gimana harinya? cape tidaa?";
};
chat2.onanimationend = () => {
  chat2.style.paddingRight = "30px";
  isi2.innerHTML = "maaf yaa syabat, pasti u dah nunggu lama syekali wkkwkwk";
  time1.style.display = "inline";
};
chat2.onanimationstart = () => {
  chat2.style.paddingRight = "8px";
  chat2.style.opacity = "1";
  isi2.style.opacity = "1";
  time1.style.display = "none";
};
chat3.onanimationstart = () => {
  chat3.style.paddingRight = "8px";
  chat3.style.opacity = "1";
  isi3.style.opacity = "1";
  time2.style.display = "none";
};
chat3.onanimationend = () => {
  chat3.style.paddingRight = "30px";
  time2.style.display = "inline";
  isi3.innerHTML = "demi jaga rahasia, ku kasi pw (lu tau pwnya kan?)";
};

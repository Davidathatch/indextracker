anychart.onDocumentReady(function () {
  // set the data

  let name1 = document.querySelectorAll(".name")[0].innerHTML;
  let name2 = document.querySelectorAll(".name")[1].innerHTML;
  let name3 = document.querySelectorAll(".name")[2].innerHTML;
  let name4 = document.querySelectorAll(".name")[3].innerHTML;
  let name5 = document.querySelectorAll(".name")[4].innerHTML;
  let name6 = document.querySelectorAll(".name")[5].innerHTML;
  let name7 = document.querySelectorAll(".name")[6].innerHTML;
  let name8 = document.querySelectorAll(".name")[7].innerHTML;
  let name9 = document.querySelectorAll(".name")[8].innerHTML;
  let name10 = document.querySelectorAll(".name")[9].innerHTML;
  let name11 = document.querySelectorAll(".name")[10].innerHTML;

  let score1 = document.querySelectorAll(".score")[0].innerHTML;
  let score2 = document.querySelectorAll(".score")[1].innerHTML;
  let score3 = document.querySelectorAll(".score")[2].innerHTML;
  let score4 = document.querySelectorAll(".score")[3].innerHTML;
  let score5 = document.querySelectorAll(".score")[4].innerHTML;
  let score6 = document.querySelectorAll(".score")[5].innerHTML;
  let score7 = document.querySelectorAll(".score")[6].innerHTML;
  let score8 = document.querySelectorAll(".score")[7].innerHTML;
  let score9 = document.querySelectorAll(".score")[8].innerHTML;
  let score10 = document.querySelectorAll(".score")[9].innerHTML;
  let score11 = document.querySelectorAll(".score")[10].innerHTML;

  var scores = [
    score1,
    score2,
    score3,
    score4,
    score5,
    score6,
    score7,
    score8,
    score9,
    score10,
    score11,
  ];

  var data = [
    { x: name1, value: score1 },
    { x: name2, value: score2 },
    { x: name3, value: score3 },
    { x: name4, value: score4 },
    { x: name5, value: score5 },
    { x: name6, value: score6 },

    { x: name7, value: score7 },
    { x: name8, value: score8 },
    { x: name9, value: score9 },
    { x: name10, value: score10 },
    { x: name11, value: score11 },
  ];

  // create the chart
  var chart = anychart.pie();

  // add the data
  chart.data(data);

  // display the chart in the container
  chart.container("container");
  chart.draw();

  // set legend position
  chart.legend().position("right");
  // set items layout
  chart.legend().itemsLayout("vertical");

  let credits = document.querySelector(".anychart-credits");

  credits.style.display = "none";

  let winner = [0];
  console.log(scores[winner[0]]);

  for (let i = 1; i <= 11; i++) {
    if (scores[i] > scores[winner[0]]) {
      winner[0] = i;
    }
  }

  for (let i = 0; i <= 11; i++) {
    if (i !== winner[0]) {
      if (scores[i] === scores[winner[0]]) {
        winner[winner.length] = i;
      }
    }
  }

  for (let i = 0; i < winner.length; i++) {
    console.log(winner[i]);
  }

  for (let x = 0; x < winner.length; x++) {
    document.querySelectorAll(".name")[winner[x]].style.color = "goldenrod";
    document.querySelectorAll(".score")[winner[x]].style.color = "goldenrod";
  }

  let winnerbanner = document.querySelector(".winner-banner");

  if (winner.length === 1) {
    winnerbanner.innerHTML =
      document.querySelectorAll(".name")[winner[0]].innerHTML +
      " Has Indexed The Most Names";
  } else if (winner.length === 2) {
    winnerbanner.innerHTML =
      document.querySelectorAll(".name")[winner[0]].innerHTML +
      " and " +
      document.querySelectorAll(".name")[winner[1]].innerHTML +
      " have both indexed the most names";
  } else {
    winnerbanner.innerHTML =
      winner.length + " People Have Indexed The Most Names";
  }
});

anychart.onDocumentReady(function () {
  // set the data

  //PARTICIPAN'S NAMES

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

  var participants = [
    name1,
    name2,
    name3,
    name4,
    name5,
    name6,
    name7,
    name8,
    name9,
    name10,
    name11,
  ];

  //PARTICIPAN'S SCORES, IN SAME ORDER AS NAMES

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

  //LEADERBOARD PLACE SECTIONS (TROPHIES)

  let firstPlaceSpot = document.querySelector(".first-place h2");
  let secondPlaceSpot = document.querySelector(".second-place h2");
  let thirdPlaceSpot = document.querySelector(".third-place h2");

  let firstPlaceScore = document.querySelector(".first-place h4");
  let secondPlaceScore = document.querySelector(".second-place h4");
  let thirdPlaceScore = document.querySelector(".third-place h4");

  //DATA FOR PIE GRAPH

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

  //GETS FIRST PLACE

  //ARRAY OF PERSON(S) IN FIRST PLACE

  let winner = [0];

  //ADDS THE INDEX OF HIGHEST SCORE(S) TO WINNER ARRAY, INDEX IS SAME ACROSS FROM PARTICIPANTS AND SCORES SO THEY WILL MATCH UP

  for (let i = 1; i <= 11; i++) {
    if (scores[i] > scores[winner[0]]) {
      winner[0] = i;
    }
  }

  //CHECKS TO SEE IF ANY SCORES ARE THE SAME AS THE HIGHEST SCORE, ADDS TO WINNER ARRAY IF TRUE. USED FOR TIES

  for (let i = 0; i <= 11; i++) {
    if (i !== winner[0]) {
      if (scores[i] === scores[winner[0]]) {
        winner[winner.length] = i;
      }
    }
  }

  //TURNS THE WINNER AND THEIR SCORE GOLD TO SIGNIFY THAT THEY ARE WINNING

  if (winner[0] !== 0) {
    for (let x = 0; x < winner.length; x++) {
      document.querySelectorAll(".name")[winner[x]].style.color = "goldenrod";
      document.querySelectorAll(".score")[winner[x]].style.color = "goldenrod";
    }
  }

  //BANNER AT TOP OF PAGE LISTING THE NAME(S) OF WINNER(S)

  let winnerbanner = document.querySelector(".winner-banner");

  //SETUP FOR THE BANNER IF ONE PERSON IS WINNING, ONLY SHOWS ONE NAME

  if (winner[0] !== 0) {
    if (winner.length === 1) {
      winnerbanner.innerHTML =
        document.querySelectorAll(".name")[winner[0]].innerHTML +
        " Has Indexed The Most Names";
    }
    //SETUP FOR THE BANNER IF TWO PEOPLE ARE WINNING, PUT'S A & BETWEEN THEIR NAMES
    else if (winner.length === 2) {
      winnerbanner.innerHTML =
        document.querySelectorAll(".name")[winner[0]].innerHTML +
        " and " +
        document.querySelectorAll(".name")[winner[1]].innerHTML +
        " have both indexed the most names";
    }
    //SETUP FOR THE BANNER IF MORE THAN TWO PEOPLE ARE WINNING, PUT'S NUMBER OF PEOPLE IN FIRST PLACE INSTEAD OF NAMES
    else {
      winnerbanner.innerHTML =
        winner.length + " People Have Indexed The Most Names";
      winner.style.fontSize = ".75rem";
    }
  } else {
    winnerbanner.innerHTML = "Nobody has indexed any names";
  }

  //GETS TOP THREE

  let leaderboard = [
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

  //REORDERS PARTICIPANT'S AND THEIR SCORES TO BE FROM HIGHEST TO LOWEST, THEN GET'S THE TOP THREE AND ASSIGNS THEM TO THE LEADERBOARD SECTION

  for (let i = 0; i < leaderboard.length; i++) {
    for (let x = 0; x < leaderboard.length; x++) {
      let current = leaderboard[i];
      let currentParticipant = participants[i];
      if (leaderboard[i] < leaderboard[x]) {
        leaderboard[i] = leaderboard[x];
        leaderboard[x] = current;
        participants[i] = participants[x];
        participants[x] = currentParticipant;
      }
    }
  }

  //ASSIGNS FIRST, SECOND, AND THIRD PLACE TO THEIR RESPECTIVE THROPHIES AT BOTTOM OF PAGE

  if (winner[0] !== 0) {
    firstPlaceSpot.innerHTML = participants[participants.length - 1];
    secondPlaceSpot.innerHTML = participants[participants.length - 2];
    thirdPlaceSpot.innerHTML = participants[participants.length - 3];

    firstPlaceScore.innerHTML =
      leaderboard[leaderboard.length - 1] + " Names Indexed";
    secondPlaceScore.innerHTML =
      leaderboard[leaderboard.length - 2] + " Names Indexed";
    thirdPlaceScore.innerHTML =
      leaderboard[leaderboard.length - 3] + " Names Indexed";
  }

  var total = 0;

  for (let x = 0; x < scores.length; x++) {
    console.log(scores[x]);
    total = total + Number(scores[x]);
  }

  console.log("The total is " + total);

  document.querySelector(".total-index-number").innerHTML =
    total + " Names Indexed";
});

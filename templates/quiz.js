//for rankedIndex
var emoCat1 = "";
var slideNum = 1;

function openAlert(mess) {
  alert(mess);
}

function incrementSlideNum() {

  if (slideNum <= 2) {
  slideNum = slideNum + 1;
  console.log(slideNum);
  }
  else if (slideNum >= 3) {
    // if user goes through all the slides, reset the count to 1
    slideNum = 1;
    console.log(slideNum);
  }
}

function decrementSlideNum() {
  if (slideNum > 1) {
    slideNum = slideNum - 1;
    console.log(slideNum);
  }
  else if (slideNum <= 1) {
    //if user reaches left bound of slides, reset them to the end
    slideNum = 3;
    console.log(slideNum);
  }

}

$("#confirmSelection").click(function () {
  
  alert("testing 123");

  /*
  //var slideId = $("#choice").text();
  var slideNum = document.getElementById("choice").value;
  console.log(slideNum);
  
  */
  if (slideNum == 1) {
    console.log("slide1 selected");
    emoCat1 = document.getElementById("header1").innerHTML;
    //emoCat1 = $("#header0").val()

  } 
  else if (slideNum == 2) {
    console.log("slide2 selected");
    emoCat1 = document.getElementById("header2").innerHTML;
    //console.log(document.getElementById("header1").innerHTML);
  }
  else if (slideNum == 3) {
    console.log("slide3 selected");
    emoCat1 = document.getElementById("header3").innerHTML;
  }

  console.log("Slide Number: " + slideNum + " Caption emotion / C1: " + emoCat1);

  // grab emoCat1 and make flasksql alchemy request in database.
  // select 3 elements from C2 based on the C1 input -> store these values into an array? both emotion name and image source name
  // document.getElementsByTagName("img")[0].setAttribute("src", "<newimgURL>")
  // or alternatively document.getElementById("image1").setAttribute("src", "<newimgURL>")
  // CHANGE C2 Headers in image: document.getElementById("header1").innerHTML = Cat2List[0]
  // CHANGE C2 HEADERs in image2: document.getElementById("header2").innerHTML = Cat2List[1]
  // CHANGE C2 HEADERS in image3: document.getElementById("header3").innerHTML = Cat2List[2]

})

$("#lawlz").click(function() {
  alert("ayeee lmao");
})

/*

$("#confirmSelection").click(function () {

  var slideNum = $("slide0").attr("data-slide-to")
  console.log('button clicked')
  console.log(slideNum)
  if(slideNum == 0) caption = $("#header0").text()
  if(slideNum == 1) caption = $("#header1").text()
  if(slideNum == 2) caption = $("#header2").text()

  console.log(caption)
  

 // <!--getNextEmotionList(caption)-->
})




var getSummoner = function (name) {
  $.ajax({
    type: 'GET',
    url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + name + '?api_key=67417bbd-4b97-480c-a1bc-b90fcd3eba3f',
    success: function (orders) {
      $("#sum_id").text("ID - " + orders[summonerName].id)
      $("#sum_name").text("name - " + summonerName)
      $("#sum_lvl").text("level - " + orders[summonerName].summonerLevel)
     	ID = orders[summonerName].id
      getInfo(ID)
    }
  })
}

var isHot = function (hot) {
  if (hot) return "<td bgcolor='magenta'>"
  else return "<td>"
}

var isPlayer = function (name) {
  if (name == summonerName) return "<tr bgcolor='pink'>"
  else return "<tr>"
}

var getInfo = function (drink) {
  $.ajax({
    type: 'GET',
    url: 'https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/' + drink + '?api_key=67417bbd-4b97-480c-a1bc-b90fcd3eba3f',
    success: function (data) {
      $.each(data[ID][0].entries, function (game, i) {
        $("#info-tables").show()
        $("#info-table" + i.division).append(isPlayer(i.playerOrTeamName) + isHot(i.isHotStreak) + i.playerOrTeamName + "</td><td>" + i.wins + "</td><td>" + i.losses + "</td><td>" + (i.wins/i.losses).toFixed(2) + "</td><td>" + i.leaguePoints + "</tr>")
      })
    }
  })
}

*/
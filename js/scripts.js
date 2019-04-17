//Sample data to prepopulate and present
var monday1 = new JournalEntry(
  timeDate = '04/15/2019 08:00',
  sleep = 8,
  medications = "multi-vitamin, vitamin b, fish oil/vitamin",
  exercises = "cervical traction, shoulder press, upper trap stretch",
  food = "oatmeal with cranberries and pecans",
  drink = "12oz water",
  general = "woke up earlier than I wanted but am feeling generally well rested"
)

var monday2 = new JournalEntry(
  timeDate = '04/15/2019 13:00',
  sleep = '',
  medications = "100mg caffeine, 800mg ibuprofen, 15 mg adderall",
  exercises = "30min walk, 2 miles; lat pulls - 30lb 2 sets of 10",
  food = "chicken with rice, beans, guacamole, and lettuce",
  drink = "12oz orange san pelligrino",
  general = ""
)

var monday3 = new JournalEntry(
  timeDate = '04/15/2019 19:00',
  sleep = '',
  medications = "60mg Latuda, Claritin, multi-vitamin, vitamin b, fish oil/vitamin",
  exercises = "ankles w/ resistance band",
  food = "roast beef, carrots, potatoes, and snow peas",
  drink = "12oz orange san pelligrino",
  general = "energy very low this evening"
)

var tuesday1 = new JournalEntry(
  timeDate = "04/16/2019 08:00",
  sleep = 7,
  medications = "Wellbutrin, Celexa, Zyrtec",
  exercises = "cervical/shoulder stretches, 20 minute walk",
  food = "breakfast sandwich: 1 egg, english muffin, 1 strip bacon",
  drink = "16oz water",
  general = "Still recovering from illness but feeling much better"
)
// Business logic

function Journal() {
  this.journalEntries = [],
    this.currentId = 0
}
Journal.prototype.addJournalEntry = function(journalEntry) {
  journalEntry.id = this.assignId();
  this.journalEntries.push(journalEntry);
}
Journal.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
Journal.prototype.findJournalEntry = function(id) {
  for (var i = 0; i < this.journalEntries.length; i++) {
    if (this.journalEntries[i]) {
      if (this.journalEntries[i].id == parseInt(id)) {
        return this.journalEntries[i];
      }
    }
  }
  return false;
}

Journal.prototype.getSleep = function(id) {
  var sleeps=[];

  for (var i = 0; i < this.journalEntries.length; i++) {
    if (this.journalEntries[i]) {
      if (this.journalEntries[i].sleep) {
        sleeps.push(this.journalEntries[i].sleep);

      }
    }
  }
  return sleeps;
}

Journal.prototype.showDate = function(id) {
  var dates=[];

  for (var i = 0; i < this.journalEntries.length; i++) {
    if (this.journalEntries[i]) {
      if (this.journalEntries[i].n) {

        dates.push(this.journalEntries[i].n);


      }
    }
  }
  return dates;
}


function sleepChart(){
    var slp =[];
  var sleeps = journal.getSleep();
  var dates = journal.showDate();

  for(var i=0; i<sleeps.length; i++){
    slp.push({
      y: sleeps[i],
      label: dates[i]
    });
  }


var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Sleep Chart"
	},
	axisY:{
		includeZero: false
	},
	data: [{
		type: "line",
		dataPoints: slp
	}]
});
chart.render();
};
// Chart for Drink Amount

Journal.prototype.getDrink = function(id) {
  var drinks=[];

  for (var i = 0; i < this.journalEntries.length; i++) {
    if (this.journalEntries[i]) {
      if (this.journalEntries[i].drinkAmount) {
        drinks.push(this.journalEntries[i].drinkAmount);

      }
    }
  }
  return drinks;
}


function drinkChart(){
    var drk =[];
  var drinks = journal.getDrink();
  var dates = journal.showDate();

  for(var i=0; i<drink.length; i++){
    drk.push({
      y: drinks[i],
      label: n
    });
  }


var chart = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Drink Chart"
	},
	axisY:{
		includeZero: false
	},
	data: [{
		type: "line",
		dataPoints: drk
	}]
});
chart.render();
};

function JournalEntry(n, sleep, medications, exercises, food, drink, drinkAmount, general) {
  this.n = n,
// NEW CODE from the other branch
Journal.prototype.editJournalEntry = function(id, sleep, medications, exercises, food, drink, general) {
  for (var i = 0; i < this.journalEntries.length; i++) {
    if (this.journalEntries[i]) {
      if (this.journalEntries[i].id == parseInt(id)) {
        this.journalEntries[i].sleep = sleep;
        this.journalEntries[i].medications = medications;
        this.journalEntries[i].exercises = exercises;
        this.journalEntries[i].food = food;
        this.journalEntries[i].drink = drink;
        this.journalEntries[i].general = general;
      }
    }
  }
}
// Journal.prototype.findJournalEntry = function(id) {
//   var sleeps=[];
//   for (var i = 0; i < this.journalEntries.length; i++) {
//     if (this.journalEntries[i]) {
//       if (this.journalEntries[i].sleep) {
//         sleeps.push(this.journalEntries[i]);
//       }
//     }
//   }
//   return sleeps;
// }
//
// function sleepChart(){
//   var sleeps = journal.findJournalEntry();
//   var slp =[];
//   for(var i=0; i<sleeps.length; i++){
//     slp.push({
//       y: sleeps[i]
//     });
//   }
//
//
// var chart = new CanvasJS.Chart("chartContainer", {
// 	animationEnabled: true,
// 	theme: "light2",
// 	title:{
// 		text: "Sleep Chart"
// 	},
// 	axisY:{
// 		includeZero: false
// 	},
// 	data: [{
// 		type: "line",
// 		dataPoints:  slp
// 	}]
// });
// chart.render();
// };

function JournalEntry(timeDate, sleep, medications, exercises, food, drink, general) {
  this.timeDate = timeDate,

    this.sleep = sleep,
    this.medications = medications,
    this.exercises = exercises,
    this.food = food,
    this.drink = drink,
    this.drinkAmount = drinkAmount,
    this.general = general
}

// User Interface
function listfilteredEntries(journal, property) {
  var htmlForfilteredEntries = "";
  var line=1;
  var appliedClass = "";

  if (property === "sleep"){
    var filteredEntries = $("#filteredSleepDates");
    journal.journalEntries.forEach(function(journalEntry) {
      if (journalEntry.sleep) {

        if (line%2 === 1) {
          appliedClass = 'oddRow';
        } else {
          appliedClass = "evenRow";
        }
        htmlForfilteredEntries += `<div class=${appliedClass} id=${journalEntry.id}><p>${journalEntry.timeDate}</p></div><div class=${appliedClass}><p> ${journalEntry.sleep}<p></div>`;
        line+=1;

        htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + n + " " + journalEntry.sleep + "</li>";

      }
    });
  } else if (property === "medications") {
      var filteredEntries = $("#filteredMedicationsDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.medications) {

          if (line%2 === 1) {
            appliedClass = 'oddRow';
          } else {
            appliedClass = "evenRow";
          }
          htmlForfilteredEntries += `<div class=${appliedClass} id=${journalEntry.id}><p>${journalEntry.timeDate}</p></div><div class=${appliedClass}><p> ${journalEntry.medications}<p></div>`;
          line+=1;        }

          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + n + " " + journalEntry.medications + "</li>";
        }
      });
  } else if (property === "exercises") {
      var filteredEntries = $("#filteredExercisesDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.exercises) {

          if (line%2 === 1) {
            appliedClass = 'oddRow';
          } else {
            appliedClass = "evenRow";
          }
          htmlForfilteredEntries += `<div class=${appliedClass} id=${journalEntry.id}><p>${journalEntry.timeDate}</p></div><div class=${appliedClass}><p> ${journalEntry.exercises}<p></div>`;
          line+=1;        }

          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + n + " " + journalEntry.exercises + "</li>";
        }
      });
  } else if (property === "food") {
      var filteredEntries = $("#filteredFoodDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.food) {

          if (line%2 === 1) {
            appliedClass = 'oddRow';
          } else {
            appliedClass = "evenRow";
          }
          htmlForfilteredEntries += `<div class=${appliedClass} id=${journalEntry.id}><p>${journalEntry.timeDate}</p></div><div class=${appliedClass}><p> ${journalEntry.food}<p></div>`;
          line+=1;        }

          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + n + " " + journalEntry.food + "</li>";
        }
    });
  } else if (property === "drink") {
      var filteredEntries = $("#filteredDrinkDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.drink) {
          if (line%2 === 1) {
            appliedClass = 'oddRow';
          } else {
            appliedClass = "evenRow";
          }
          htmlForfilteredEntries += `<div class=${appliedClass} id=${journalEntry.id}><p>${journalEntry.timeDate}</p></div><div class=${appliedClass}><p> ${journalEntry.drink}<p></div>`;
          line+=1;        }

          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" +  n + " " + journalEntry.drink + "</li>";
        }
    });
  } else if (property === "drinkAmount") {
        var filteredEntries = $("ul#filteredDrinkAmountDates");
        journal.journalEntries.forEach(function(journalEntry) {
          if (journalEntry.drinkAmount) {
            htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" +  n + " " + journalEntry.drinkAmount + "</li>";
          }
      });
  } else if (property === "general") {
      var filteredEntries = $("#filteredGeneralDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.general) {

          if (line%2 === 1) {
            appliedClass = 'oddRow';
          } else {
            appliedClass = "evenRow";
          }
          htmlForfilteredEntries += `<div class=${appliedClass} id=${journalEntry.id}><p>${journalEntry.timeDate}</p></div><div class=${appliedClass}><p> ${journalEntry.general}<p></div>`;
          line+=1;        }

          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + n + " " + journalEntry.general + "</li>";
        }
      });
  }
  filteredEntries.html(htmlForfilteredEntries);
  console.log(filteredEntries);
}

function attachSleepListeners() {
  $("#filteredSleepDates").on("click", "div", function() {
    showEntry(this.id);
    $("#sleep-back-button").hide();
  });

}
function attachMedicationsListeners() {
  $("#filteredMedicationsDates").on("click", "div", function() {
    showEntry(this.id);
    $("#medication-back-button").hide();
  });
}
function attachExercisesListeners() {
  $("#filteredExercisesDates").on("click", "div", function() {
    showEntry(this.id);
    $("#exercise-back-button").hide();
  });
}
function attachFoodListeners() {
  $("#filteredFoodDates").on("click", "div", function() {
    showEntry(this.id);
    $("#food-back-button").hide();
  });
}
function attachDrinkListeners() {
  $("#filteredDrinkDates").on("click", "div", function() {
    showEntry(this.id);
    $("#drink-back-button").hide();
  });
}
function attachDrinkAmountListeners() {
  $("ul#filteredDrinkAmountDates").on("click", "li", function() {
    showEntry(this.id);
    $("#drink-amount-back-button").hide();
  });
}
function attachGeneralListeners() {
  $("#filteredGeneralDates").on("click", "div", function() {
    showEntry(this.id);
    $("#notes-back-button").hide();
  });
}


function attachJournalListeners() {
  $("#all-dates").on("click", "li", function() {
    var date = new Date();

    var n = date.toDateString();
    showEntry(this.id);


    $("#show-template").slideDown();
    $("#check-buttons").slideUp();
    $("#form").slideUp()
    $("#display-date").text(n);
    $("#display-date").show();
    $("#dates").slideUp();
  });
};

var journal = new Journal();

function showEntry(entryId) {
  var entry = journal.findJournalEntry(entryId);
  $("#editId").html(entryId);
  $("#show-template").show();
  $(".sleep").html(entry.sleep);
  $(".medications").html(entry.medications);
  $(".exercises").html(entry.exercises);
  $(".food").html(entry.food);
  $(".drink").html(entry.drink);
  $(".drink-amount").html(entry.drinkAmount);
  $(".general").html(entry.general);
  // var buttons = $("#editEntry");
  // buttons.empty();
  // buttons.append("<button class='btn-lg btn-danger editButton' id=" + entry.id + ">Save Changes</button>");
}

function clearFields(){
  $("input#sleep").val("");
  $("textarea#medications").val("");
  $("input#food").val("");
  $("input#drink").val("");
  $("textarea#notes").val("");
}

function getDateTime() {
  var date = new Date();
  var month = (date.getMonth() + 1).toString();
  var day =  date.getDate().toString();
  var hour = date.getHours().toString();
  var minutes = date.getMinutes().toString();
  if (month.length === 1) {
    month = '0' + month;
  }
  if (day.length === 1) {
    day = '0' + day;
  }
  if (hour.length === 1) {
    hour = '0' + hour;
  }
  if (minutes.length === 1) {
    day = '0' + minutes;
  }
  var timeDate = month + '/' + day + '/' + date.getFullYear() + ' ' + hour + ":" + minutes;
  return timeDate;
}


$(document).ready(function() {
  attachJournalListeners();
  attachSleepListeners();
  attachMedicationsListeners();
  attachExercisesListeners();
  attachFoodListeners();
  attachDrinkListeners();
  attachDrinkAmountListeners();
  attachGeneralListeners();

  // Add sample data included above
  journal.addJournalEntry(monday1);
  journal.addJournalEntry(monday2);
  journal.addJournalEntry(monday3);
  journal.addJournalEntry(tuesday1);

  $("#all-dates").append("<li id=" + monday1.id + ">" + monday1.timeDate + "</li>");
  $("#all-dates").append("<li id=" + monday2.id + ">" + monday2.timeDate + "</li>");
  $("#all-dates").append("<li id=" + monday3.id + ">" + monday3.timeDate + "</li>");
  $("#all-dates").append("<li id=" + tuesday1.id + ">" + tuesday1.timeDate + "</li>");

  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var sleep = parseInt($("input#sleep").val());
    var medications = $("textarea#medications").val();
    var exercise = $("textarea#exercise").val();
    var food = $("input#food").val();
    var drink = $("input#drink").val();
    var drinkAmount =parseInt($("input#drink-amount").val());
    var notes = $("textarea#notes").val();
// CONVERT TO THE NEW BRANCH
    var date = new Date();
    var n = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ":" + date.getMinutes();
    var newEntry = new JournalEntry(n, sleep, medications, exercise, food, drink, drinkAmount, notes);
// END convert
    // var date = new Date();
    // var n = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + date.getMinutes();
    var date = getDateTime();
    var newEntry = new JournalEntry(date, sleep, medications, exercise, food, drink, notes);
// End NEW branch

    journal.addJournalEntry(newEntry);
    $("#all-dates").append("<li id=" + newEntry.id + ">" + date + "</li>");

    clearFields();

  });

  $("#sleep-button").click(function() {
    $("#form").slideUp();
    $("#check-buttons").slideUp();
    $("#sleep-table").slideDown();
    $("#dates").slideUp();
    $("#chartContainer").slideUp();

    var property = "sleep";
    listfilteredEntries(journal, property);
    $("#sleep-table-row").show();
    sleepChart();

  });
  $("#sleep-back-button").click(function(){
    $("#sleep-table").slideUp();
    $("#form").slideDown();
    $("#dates").slideDown();
    $("#check-buttons").slideDown();
  });

  $("#medication-button").click(function() {
    $("#form").slideUp();
    $("#check-buttons").slideUp();
    $("#medication-table").slideDown();
    $("#dates").slideUp();
    var property = "medications";
    listfilteredEntries(journal, property);
    $("#medication-table-row").show();
  });
  $("#medication-back-button").click(function(){
    $("#medication-table").slideUp();
    $("#form").slideDown();
    $("#dates").slideDown();
    $("#check-buttons").slideDown();
  });

  $("#exercise-button").click(function() {
    $("#form").slideUp();
    $("#check-buttons").slideUp();
    $("#exercise-table").slideDown();
    $("#dates").slideUp();
    var property = "exercises";
    listfilteredEntries(journal, property);
    $("#exercise-table-row").show();
  });
  $("#exercise-back-button").click(function(){
    $("#exercise-table").slideUp();
    $("#form").slideDown();
    $("#dates").slideDown();
    $("#check-buttons").slideDown();
  });

  $("#food-button").click(function() {
    $("#form").slideUp();
    $("#check-buttons").slideUp();
    $("#food-table").slideDown();
    $("#dates").slideUp();
    var property = "food";
    listfilteredEntries(journal, property);
    $("#food-table-row").show();
  });
  $("#food-back-button").click(function(){
    $("#food-table").slideUp();
    $("#form").slideDown();
    $("#dates").slideDown();
    $("#check-buttons").slideDown();
  });

  $("#drink-button").click(function() {
    $("#form").slideUp();
    $("#check-buttons").slideUp();
    $("#drink-table").slideDown();
    $("#dates").slideUp();
    var property = "drink";
    listfilteredEntries(journal, property);
    $("#drink-table-row").show();
  });
  $("#drink-back-button").click(function(){
    $("#drink-table").slideUp();
    $("#form").slideDown();
    $("#dates").slideDown();
    $("#check-buttons").slideDown();
  });

    $("#drink-amount-button").click(function() {
    $("#form").slideUp();
    $("#check-buttons").slideUp();
    $("#drink-amount-table").slideDown();
    $("#dates").slideUp();
    var property = "drinkAmount";
    listfilteredEntries(journal, property);
    $("#drink-amount-table-row").show();
    $("#chartContainer1").slideUp();
    drinkChart();
  });
  $("#drink-amount-back-button").click(function(){
    $("#drink-amount-table").slideUp();
    $("#form").slideDown();
    $("#dates").slideDown();
    $("#check-buttons").slideDown();
  });

  $("#notes-button").click(function() {
    $("#form").slideUp();
    $("#check-buttons").slideUp();
    $("#notes-table").slideDown();
    $("#dates").slideUp();
    var property = "general";
    listfilteredEntries(journal, property);
    $("#notes-table-row").show();
  });
  $("#notes-back-button").click(function(){
    $("#notes-table").slideUp();
    $("#form").slideDown();
    $("#dates").slideDown();
    $("#check-buttons").slideDown();
  });

  $("#go-back-button").click(function() {
    $("#show-template").hide();
    $("#sleep-table").hide();
    $("#exercise-table").hide();
    $("#medication-table").hide();
    $("#food-table").hide();
    $("#drink-table").hide();
    $("#drink-amount-table").hide();
    $("#notes-table").hide();
    $("#dates").slideDown();
    $("#check-buttons").slideDown();
    $("#form").slideDown();
  });


  $("#sleep-chart-button").click(function(){
    $("#chartContainer").slideDown();
  })

  $("#drink-amount-chart-button").click(function(){
    $("#chartContainer1").slideDown();
  })
  $("#lets-start").click(function(){
    alert("hi");
$(".everything").slideDown();
$("#carouselExampleIndicators").slideUp();

  });

  $("#editEntry").click(function() {
      var id = $("#editId").html();
      var sleep = $("#editSleep").html();
      var medications = $("#editMeds").html();
      var exercises = $("#editExercises").html();
      var food = $("#editFood").html();
      var drink = $("#editDrink").html();
      var general = $("#editGeneral").html();
      journal.editJournalEntry(id, sleep, medications, exercises, food, drink, general);
    });
});

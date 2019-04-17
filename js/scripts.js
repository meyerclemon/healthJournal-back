



var monday1 = new JournalEntry(
  n = '04/15/2000 13:00',
  sleep = 8,
  medications = "100mg caffiene, 800mg ibuprofen",
  exercises = "30min walk, 2 miles; lat pulls - 30lb 2 sets of 10",
  food = "chicken with rice, beans, guacamole, and lettuce",
  drink = "12oz orange san pelligrino",
  drinkAmount = 128,
  general = "woke up earlier than I wanted to but I feel decently rested"
)
var monday2 = new JournalEntry(
  n = '04/16/2000 13:30',
  sleep = 4,
  medications = '',
  exercises = '',
  food = "oatmeal with cranberries and pecans",
  drink = "12oz water",
  drinkAmount = 64,
  general = ''
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
  console.log(this.journalEntries.length);
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
      label: dates[i]
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

  if (property === "sleep"){
    var filteredEntries = $("ul#filteredSleepDates");
    journal.journalEntries.forEach(function(journalEntry) {
      if (journalEntry.sleep) {
        htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + n + " " + journalEntry.sleep + "</li>";
      }
    });
  } else if (property === "medications") {
      var filteredEntries = $("ul#filteredMedicationsDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.medications) {
          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + n + " " + journalEntry.medications + "</li>";
        }
      });
  } else if (property === "exercises") {
      var filteredEntries = $("ul#filteredExercisesDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.exercises) {
          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + n + " " + journalEntry.exercises + "</li>";
        }
      });
  } else if (property === "food") {
      var filteredEntries = $("ul#filteredFoodDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.food) {
          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + n + " " + journalEntry.food + "</li>";
        }
    });
  } else if (property === "drink") {
      var filteredEntries = $("ul#filteredDrinkDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.drink) {
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
      var filteredEntries = $("ul#filteredGeneralDates");
      journal.journalEntries.forEach(function(journalEntry) {
        if (journalEntry.general) {
          htmlForfilteredEntries += "<li id=" + journalEntry.id + ">" + n + " " + journalEntry.general + "</li>";
        }
      });
  }
  filteredEntries.html(htmlForfilteredEntries);
  console.log(filteredEntries);
}

function attachSleepListeners() {
  $("ul#filteredSleepDates").on("click", "li", function() {
    showEntry(this.id);
    $("#sleep-back-button").hide();
  });
}
function attachMedicationsListeners() {
  $("ul#filteredMedicationsDates").on("click", "li", function() {
    showEntry(this.id);
    $("#medication-back-button").hide();
  });
}
function attachExercisesListeners() {
  $("ul#filteredExercisesDates").on("click", "li", function() {
    showEntry(this.id);
    $("#exercise-back-button").hide();
  });
}
function attachFoodListeners() {
  $("ul#filteredFoodDates").on("click", "li", function() {
    showEntry(this.id);
    $("#food-back-button").hide();
  });
}
function attachDrinkListeners() {
  $("ul#filteredDrinkDates").on("click", "li", function() {
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
  $("ul#filteredGeneralDates").on("click", "li", function() {
    showEntry(this.id);
    $("#notes-back-button").hide();
  });
}


function attachJournalListeners() {
  $("ul#all-dates").on("click", "li", function() {
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
  $("#show-template").show();
  $(".sleep").html(entry.sleep);
  $(".medications").html(entry.medications);
  $(".exercises").html(entry.exercises);
  $(".food").html(entry.food);
  $(".drink").html(entry.drink);
  $(".drink-amount").html(entry.drinkAmount);
  $(".general").html(entry.general);
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


  journal.addJournalEntry(monday1);
  journal.addJournalEntry(monday2);

  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var sleep = parseInt($("input#sleep").val());
    var medications = $("textarea#medications").val();
    var exercise = $("textarea#exercise").val();
    var food = $("input#food").val();
    var drink = $("input#drink").val();
    var drinkAmount =parseInt($("input#drink-amount").val());
    var notes = $("textarea#notes").val();
    var date = new Date();
    var n = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + date.getMinutes();
    var newEntry = new JournalEntry(date, sleep, medications, exercise, food, drink, drinkAmount, notes);

    journal.addJournalEntry(newEntry);
    $("#all-dates").append("<li id=" + newEntry.id + ">" + n + "</li> <br>");

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
});

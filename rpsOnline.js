// Initialize Firebase
  	var config = {
    apiKey: "AIzaSyCUWEBxeKRMiFq1bQQrLxKyyTi1f3zZIVQ",
    authDomain: "rps-online-c0101.firebaseapp.com",
    databaseURL: "https://rps-online-c0101.firebaseio.com",
    projectId: "rps-online-c0101",
    storageBucket: "",
    messagingSenderId: "160623860568"
  	};
  	firebase.initializeApp(config);

var database = firebase.database();

var playerNum;
var playerName;

var player1Choice;
var player2Choice;

// function game()
// var gameData = database.ref("/gameData");
// var game = gameData.set({});
var player1;
var player2;
var player1 = database.ref("/player1");
function whichPlayer(){
	if(player1.name ==""){
		 playerNum =1;
		nameInput();
	
	}//if ends
	else {
		playerNum = 2;
		nameInput();
		$("#player1").text("Player1 - "+player1.name);
		$("#player1").append("<p>Wins: </p>").append(player1.wins);
		$("#player1").append("<p>Lost: </p>").append(player1.lost);
		$("#player1").append("<p>Choice: </p>").append(player1.choice);

		var player2 = database.ref("/player2");
		player2.set({
			name: playerName,
			wins: 0,
			lost: 0,
			choice: ""
		})
	}//else ends
	};

	//name input

	function nameInput(){
	$("#nameSubmit").on("click", function(){
		if ($("#nameInput").val() =="") {
			$("#response").text("Name cannot be empty. Please enter your name");
		}
		else {
			playerName = $("#nameInput").val();
			$("#response").text(playerName+", you are Player"+playerNum);
			disapper("#nameSubmit");
			disapper("#nameInput");
			eval("$('#player"+playerNum+"')"+".text('Player "+playerNum+" - "+playerName+"')");
			if(playerNum == 1)
			{
				player.set({name: playerName,wins: 0,
			lost: 0,
			choice: ""});
			}

		}
	});

	};
	


$('document').ready(function(){//when the html loads
	

	player1 = database.ref("/player1");
	
	

	whichPlayer();





	$("body").append($("<div class= 'container-fluid' id = 'bodyContainer'></div>"));//container-fluid div added to body
	
	// header div
	$("#bodyContainer").append($("<div>", {class: 'row', id: 'row1'}));// first row is added to container div
	$("#row1").append($('<div>', {class: 'col-md-12', id: 'headerDiv'}));// first column added to row1
	$("#headerDiv").append($("<h1>RPS Online</h1>"));// <h1> added to first column of row1
	$("#headerDiv").css({"text-align": "center"});// <h1> of first column, row1 is aligned center

	// broadcast div  
	$("#bodyContainer").append($("<div>", {class: 'row', id:'row2'})); // row2 is added
	$("#row2").append($('<div>', {class: 'col-md-1'}));//margin column
	$("#row2").append($('<div>', {class: 'col-md-10', id: 'broadcastDiv'}));//broadcast div is added
	$("#row2").append($('<div>', {class: 'col-md-1'}));// margin column

	//Add text-input box asking for Players name
	$("#broadcastDiv").append($("<h4 id='response'>Please enter your name </h4><input id='nameInput' type='text'name='name'></input><input id='nameSubmit'  type='submit'></input>"));
	$("#broadcastDiv").css({"text-align":"center"});

	// game row
	$("#bodyContainer").append($("<div>", {class: "row", id: "gameRow"}));// row3 is gameRow
	$("#gameRow").append($('<div>', {class: 'col-md-1'})); // margin column
	$("#gameRow").append($('<div>', {class: 'col-md-3', id: 'player1'}));//Player1 data
		// Waiting for Player1
		$("#player1").text("Waiting for Player1");
	$("#gameRow").append($('<div>', {class: 'col-md-4', id: 'display'}));//Display game data
	$("#gameRow").append($('<div>', {class: 'col-md-3', id: 'player2'}));//Player2 data
		// Waiting for Player2
		$("#player2").text("Waiting for Player2");
	$("#gameRow").append($('<div>', {class: 'col-md-1'})); // margin column

	// chat row1
	$("#bodyContainer").append($("<div>", {class: "row", id: "chatRow1"}));// row4 is gameRow1
	$("#chatRow1").append($('<div>', {class: 'col-md-4'}));//margin col
	$("#chatRow1").append($('<div>', {class: 'col-md-4', id: 'chat'}));// chat display
		//Add a display with scrolling for chat conversation
		$("#chat").text("Chat");
	$("#chatRow1").append($('<div>', {class: 'col-md-4'}));//margin col
	
	// chat row2
	$("#bodyContainer").append($("<div>", {class: "row", id: "chatRow2"}));// row5 is gameRow2
	$("#chatRow2").append($('<div>', {class: 'col-md-4'}));//margin col
	$("#chatRow2").append($('<div>', {class: 'col-md-4', id: 'chatFormDiv'}));// Form to enter text to chat
		//Add chat form with text-box and submit button
		$("#chatFormDiv").append($("<form>", {id: 'chatForm'}));
		$("#chatForm").append($("<textarea type='text' name='chatText'></textarea><input type='submit'></input>"))
	$("#chatRow2").append($('<div>', {class: 'col-md-4'}));//margin col

	

	


});//document.ready ends.
function disapper(a) {$(a).css("display","none")};
	

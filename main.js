
    /* 
    UPDATE:
    remove "<script>"
    */

alert('Ready for a quiz?');
quiz();
console.log('hello');

//console logging = if I can't figure out what a thing is, use console log to figure it out
//this is a basic function with the name "quiz"
// we don't need to define add a let without a 
function quiz() {
	let score = 0;
    let answer;

// because the questions are in an array they are already indexed so I didnt need above
// num references questions 
    let question = [
        'How many moons does Earth have?',
        'How many moons does Saturn have?', 
        'How many moons does Venus have?'
    ];

    /*
    UPDATES: 
    Questions referenced in array number, then listed in a let
    Close array ] 
    */

	let quizAnswers = [1, 82, 0];
	
	//*******get total number of questions
	let totalQuestion = quizQuestions.count;
    //what is totalQuestion try "console.log (totalQuestion);

	
	//*******generate random number for question
    //Math floor/math random is a common pattern used to generate a random number between 0-2 because of the floor
    //math.random returns a random number between 0-1, when you multiply that by one nunmber by greater then floor it you get an even distribution of numbers
    //math.floor rounds down the random number
	let num = Math.floor(Math.random() * 3);
    
    /*
    UPDATE:
    Close let = Math.floor ; to be consistent

    I know this is a random number generation but I can't identify the typo. I think it might be because that num must follow let? It's also possible that it's related to 3, and 3 should instead be quizQuestions, but I am not sure.
    */

		
//this is a for loop...it repeats an action a certain number of times
//it is also a looping condition I think
	for (let count = 0; count <= totalQuestion; count++)
		question = quizQuestions[num];
		answer = prompt(question);

    /*
    UPDATES:
    count should be "let count"
    "0 count" should just be 0
    "let count = 0" should be followed by ;
    count should be less than or equals to totalQuestion
    */
        
		if (answer === quizAnswers[num]) {
			score ++;
    /*
    UPDATE:
    if score = 0 then score + wouldn't do anything when this happens. It should add one to score
    */		

            alert("Correct!");
		} else {
			alert("Wrong");
		}
		num++;
		if (num = totalQuestion) {
			num = 0;
     /*
    UPDATE:
    every if/else conditional should have an else so I don't think this last if is correct    
    */	

  document.write('<p>You got ${score} out of ${totalQuestion} questions correct.</p>');
}
}
    /* 
    UPDATE:
    Remove "Footer and close function
    */
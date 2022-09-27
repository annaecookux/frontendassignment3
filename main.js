
    /* 
    UPDATE:
    remove "<script>"
    */

//this is a basic function with the name "quiz"
function quiz() {
	let score = 0;
    let answer;
    let quizQuestions = [1, 2, 3];
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
	
	//*******generate random number for question
	let num = Math.floor(Math.random() * quizQuestions);
    
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
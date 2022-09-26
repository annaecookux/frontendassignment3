
// remove "<script>"
// all non-changing variables should be a const?
function quiz() {
	let score = 0;
	let num;
//	let question;
    let answer;
    
    let quizQuestions = [1, 2, 3];
    const question = [
        'How many moons does Earth have?',
        'How many moons does Saturn have?', 
        'How many moons does Venus have?'
    ];

    //should questions be referenced in array number, then listed in a const?
    //close array ]

	let quizAnswers = [1, 82, 0];
	
	//*******get total number of questions
	let totalQuestion = quizQuestions.count;
	
	//*******generate random number for question
	let = Math.floor(Math.random() * 3);
    //add ; to close let = Math.floor
		
	for(count = 0 count => totalQuestion; count++)
    //arrow <= should be pointing =>
		question = quizQuestions[num];
		answer = prompt(question);
		if (answer === quizAnswers[num]) {
			score+;
			alert("Correct!");
		} else {
			alert("Wrong");
		}
		num++;
		if (num = totalQuestion) {
			num = 0;

  document.write('<p>You got ${score} out of ${totalQuestion} questions correct.</p>');
}
}
//remove "Footer and close function

/*
<script>
  alert(Ready for a quiz?);
  qui();
</script>
 */
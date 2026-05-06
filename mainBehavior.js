var bookletPage = 0;
var functionsPhase = 0;

const page0Address = "media\\page1.png";
const page1Address = "media\\page2.png";
const page2Address = "media\\page3.png";
const page3Address = "media\\page4.png";
const page4Address = "media\\page5.png";
const page5Address = "media\\page6.png";

window.addEventListener("load", (event) => {
  displayQuestions(); 
  displayBookletImage();
});

function displayBookletImage()
{
    var imageAddress = page0Address;
    if(bookletPage == 1){
        imageAddress = page1Address;
    }
    else if (bookletPage == 2){
        imageAddress = page2Address;
    }
    else if (bookletPage == 3){
        imageAddress = page3Address;
    }
    else if (bookletPage == 4){
        imageAddress = page4Address;
    }
    else if (bookletPage == 5){
        imageAddress = page5Address;
    }

    document.getElementById("booklet").src = imageAddress;
}

function incrementBookletPage(){
    if(bookletPage < 5) bookletPage++;
    displayBookletImage();
}

function decrementBookletPage(){
    if(bookletPage > 0) bookletPage--;
    displayBookletImage();
}

function displayQuestions()
{
    var questionContent = questions0Address;
    if(functionsPhase == 1){
        questionContent = questions1Address;
    }
    else if (functionsPhase == 2){
        questionContent = questions2Address;
    }
    else if (functionsPhase == 3){
        questionContent = questions3Address;
    }
    else if (functionsPhase == 4){
        questionContent = questions4Address;
    }
    else if (functionsPhase == 5){
        questionContent = '<h1>Congratulations, Detective</h1>';
    }

    document.getElementById("questions").innerHTML = questionContent;
}

function checkAnswers()
{
    if(functionsPhase == 0)
    {
        if(!document.querySelector('input[name="Where is this microphone located?"]:checked'))
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }

        if(document.querySelector('input[name="Where is this microphone located?"]:checked').value == "G")
        {
            functionsPhase = 1;
            displayQuestions(); 
        }
    }
    else if(functionsPhase == 1){
        var correct = 0;

        if(!document.querySelector('input[name="Who is carrying this microphone?"]:checked'))
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }
        if(!document.querySelector('input[name="Who died?"]:checked'))
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }
        if(!document.querySelector('input[name="Where did the death occur?"]:checked'))
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }

        if(document.querySelector('input[name="Who is carrying this microphone?"]:checked').value == "B")
        {
            correct++;
        }
        if(document.querySelector('input[name="Who died?"]:checked').value == "B")
        {
            correct++;
        }
        if(document.querySelector('input[name="Where did the death occur?"]:checked').value == "A")
        {
            correct++;
        }

        if(correct == 3)
        {
            document.getElementById("feedback").innerHTML = "";
            functionsPhase = 2;
            displayQuestions();
        }
        else
        {
            document.getElementById("feedback").innerHTML = correct + " Correct";
        }
    }
    else if (functionsPhase == 2){
        var correct = 0;

        if(!document.querySelector('input[name="Where is Mic 2 located?"]:checked'))
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }
        
        if(document.querySelectorAll('input[name="Who is in the room at the beginning of the scene?"]:checked').length < 1)
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }

        if(document.querySelectorAll('input[name="Who is in the room at the end of the scene?"]:checked').length < 1)
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }

        if(document.querySelector('input[name="Where is Mic 2 located?"]:checked').value == "E")
        {
            correct++;
        }

        const highlightedItems = document.querySelectorAll('input[name="Who is in the room at the beginning of the scene?"]:checked');
        const correctAnswers = ["A", "B", "F"];
        
        var correctCheckboxes = 0;
        
        highlightedItems.forEach(function(selection)
        {
            for (let x of correctAnswers) {
                if (x == selection.value) {
                    correctCheckboxes++;
                    return;
                }
            }
            correctCheckboxes = -100;
        });

        if(correctCheckboxes == 3)
        {
            correct++;
        }

        const highlightedItems2 = document.querySelectorAll('input[name="Who is in the room at the end of the scene?"]:checked');
        const correctAnswers2 = ["A", "C"];

        correctCheckboxes = 0;

        highlightedItems2.forEach(function(selection) 
        {
            for (let x of correctAnswers2) {
                if (x == selection.value) {
                    correctCheckboxes++;
                    return;
                }
            }
            correctCheckboxes = -100;
        });

        if(correctCheckboxes == 2)
        {
            correct++;
        }
        
        if(correct == 3)
        {
            document.getElementById("feedback").innerHTML = "";
            functionsPhase = 3;
            displayQuestions();
        }
        else
        {
            document.getElementById("feedback").innerHTML = correct + " Correct";
        }
    }
    else if (functionsPhase == 3){
        var correct = 0;

        if(!document.querySelector('input[name="Where is Mic 3 located?"]:checked'))
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }

        if(document.querySelectorAll('input[name="What was the cause of death?"]:checked').length < 1)
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }

        if(!document.querySelector('input[name="How many people have been on the catwalk?"]').value)
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }

        if(document.querySelector('input[name="Where is Mic 3 located?"]:checked').value == "C")
        {
            correct++;
        }
        
        if(document.querySelector('input[name="What was the cause of death?"]:checked').value == "B")
        {
            correct++;
        }

        if(document.querySelector('input[name="How many people have been on the catwalk?"]').value == "3")
        {
            correct++;
        }

        if(correct == 3)
        {
            document.getElementById("feedback").innerHTML = "";
            functionsPhase = 4;
            displayQuestions();
        }
        else
        {
            document.getElementById("feedback").innerHTML = correct + " Correct";
        }
    }
    else if (functionsPhase == 4){
        var correct = 0;

        if(!document.querySelector('input[name="lighting assistant"]:checked'))
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }
        if(!document.querySelector('input[name="stage manager"]:checked'))
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }
        if(!document.querySelector('input[name="understudy"]:checked'))
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }
        if(!document.querySelector('input[name="sound designer"]:checked'))
        {
            document.getElementById("feedback").innerHTML = "You must give an answer to each question.";
            return;
        }

        if(document.querySelector('input[name="lighting assistant"]:checked').value == "E")
        {
            correct++;
        }
        
        if(document.querySelector('input[name="stage manager"]:checked').value == "C")
        {
            correct++;
        }
        
        if(document.querySelector('input[name="understudy"]:checked').value == "D")
        {
            correct++;
        }
        
        if(document.querySelector('input[name="sound designer"]:checked').value == "G")
        {
            correct++;
        }

        if(correct == 4)
        {
            document.getElementById("feedback").innerHTML = "";
            functionsPhase = 5;
            displayQuestions();
        }
        else
        {
            document.getElementById("feedback").innerHTML = correct + " Correct";
        }
    }
}
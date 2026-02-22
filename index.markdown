<link rel="stylesheet" href="main.css">
<script>
var answer1 = "A";
var answer2 = "B";
var answer3 = "B";
var answer4 = "C";

function checkResults(){
    var correctResults = 0;

    if(document.getElementById("question_pet").value == answer1){
        correctResults++;
    }

    if(document.getElementById("question_people").value == answer2){
        correctResults++;
    }

    if(document.getElementById("question_cause").value == answer3){
        correctResults++;
    }
    
    if(document.getElementById("question_manner").value == answer4){
        correctResults++;
    }

    if(document.getElementById("question_pet").value == ""){
        correctResults = -1;
    }

    if(document.getElementById("question_people").value == ""){
        correctResults = -1;
    }

    if(document.getElementById("question_cause").value == ""){
        correctResults = -1;
    }
    
    if(document.getElementById("question_manner").value == ""){
        correctResults = -1;
    }
    
    if(correctResults >= 4){
        document.getElementById("content").innerHTML = "<h1>Nice Work, Detective!<br/>You've Solved the Case!</h1>"
    }
    else if (correctResults == 3){
        document.getElementById("result").innerHTML = "<h2>You're close, but something still isn't quite adding up.</h2>"
    }
    else if (correctResults == 2){
        document.getElementById("result").innerHTML = "<h2>I'm not sure this story really adds up...</h2>"
    }
    else if (correctResults == 1){
        document.getElementById("result").innerHTML = "<h2>You're pretty far from the facts of the case, detective.</h2>"
    }
    else if (correctResults == 0){
        document.getElementById("result").innerHTML = "<h2>You didn't even get the pet question?</h2>"
    }
        else if (correctResults == -1){
        document.getElementById("result").innerHTML = "<h2>You need to answer every question before you can get feedback.</h2>"
    }
}

</script>


<div id="content">
<h3>What kind of pet did the victim have?</h3>
<select name="What kind of pet did the victim have?" id="question_pet">
    <option value="">-</option>
    <option value="A">Cat</option>
    <option value="B">Dog</option>
    <option value="C">Ferret</option>
    <option value="D">Hyacinth Macaw</option>
</select><br/>

<h3>Including the victim, how many people were in the apartment at the time of death?</h3>
<select name="Including the victim, how many people were in the apartment at the time of death?" id="question_people">
    <option value="">-</option>
    <option value="A">None</option>
    <option value="B">1</option>
    <option value="C">2</option>
    <option value="D">3</option>
</select><br/>

<h3>What was the cause of death?</h3>
<select name="What was the cause of death?" id="question_cause">
    <option value="">-</option>
    <option value="A">Blood Loss</option>
    <option value="B">Poisoning</option>
    <option value="C">Blunt Force</option>
    <option value="D">Heart Attack</option>
</select><br/>

<h3>What was the manner of death?</h3>
<select name="What was the manner of death?" id="question_manner">
    <option value="">-</option>
    <option value="A">Homicide</option>
    <option value="B">Suicide</option>
    <option value="C">Accident</option>
    <option value="D">Natural Causes</option>
</select><br/><br/>

 <button onclick="checkResults()">
    Check
 </button> 

<div id="result">
</div>
</div>


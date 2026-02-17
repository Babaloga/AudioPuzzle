# WHO HAS DONE THIS MURDER?!

<select name="Who Murder" id="whodunnit">
    <option value="A">Suspect A</option>
    <option value="B">Suspect B</option>
    <option value="C">Suspect C</option>
    <option value="D">Suspect D</option>
</select>

 <button onclick="checkResults()">
    Check
 </button> 

<div id="result">
</div>

<script>
var whodunnit = document.getElementById("whodunnit");

var selectedSuspect = "";
var guiltySuspect = "C";
whodunnit.addEventListener('change', function(){
      selectedSuspect = this.value;
    });

function checkResults(){
    if(selectedSuspect == guiltySuspect){
        document.getElementById("result").innerHTML = "CORRECT"
    }
    else{
        document.getElementById("result").innerHTML = "nup"
    }
}

</script>
<link rel="stylesheet" href="main.css">
<script type="text/javascript" src="questionContent.js"></script>
<script type="text/javascript" src="mainBehavior.js"></script>
<div id="content">
    <img id="booklet" src="media\\page1.png"/>
    <div id="button-container">
        <button onClick="decrementBookletPage()"><<</button>
        <button onClick="incrementBookletPage()">>></button>
    </div>
    <div id="audio">
        <div id="audio0" style="display: flex;">
            <h3 style="display: inline">Track 1</h3>
            <audio id="audio0" style="display: inline;" controls>
                <source src="media\audio_track0.mp3" type="audio/mpeg">
            </audio>
        </div>
        <div id="audio1" style="display: flex;">
            <h3 style="display: inline">Track 2</h3>
            <audio id="audio1" style="display: inline;" controls>
                <source src="media\audio_track1.wav" type="audio/wav">
            </audio>
        </div>
        <div id="audio2" style="display: flex;">
            <h3 style="display: inline">Track 3</h3>
            <audio id="audio2" controls style="display: inline;">
                <source src="media\audio_track2.mp3" type="audio/mpeg">
            </audio>
        </div>
    </div>
    <div id="questions"></div>
    <div id="feedback"></div>
    <button onClick="checkAnswers()">Check</button>
</div>


<link rel="stylesheet" href="main.css">
<script type="text/javascript" src="questionContent.js"></script>
<script type="text/javascript" src="mainBehavior.js"></script>
<div id="content">
    <audio id="chime" src="media\chime.wav"></audio>
    <audio id="click" src="media\click.wav"></audio>
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
<br/>
**The Lost Recordings team is:**<br/>
George Eltzroth<br/>
Hansong Li<br/>
Finlay Logan<br/>
Maggie Wang<br/>
Shreesha Yelameli<br/>
{: style="text-align: center;"}	
Art and Layout: Maggie
{: style="text-align: center;"}	
Audio: George, Hansong, Shreesha
{: style="text-align: center;"}	
Game design: George, Hansong, Finlay, Maggie, Shreesha
{: style="text-align: center;"}	
Writing: Finlay, Shreesha
{: style="text-align: center;"}	
Website: George
{: style="text-align: center;"}	
Thank you to Mars So for additional voice acting!
{: style="text-align: center;"}	

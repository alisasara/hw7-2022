var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window") 
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false; 
	console.log("auto play is set to " + video.audioplay)
	console.log("loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	// video.volume();

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= .9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up");
	video.playbackRate /= .9;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0 
	}
	console.log("Video current time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Muted is " + video.muted);
	if (video.muted == true) {
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Unmute'

	} 
	else 
	{video.muted = true;
	document.querySelector('#mute').innerHTML = 'mute'
	}
});


document.querySelector("#slider").addEventListener("click", function(){
	console.log("the current volume is " + video.volume)
	video.volume = this.value / 100
	console.log("the current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});
	
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("oldSchool")
	document.querySelector("#player1").classList.add("oldSchool")
	console.log("successful")

});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original")
	console.log("oldSchool")
	document.querySelector("#player1").classList.remove("oldSchool")
	console.log("successful")

});
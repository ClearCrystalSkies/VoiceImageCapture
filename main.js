var SpeechRecognition = window.webkitSpeechRecogniton;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.result[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML= Content;
    speak();
}
function speak(){
    var synth = window.SpeechSynthesis;
    speak_data = document.getElementById("textbox").innerHTML;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality : 90
});
camera = document.getElementById("camera");
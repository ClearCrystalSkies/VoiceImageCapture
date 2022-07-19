var SpeechRecognition = window.webkitSpeechRecogniton;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);

    var Content = event.result[0][0].transcript;
    
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("Taking selfie---");
        speak();
    }
}
function speak(){
    var synth = window.SpeechSynthesis;
    speak_data = "Taking your selfie in 5 seconds.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    set_timeout(function(){
        take_snapshot();
        save();
    },
    5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality : 90
});
camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="selfie_image" src="'+ data_uri +'">';
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selife_image").src;
    link.href = image;
    link.click();
}
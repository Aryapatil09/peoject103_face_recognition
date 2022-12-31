Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90 
})

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">'
    });
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/B2CiYK95W/model.json',modelloaded);

function modelloaded(){
    console.log("modelloaded")
}

function check(){
    img= document.getElementById("capture_image");
    classifier.classify(img , gotresult);
}

function gotresult(error , result){
    if (error) {
        console.log(error)
    }
    else {
        console.log(result)
        document.getElementById("object_name").innerHTML = result[0].label;
        document.getElementById("object_accuracy").innerHTML= (result[0].confidence *100).toFixed(2);
    }
}
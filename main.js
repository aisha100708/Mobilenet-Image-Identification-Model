Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 100,
    constraints:{
        facingMode: 'environment'
    },
    dest_width: 300,
    dest_height: 280
});
camera = document.getElementById("camera");
Webcam.attach(camera);
function capture() {
    Webcam.snap(function(data_url)  {
        document.getElementById("result").innerHTML = "<img id='captured_img' src='"+data_url+"'>";
    });
}
classifier = ml5.imageClassifier("MobileNet", modelLoaded);
function modelLoaded() {
    console.log("model loaded");
}
function identify() {
    new_img = document.getElementById("captured_img");
    classifier.classify(new_img, getResult)
}
function getResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}
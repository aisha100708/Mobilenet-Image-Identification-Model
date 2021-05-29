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

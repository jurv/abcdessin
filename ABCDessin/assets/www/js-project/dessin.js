var pixelsDeb = {noir:0, blanc:0, rouge:0};
var pixelsFin = {noir:0, blanc:0, rouge:0};
var canvas;
var context;

function analyse(){

    var imgd = context.getImageData(0, 0,canvas.width, canvas.height);
    var pix = imgd.data;

    var result = {noir:0, blanc:0, rouge:0};
    
    var loop = 100;

    // Loop over each pixel and invert the color.
    for (var i = 0, n = pix.length; i < n; i += 4) {
        if(pix[i] == 255 && pix[i+1] == 0 && pix[i+2] == 0){
            result.rouge++;
        } else if((pix[i] == 0 && pix[i+1] == 0 && pix[i+2] == 0  && pix[i+3] == 0) || (pix[i] == 255 && pix[i+1] == 255 && pix[i+2] == 255 )){
            result.blanc++;
        } else if(pix[i] == 0 && pix[i+1] == 0 && pix[i+2] == 0){
            result.noir++;
        }
    }

    //jQuery("#result").html("Rouge : " + result.rouge + "<br>Noir : " + result.noir + "<br> Blanc : " + result.blanc + "<br>Inconnu : " + inconnu);
    return result;
}

function validate(){
    if(pixelsFin.rouge <= pixelsDeb.rouge * 0.2 && pixelsFin.blanc >= pixelsDeb.blanc * 0.98) {
        alert("OK");
    } else {
        alert("KO");
    }
}

function generate(){
    canvas.getContext('2d').clearRect(0,0,canvas.width, canvas.height);
    jQuery('#simple_sketch').sketch('actions',[]);
    context.fillStyle = "#FF0000";
    context.font = "normal 15em Arial";
    context.fillText("Q", canvas.width/3, canvas.height/1.5);
}
let toptext = document.getElementById('top-input');
let bottext = document.getElementById('bot-input');
let subbtn = document.getElementById('create');

subbtn.addEventListener('submit', function(e){
    e.preventDefault();
        // creating the new div
        let newdiv = document.createElement('div');
        newdiv.setAttribute('class', 'output');
        document.body.append(newdiv);

        // creating the image from the url
        let imagesrc = document.getElementById('imsrc').value;
        let image = document.createElement('img');
        image.src = imagesrc;

        // setting container height equal to image height
        newdiv.style.height = image.naturalHeight;
        newdiv.style.width = image.naturalWidth;

        // appending to the div
        newdiv.append(image);
        
        // creating the top text
        let cantop = toptext.value;
        let topdiv = document.createElement('div');
        topdiv.setAttribute('id', 'appttext');
        topdiv.innerText = cantop;
        newdiv.prepend(topdiv);

        // creating the bottom text
        let canbot = bottext.value;
        let botdiv = document.createElement('div');
        botdiv.setAttribute('id', 'appbtext');
        botdiv.innerText = canbot;
        newdiv.append(botdiv);
        
        // remove the meme you click on
        newdiv.addEventListener('click', function(){
            newdiv.remove();
        })
});


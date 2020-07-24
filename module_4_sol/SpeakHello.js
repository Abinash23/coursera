(function(window){
    var speakWork = "Hello";
    var helloSpeaker =function(name){
        console.log(speakWork+" "+name);
    }
    window.helloSpeaker=helloSpeaker;
})(window);
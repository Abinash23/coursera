(function(){
    var name = ["Ram","Vishnu","Radha","Rani","jen","Janakiram"];
    for(var i=0;i<name.length;i++){
        var firstLetter = name[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            console.log("Goodbye"+" "+name[i])
        }
        else {
            console.log("Hello"+" "+name[i])
        }
    }
})();
 var classMates = ['Alejandro', 'Ben', 'Cristian', 'Daniel', 'David', 'DJ', 'Esau',
                    'Fatima', 'Ja\'Ron', 'Rob', 'Jose','Josh', 'Flores', 'Julian',
                     'Kelly', 'Kelvin', 'Kyle', 'Leo', 'Lenise', 'Maya', 'Nathan',
                     'Vanessa', 'Vlad', 'Will', 'Wilson'];

 var speaker;
 var counter = 1;

function getSpeaker(){
    speaker = Math.floor((Math.random() * classMates.length));
    return speaker;
}

for(var i = 0; i < 25; i++){
    document.getElementById("student" + counter).innerHTML = counter + ". " + classMates[getSpeaker()];
    //console.log(counter + ". " + classMates[getSpeaker()]);
    classMates.splice(speaker,1);
    counter++;
}
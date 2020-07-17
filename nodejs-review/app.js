var events=require('events');

//element.on('click', function(){});
/*
var myEmitter=new events.EventEmitter(); //EventEmitter object stored in myEmitter

myEmitter.on('someEvent', function(mssg){
   console.log(mssg);
});

myEmitter.emit('someEvent','the event was emitted');
 */

var util=require('util');

var Person=function (name) {
    this.name=name;
};

util.inherits(Person, events.EventEmitter);

var frost=new Person('Frost');
var cray=new Person('Cray');
var apollo=new Person('Apollo');
var people=[frost,cray,apollo];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name+' said: '+mssg);
    });
});

frost.emit('speak','I Am ThE HuNtEr');
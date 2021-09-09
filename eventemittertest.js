const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

//listen to an event
eventEmitter.on('somethingHappened', (what)=>{console.log("something happened!", what);});

//emit / produce an event:
eventEmitter.emit('somethingHappened', 'garlic');
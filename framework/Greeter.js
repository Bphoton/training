
(function(global, $){ //; is just in case other code executed without a ;
    var Greeter = function(firstname, lastname, language){
        return new Greeter.init(firstname, lastname, language)
    } 

    //private variables
    var supportedLangs = ['en','es']

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged In',
        es: 'Inicio session'
    }

    // protorype of the <new> Greeter Constructor
    // in the Greeter.prototype you have access to:
    //      private var obj funParameter (global, $) 
    //      constructors set var
    //      prototy methods itself      
    Greeter.prototype = { //my methods for my obj constructor //<this> is pointing to the constructor, thus this = self
        fullname: function(){
            return this.firstname + ' ' + this.lastname;
        },
        validate: function(){
            if (supportedLangs.indexOf(this.language) === -1){
                throw 'invalid language';
            }
        },
        greeting: function(){
            return greetings[this.language] + ' ' + this.firstname + '!';
        },
        formalGreeting: function(){
            return formalGreetings[this.language] + ' ' + this.fullname();
        },
        isGreetFormal: function(formal){
            var msg;
            //if undefined or null it will be coersed to false, thus this.greeting()
            if(formal){
                msg = this.formalGreeting();
            } 
            else {
                msg = this.greeting();
            }
            if (console){
                console.log(msg);
            }
            return this //this makes the method chainable 
        },
        log: function(){
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullname());
            }
            return this; //this makes the method chainable 
        },
        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this; //this makes the method chainable 
        },
        HTMLGreeting: function(selector, formal){ //html selector
            if (!$){ //does jquery exits?
                throw "JQuery not loaded";
            }
            if(!selector){ //was the jquery selector passed in?
                throw "No JQuery selector";
            }
            var msg;
            if(formal){ //do you want the greeting to be formal or informal
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            $(selector).html(msg); //select an html as an object ex:{{{ 0: h1#greeting (h1 with the id of greeting) }}}, and call a greeting on it
        
            return this;
        }

    }
    //Constructor //unique to every new object
    Greeter.init = function(firstname, lastname, language){
        var self = this; //now I am inside an object
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';

        self.validate();
    }
    Greeter.init.prototype = Greeter.prototype; //link prototype of myobject to my prototype methods
    global.Greeter = global.G$ = Greeter;
}(window, jQuery));


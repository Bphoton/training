//var g = G$('john', 'doe');
//console.log(g)
//g.isGreetFormal();                                    //set false //you dont need to call the <.prototype> of g
//g.isGreetFormal().isGreetFormal(true)
//g.isGreetFormal().setLang('es').isGreetFormal(true)
//g.isGreetFormal().setLang('fr').isGreetFormal(true)
//console.log(g.fullname());
//console.log(g.validate())                               //var g = G$('john', 'doe','fr');
//g.log()

//change an h1 element (#greeting) to a formal/informal greeting created by your method construcor in Greeting.js (HTMLGreeting())
$('#login').click(function() {
    var loginGreeter = G$('john', 'doe'); //create a new object
    $('#logindiv').hide();
    loginGreeter.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log(); //on your obj, use your setlanguage based on the value that was chosen// call .HTMLGreeting( on h1, make grreting formal)
});
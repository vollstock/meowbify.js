var kkeys = [], meow = "77,69,79,87";

$(document).keydown( function(e) 
{
    kkeys.push( e.keyCode );
    if ( kkeys.toString().indexOf( meow ) >= 0 )
    {
        $(document).unbind('keydown',arguments.callee);
        meowbify();
    }
});

function meowbify() {
    console.log( "meow" );
    window.location = "http://cat."+window.location.host+".meowbify.com"+window.location.pathname;
}
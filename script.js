const quotes = {
    quote1: '"Remember everything is right, until it is wrong. You will know when it is wrong"-Ernest Hemingway',
    quote2: '"A little talent is good thing to have if you want to be a writer. But the only real requirement is the ability to remember every scar"-Stephen King',
    quote3: '"No astist tolerates reality"-Nietzche',
    quote4: '"It is the mark of an educated mind to be able to entertain a thought without accepting it"-Aristotle',
    quote5: '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion"-Albert Camus',
    quote6: '"And in the end we are all just humans ... drunk on the idea tha love and only love could heal our brokeness"-F. Scott Fitzgerald',
    quote7: '"Love many things, for therein lies true strength, and whosoever loves much performs much, and can accomplish much, and what is done is love is done well"-Vincent van Gogh',
    quote8: '"I do not pay attention to the world ending. It has ended for me many times and began again in the morning"-Charles Bukowski',
    quote9: '"I just give myself permission to suck. I find this hugley liberating"-John Green',
    quote10: '"I get up every morning determined to both change the world and have one hell of a good time. Sometimes this makes planning my day diffacult"-E.B. WHite'
};
// selects a random propertyf from any object
var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};
//prints quote from obj to DIV
$(document).ready(function () {
    $(".quoteGen").click(function () {
        $("#quote").html(randomProperty(quotes));
    })
})
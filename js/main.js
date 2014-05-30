function log (data) { console.log(data); }

function autocompleteUrl(term) {
    return 'http://dom.mos.ru/Lookups/GetAddressAutoComplete?term=' + encodeURIComponent(term);
}

var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
];

$(function() {
    var addressInput = $('.m-address');

    addressInput.autocomplete({
        source: 'http://dom.mos.ru/Lookups/GetAddressAutoComplete'
    });

    /*addressInput.on('input', function () {
       var term = addressInput.val();
       log(autocompleteUrl(term));
    });*/
});
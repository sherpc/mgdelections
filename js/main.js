function log (data) { console.log(data); }

function last(array) {
    if (array.length)
        return array[array.length - 1];
    throw 'Array is empty!';
}

$(function() {
    var addressInput = $('.m-address');

    addressInput.autocomplete({
        source: function(request, response) {
            var results = $.ui.autocomplete.filter(houses, request.term);
            response(results.slice(0, 10));
        },
        select: function( event, ui ) {
            var url = ui.item.url;
            var id = last(url.split('/'));
            log(id);
        }
    });


    /*addressInput.on('input', function () {
       var term = addressInput.val();
       log(autocompleteUrl(term));
    });*/
});
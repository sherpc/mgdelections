function log (data) { console.log(data); }

function last(array) {
    if (array.length)
        return array[array.length - 1];
    throw 'Array is empty!';
}

$(function() {
    var addressInput = $('.m-address');
    var ipInput = $('.m-ip');
    var houseIdInput = $('.m-house-id');

    $.get('http://freegeoip.net/json/', function (data) {
        ipInput.val(data.ip);
    });

    addressInput.autocomplete({
        source: function(request, response) {
            var results = $.ui.autocomplete.filter(houses, request.term);
            response(results.slice(0, 10));
        },
        select: function( event, ui ) {
            var url = ui.item.url;
            var id = last(url.split('/'));
            houseIdInput.val(id);
        }
    });
});
//function log (data) { console.log(data); }

function last(array) {
    if (array.length)
        return array[array.length - 1];
    throw 'Array is empty!';
}

function initAddress() {
    var addressInput = $('.m-address');
    var houseIdInput = $('.m-house-id');

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
}

function setIp(data) {
    var ipInput = $('.m-ip');
    ipInput.val(data['ip']);
}

function initCaptcha() {
    var ssForm = $('#'+formID);

    var randomInt = Math.floor((Math.random()*100)+1);
    $('#'+labelName).text('Пожалуйста, введите ' + randomInt + ':');

    ssForm.submit(function(){
        if($('#'+testField).val() == randomInt){
            ssForm.attr({'action' : 'https://docs.google.com/forms/d/' + formKey + '/formResponse'});
            return true;
        }else{
            alert('Введите число "' + randomInt + '"');
            return false;
        }
    });
}

function initWorkflow() {
    var helpQuestionsBlock = $('.m-help-questions');
    $('.m-show-help-button').click(function() {
        helpQuestionsBlock.show();
    });
    $('.m-hide-help-button').click(function() {
        helpQuestionsBlock.hide();
    });
}

$(function() {
    initAddress();
    initWorkflow();
    initCaptcha();
});
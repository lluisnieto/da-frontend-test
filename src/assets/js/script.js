$(document).ready(function(){
    clearValues();
    firstClassTable();
});

function clearValues () {
    var _elems = $('#first-class input[type="checkbox"]');
    $(_elems).each(function () {
        $(this).prop('checked', false);
    });
}

function firstClassTable () {
    var _elems = $('#first-class tbody td');

    $(_elems).on('click', function(event){
        var _row = $(this).closest('tr');
        var _checkbox  = $(this).closest('tr').first('td').find('input[type="checkbox"]');
        var _propState = $(_checkbox).prop('checked');

        $(_row).toggleClass('active');

        if (! ($(event.target).is('input') || $(event.target).is('label'))) {
            _propState === true ? _propState = false : _propState = true;
            $(_checkbox).prop('checked', _propState);
        }


    });
}
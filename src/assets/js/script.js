clearValues();
firstClassTable();


function clearValues () {

}

function firstClassTable () {
    var _elems =  document.querySelectorAll('#first-class tbody td');

    for (var i = 0; i < _elems.length; i++) {
        _elems[i].addEventListener('click', function(e){
            // console.log(e);
            var _this = e.target;
            var _row =  _this.closest('tr');
            var _checkbox = _row.querySelectorAll('input[type="checkbox"');
            var _propState = _checkbox[0].checked;
console.log(_row);
            toggleClass('active', _row);

            if (!(
                e.target.tagName == 'INPUT' ||
                e.target.tagName == 'LABEL'
                )){
                _propState = toggleState(_propState);
                _checkbox[0].checked = _propState;
            }
        });
    }

        /*var _row = $(this).closest('tr');
        var _checkbox  = $(this).closest('tr').first('td').find('input[type="checkbox"]');
        var _propState = $(_checkbox).prop('checked');

        $(_row).toggleClass('active');

        if (! ($(event.target).is('input') || $(event.target).is('label'))) {
            _propState === true ? _propState = false : _propState = true;
            $(_checkbox).prop('checked', _propState);
        }
    });*/
}

function toggleState (state) {
    state === true ? state = false : state = true;
    return state;
}

function toggleClass (cssClass, elem){
    if (elem.classList.contains(cssClass)) {
        elem.className = '';
    } else {
        elem.className += cssClass;
    }
}
clearValues();
firstClassTable();


function clearValues () {
    var _elems =  document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < _elems.length; i++) {
        _elems[i].checked = false;
    }
}

function firstClassTable () {
    var _elems =  document.querySelectorAll('#first-class tbody td');

    for (var i = 0; i < _elems.length; i++) {
        _elems[i].addEventListener('click', function(e){
            // console.log(e);
            var _this = e.target;
            var _row =  _this.closest('tr');
            var _checkbox = _row.querySelectorAll('input[type="checkbox"]');
            var _propState = _checkbox[0].checked;

            if(_this.tagName == 'LABEL') { return false }

            toggleClass('active', _row);

            if (e.target.tagName != 'INPUT'){
                _propState = toggleState(_propState);
                _checkbox[0].checked = _propState;
            }
        });
    }
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
$(function() {

    var n1, n2, startDivision = true,
            inSum = false, inDiv = false, equal = false,
            enterSomeNumbers = false;

    $.session.set('value', '0');
    $('#number').val(0);

    $('#addBtn').click(function() {
        inSum = true;
        if (!equal) {
            if (inDiv) {
                var tot = division(parseFloat($.session.get('value')),
                        parseFloat($('#number').val()));
                alert(tot);
                cleanInput();
                $('#number').val(tot);
                $.session.set('value', tot);
                inDiv = false;
            } else if (inSum) {
                n1 = parseFloat($.session.get('value'));
                n2 = parseFloat($('#number').val());
                $.session.set('value', add(n1, n2));
                //input = session
                $('#number').val($.session.get('value'));
            }
        } else {
            //input = session = value a add
            equal = false;
            inSum = true;
        }
        enterSomeNumbers = true;
    });

    $('#divisionBtn').on('click', function() {
        inDiv = true;
        if (!equal) {
            if (inSum) {
                var sum2 = parseFloat($('#number').val());
                var tot = add(parseFloat($.session.get('value')), sum2);
                $.session.set('value', tot);
                startDivision = true;
                $('#number').val($.session.get('value'));
                inSum = false;
            }
            if (startDivision) {
                n1 = parseFloat($('#number').val());
                $.session.set('value', n1);
                startDivision = false;
                enterSomeNumbers = true;
            } else {
                n1 = parseFloat($('#number').val());
                var tot = division(parseFloat($.session.get('value')),
                        n1);
                $.session.set('value', tot);
                $('#number').val(tot);
            }
            inDiv = true;
        } else {
            equal = false;
            inDiv = true;
            enterSomeNumbers = true;
        }
    });

    $('#cleanLocal').click(function() {
        $('#number').val('0');
        $.session.set('value', 0);
        startDivision = true, inSum = false,
                inDiv = false, equal = false;

    });

    $('#btn1').click(function() {
        if (enterSomeNumbers) {
            cleanInput();
            enterSomeNumbers = false;
        }
        addNumber(1);
    });

    $('#btn2').click(function() {
        if (enterSomeNumbers) {
            cleanInput();
            enterSomeNumbers = false;
        }
        addNumber(2);
    });

    $('#btn3').click(function() {
        if (enterSomeNumbers) {
            cleanInput();
            enterSomeNumbers = false;
        }
        addNumber(3);
    });

    $('#btn4').click(function() {
        if (enterSomeNumbers) {
            cleanInput();
            enterSomeNumbers = false;
        }
        addNumber(4);
    });

    $('#btn5').click(function() {
        if (enterSomeNumbers) {
            cleanInput();
            enterSomeNumbers = false;
        }
        addNumber(5);
    });

    $('#btn6').click(function() {
        if (enterSomeNumbers) {
            cleanInput();
            enterSomeNumbers = false;
        }
        addNumber(6);
    });

    $('#btn7').click(function() {
        if (enterSomeNumbers) {
            cleanInput();
            enterSomeNumbers = false;
        }
        addNumber(7);
    });

    $('#btn8').click(function() {
        if (enterSomeNumbers) {
            cleanInput();
            enterSomeNumbers = false;
        }
        addNumber(8);
    });

    $('#btn9').click(function() {
        if (enterSomeNumbers) {
            cleanInput();
            enterSomeNumbers = false;
        }
        addNumber(9);
    });

    $('#btn0').click(function() {
        if (enterSomeNumbers) {
            cleanInput();
            enterSomeNumbers = false;
        }
        addNumber(0);
    });



    $('#equalBtn').click(function() {
        equal = true;
        var current = parseFloat($.session.get('value'));
        if (inSum || inDiv) {
            if (inSum) {
                current = add(current, parseFloat($('#number').val()));
                inSum = false;
            } else {
                current = division(current, parseFloat($('#number').val()));
                $('#number').val(current);
                inDiv = false;
            }
            $.session.set('value', current); //input = session
        }

        $('#number').val(current);
        var anObject = {
            value: current
        };
        var o = JSON.stringify(anObject);
//        alert(o);
        $.ajax({
            datatype: 'json',
            type: 'POST',
            url: 'http://localhost/Practica1/public/greeting/people',
            data: o,
            success: function() {
                //alert('Ok');
            },
            failure: function() {
                // alert("Fail!");
            }

        });
    });

    var addNumber = function(n) {
        var val = $('#number').val();
        if (val !== '0') {
            val += n;
            $('#number').val(val);
        } else {
            $('#number').val(n);
        }
    };

    var cleanInput = function() {
        $('#number').val('');
    };

    var add = function(a, b) {
        return a + b;

    };

    var division = function(a, b) {
        return a / b;
    };

});
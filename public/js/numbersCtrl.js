$(function() {

    var n1, n2, startDivision = true,
            inSum = false, inDiv = false, equal = false;
    $.session.set('value', '0');
    $('#number').val(0);

    $('#addBtn').click(function() {
        if (!equal) {
            inSum = true;
            n1 = parseFloat($.session.get('value'));
            n2 = parseFloat($('#number').val());
            $.session.set('value', add(n1, n2));
            //input = session
            $('#number').val($.session.get('value'));

        } else {
            //input = session = value a add
            equal = false;
            inSum = true;
        }

    });

    var add = function(a, b) {
        return a + b;

    };

    var division = function(a, b) {
        return a / b;
    };

    $('#cleanLocal').click(function() {
        $('#number').val('0');
        $.session.set('value', 0);
        startDivision = true, inSum = false,
                inDiv = false, equal = false;

    });

    var addNumber = function(n) {
      var val = $('#number').val();
      if(val !== '0'){
          val+=n;
          $('#number').val(val);
      } else {
          $('#number').val(n);
      }
    };

    $('#btn1').click(function() {
        addNumber(1);
    });

    $('#btn2').click(function() {
        addNumber(2);
    });

    $('#btn3').click(function() {
        addNumber(3);
    });

    $('#btn4').click(function() {
        addNumber(4);
    });

    $('#btn5').click(function() {
        addNumber(5);
    });

    $('#btn6').click(function() {
        addNumber(6);
    });

    $('#btn7').click(function() {
        addNumber(7);
    });

    $('#btn8').click(function() {
        addNumber(8);
    });

    $('#btn9').click(function() {
        addNumber(9);
    });

    $('#btn0').click(function() {
        addNumber(0);
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
        }
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
                alert('Ok');
            },
            failure: function() {
                alert("Fail!");
            }

        });
    });
});
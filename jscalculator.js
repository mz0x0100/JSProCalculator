function factorial(n) {
    if (n == 1)
        return 1;
    
    return n * factorial(n - 1);
}


/**
 * Method for finding all facotrials in an equation
*/
function calculateFactorial(equation) {
    // get the index of a facotrial sign
    let factIndex = equation.indexOf('!'); 

    if (factIndex != -1) {
        // get all equation from the beginning to the
        // occrance of the ! sign
        let substr = equation.substring(0, factIndex);
        console.log('Substring: ' + substr);
        console.log('Substring length: ' + substr.length);
        let ops = ['*', '/', '-', '+', '(']
        let finished = false;
        for (let i = substr.length - 1; i >= 0; --i) {
            console.log(substr[i]);

            if (finished)
                break;
            for (let j = 0; j < ops.length; j++) {

                if (substr[i] == ops[j] || (i == 0 && j == ops.length - 1)) {
                    // console.log('Op found');
                    // if i is not in the beginning it means
                    // there's an operator, we remove it by
                    // incrementing i by 1
                    i = i == 0 ? 0 : i += 1;
                    if (substr[i] == '(')
                        i += 1;

                    let fact = substr.substring(i, substr.length);
                    console.log(fact);
                    fact = factorial(fact);
                    console.log('Facotrial of ' + substr.substring(i, substr.length) + ' is ' + fact);
                    
                    console.log('Old substring: '+ substr);
                    // if there's no operator 
                    if (i == 0) {
                        substr = fact;
                    } else {
                        substr = substr.substring(0, i) + fact;
                    }

                    console.log('New substring: ' + substr);
                    finished = true;
                    break;
                }
            }
        }
        
        let nEquation = equation.substring(factIndex+1, equation.length);
        nEquation = substr + nEquation;	

        console.log("Old equation: " + equation);
        console.log("New equation: " + nEquation);

        return calculateFactorial(nEquation);
    }

    return equation;
    
}

function evaluateEx(value) {

    equation = calculateFactorial(value);	

    console.log('########################################');
    console.log('Old equation: ' + value);
    console.log('New equation: ' + equation);
    document.elements.calculate.value = eval(equation);
}

/*
    function for removing the last item in the textarea, toggled by the 'del' button
*/
function deleteLast() {
    let x = document.elements.calculate.value;
    
    // get all the string from beginning removing the last item
    let y = x.slice(0, x.length - 1);
    
    document.elements.calculate.value = y;
}

function toHexadecimal() {
    // evaluateEx(x);
    var x = document.elements.calculate.value;
    for (var i=0; i<=x.length; i++) {
        var y = ((x >>> 0).toString(16));
        document.elements.calculate.value = y;
    }
}
function toDecimal() {
    // evaluateEx(x);
    var x = document.elements.calculate.value;
    for (var i=0; i<=x.length; i++) {
        var y = ((x >>> 0).toString(10));
        document.elements.calculate.value = y;
    }
}

function toOctal() {
    // evaluateEx(x);
    var x = document.elements.calculate.value;
    for (var i=0; i<=x.length; i++) {
        var y = ((x >>> 0).toString(8));
        document.elements.calculate.value = y;
    }
} 
function toBinary() {
    // evaluateEx(x);
    var x = document.elements.calculate.value;
    for (var i=0; i<=x.length; i++) {
        var y = ((x >>> 0).toString(2));
        document.elements.calculate.value = y;
    }
}
let modal = document.getElementById('model');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
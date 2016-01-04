
$(function() {




function dollarToPound() {
  document.converter.pound.value = document.converter.dollar.value * 0.670
}

function poundToDollar() {
document.converter.dollar.value = document.converter.pound.value * 1.00
}

});
// function currencyConverter() {
//     arguments[1] = 'dollar';
//     arguments[2] = 'pound';
//     arguments[3] = 'amount';
// }

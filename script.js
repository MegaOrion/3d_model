var nonLinearSlider = document.getElementById('slider');

noUiSlider.create(nonLinearSlider, {            
    start: [1000],
    range: {
        'min': [100, 100],
        '33%': [10000, 1000],
        '66.66%': [250000, 1000],
        'max': [500000]
    }
});

var nodes = document.querySelector('#valuenow > span');

nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
nodes.innerHTML = values[handle];
totalCost()		
});

function tariffCheck(){
    
    let tariff = document.querySelectorAll('.buttons_style');
    
    for(var i=0; i < tariff.length; i++){
        if(tariff[i].checked){
                                
            document.querySelector('#checkedTariff > span').innerHTML = tariff[i].value;
        }
    }

    totalCost()
}	

function totalCost(){
    const valueTariff = document.querySelector('#checkedTariff > span'),
        totalPrice = document.querySelector('#totalPrice > span');
        
    totalPrice.innerHTML = +nodes.textContent * +valueTariff.textContent;
}
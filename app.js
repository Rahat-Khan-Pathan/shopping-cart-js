let totalAmount=0;

// To change the input numbers 
function inputChange(inputId,val,check)
{
    inputValue = parseInt(document.getElementById(inputId).value);
    if(check === 'plus') inputValue+=val;
    else if(inputValue>=1) inputValue+=val;
    document.getElementById(inputId).value = inputValue;
}

// To set the value of money 
function setValue(setId,getId,val)
{
    value = parseInt(document.getElementById(setId).innerText);
    newValue = val * parseInt(document.getElementById(getId).value);
    document.getElementById(setId).innerText = newValue;
}

// To set the total money 
function setSubTotal(id)
{
    let subTotal=parseInt(document.getElementById('sub-total').innerText);
    if(id=='iphone-plus') subTotal+=1219;
    else if(id=='iphone-minus') subTotal-=1219;
    else if(id=='case-plus') subTotal+=59;
    else subTotal-=59;
    document.getElementById('sub-total').innerText = subTotal;
}

// To edit all calculations after removing an item 
function editCalculations(id)
{
    let subTotal=0;
    if(id=='remove-1' && document.getElementById('remove-2')!=null)
    {
        subTotal = parseInt(document.getElementById('case-value').innerText);
    }
    else if(id=='remove-2' && document.getElementById('remove-1')!=null)
    {
        subTotal = parseInt(document.getElementById('iphone-value').innerText);
    }
    document.getElementById('sub-total').innerText = subTotal;
    setTax();
    setTotal();
}

// To set tax value 
function setTax()
{
    let tax = (parseFloat(document.getElementById('sub-total').innerText)*12)/100;
    document.getElementById('tax').innerText = tax.toFixed(2);
}

// To set Total amount of money 
function setTotal()
{
    let total = parseFloat(document.getElementById('sub-total').innerText) + parseFloat(document.getElementById('tax').innerText);
    document.getElementById('total').innerText = total.toFixed(2);
    totalAmount=total.toFixed(2);
}

// To remove an item 
function closeOption(event)
{
    if(event.target.className == 'remove-item')
    {
        editCalculations(event.target.id);
        event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode);
    }
}

// Iphone plus button 
document.getElementById('iphone-plus').addEventListener('click',function(event){
    inputChange('iphone-input',1,'plus');
    setValue('iphone-value','iphone-input',1219);
    setSubTotal('iphone-plus');
    setTax();
    setTotal();
});

// Iphone minus button 
document.getElementById('iphone-minus').addEventListener('click',function(event){
    inputValue = parseInt(document.getElementById('iphone-input').value);
    if(inputValue>0)
    {
        setSubTotal('iphone-minus');
        setTax();
        setTotal();
    }
    inputChange('iphone-input',-1,'minus');
    setValue('iphone-value','iphone-input',1219);
})

// Phone Case plus button 
document.getElementById('case-plus').addEventListener('click',function(event){
    inputChange('case-input',1,'plus');
    setValue('case-value','case-input',59);
    setSubTotal('case-plus');
    setTax();
    setTotal();
});

// Phone case minus button 
document.getElementById('case-minus').addEventListener('click',function(event){
    inputValue = parseInt(document.getElementById('case-input').value);
    if(inputValue>0)
    {
        setSubTotal('case-minus');
        setTax();
        setTotal();
    }
    inputChange('case-input',-1,'minus');
    setValue('case-value','case-input',59);
})

// DOM Bubble to remove an item
document.getElementById('col').addEventListener('click',function(event){
    closeOption(event);
})

// Checkout button 
document.getElementById('checkout').addEventListener('click',function()
{
    if(totalAmount==0)
    {
        document.getElementById('container-1').style.display='none';
        document.getElementById('container-2').style.display='block';
        document.getElementById('checkout-text').innerText = 'Please select something first!'
    }
    else
    {
        document.getElementById('container-1').style.display='none';
        document.getElementById('container-2').style.display='block';
        document.getElementById('checkout-value').innerText=totalAmount;
    }
})
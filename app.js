 const amt = document.querySelector('#amount');
 const int = document.querySelector('#interest');
 const yrs = document.querySelector('#years');
 const cal = document.querySelector('#calc'); 
 const showMonth = document.querySelector('#monthly-payment');
 const showInterest = document.querySelector('#total-interest');
 const showAmount = document.querySelector('#total-payment'); 
   calculate();

 function calculate(){
   cal.addEventListener('click', result);
  }
  function result(e){   
   const am = amt.value; 
   const interest = int.value;
   const yr = yrs.value; 
   const amountOfInterest = (am*interest)/100;
   const interestInMonths = yr*12*amountOfInterest;
   const totalPayment = parseInt(am) + interestInMonths; 
   const monthlyPaid = totalPayment/12; 
   if(am.value||interest.value||yr.value!=null){

     showMonth.value  = monthlyPaid;
     showAmount.value = totalPayment;
     showInterest.value = interestInMonths;
    }else{
      showError('Please check your values...');
    }
   e.preventDefault();

  }
  function showError(error){
    const diverror = document.createElement('div');
    diverror.className = 'alert alert-danger';
    diverror.appendChild(document.createTextNode(error));
    const add = document.querySelector('.card ');
    const above = document.querySelector('.heading' );
    add.insertBefore(diverror, above);
    setTimeout(clearError, 2000);

  }
  function clearError(){
    document.querySelector('.alert').remove();
  }
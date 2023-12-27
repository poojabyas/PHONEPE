document.getElementById("paymentButton").addEventListener("click", function () {
            
    document.getElementById("processing").style.display = "block";
    document.getElementById("success").style.display = "none";
    document.getElementById("failure").style.display = "none";

    
    let paymentPromise = new Promise(function (resolve, reject) {
        
        setTimeout(function () {
            
            let isPaymentSuccessful = Math.random() < 0.5;

            if (isPaymentSuccessful) {
                resolve();  
            } else {
                reject();
            }
        }, 3000); 
    });

    
    paymentPromise.then(function () {
            
            document.getElementById("success").style.display = "block";
            document.getElementById("processing").style.display = "none";
        })
        .catch(function () {
            
            document.getElementById("failure").style.display = "block";
            document.getElementById("processing").style.display = "none";
        });
});
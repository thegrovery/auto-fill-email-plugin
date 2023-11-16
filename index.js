/********************************************

AUTO FILL EMAIL PLUGIN

NOTES:
	-	JS session closes when tab/browser is closed.
	-	JS localstorage can be used for semi premanent storage

code example:
	
	var searchParams = new URLSearchParams(window.location.search); //store as var
	searchParams.has('sent'); //true/false

UTM Parameter example:

	https://website.com?utm_source=test&utm_medium=test&utm_campaign=test&utm_term=test&utm_content=test

	
********************************************/

//Target the input you want auto-filled
	var targetInput = document.querySelector('.secretEmail');

//Target the URL paramter you want to use
	var targetParameter = "grovery_id";

// Array of pairs (secret code, email address)
// Use an obscure, random code in production
	const secretCodeEmailPairs = [
	    { secretCode: 'code1', email: 'alecr@thegrovery.com' },
	    { secretCode: 'code2', email: 'scottj@thegrovery.com' },
	    { secretCode: 'code3', email: 'jessicag@thegrovery.com' },
	    { secretCode: 'code4', email: 'caylao@thegrovery.com' },
	    { secretCode: 'code5', email: 'isabelled@thegrovery.com' }
	];

// Function to get email by secret code
	function getEmailBySecretCode(code) {
	    const pair = secretCodeEmailPairs.find(pair => pair.secretCode === code);
	    return pair ? pair.email : 'No email detected';
	}

// Example usage
	//const email = getEmailBySecretCode('code1');
	//console.log(email); // Outputs: user1@example.com


//Grab URL Parameters
	var searchParams = new URLSearchParams(window.location.search); 
	var paramValue = searchParams.get(targetParameter);
	//console.log(paramValue);

//Execute functions
	const email = getEmailBySecretCode(paramValue);
	//console.log(email);
	targetInput.innerText = email;
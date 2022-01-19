//Log in validation
function validateUserData(userName, password)
{	
	if (userName == null || userName == "" )
	{
		alert("Please fill in the username");
		return false;
	}
	
	if (password == null || password == "" )
	{
		alert("Please fill in the password");
		return false;
	}
	
	if(password.length != 11)  
	{  
		alert("Password length must be 11");
		return false;
	}  
}

//Validate email address
function validateEmail(email)
{	
	if (email == ""){
		return;
	}
	//Email format validation
	var emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!emailPattern.test(email))  
	{  
		alert('Invalid email format. Please enter valid email');  
		return false;
	}  
}			

//function for calculation of the order
function calculateTotal(quantity, burritosize, setTotal, discountPercentage=0)
{	
	if (quantity == "" || burritosize == "")
	{
		return;
	}
	var numbers = /^[0-9]+$/;
	if(quantity.match(numbers))
	{
		var totalprice=0;
		if  (burritosize == "Large") {
			totalprice = 5 * quantity
		}
		else if (burritosize == "Extra-Large") {
			totalprice = 7.5 * quantity
		}
		else if (burritosize == "Supersize") {
			totalprice = 17 * quantity;			
		}
		
		setTotal(totalprice*(1-discountPercentage));		
		return true;
	}
	else
	{
		alert('Please input numeric characters only');
		return false;
	}
}
//supersize alert
function healthAlert(burritosize){
	if  (burritosize == "Supersize") {
		alert("Warning : You sure you going for SuperSize?")	
	}
}

//voucher verification and apply
function applyVoucher (voucher, setDiscount) 
{
	if(voucher == "" ) {
		return;
	}
	if (voucher == "mextexgood"){
		alert("Whoooop, you got a 13.5% discount");
		setDiscount(0.135);
	}
	else {
		alert("Sorry, not a valid code")
		setDiscount(0);
		return false;
	}
}


//Place order function
function validateOrder(){
	//add any logic to validate the order before submitting
	return true;
}

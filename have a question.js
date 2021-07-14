 function sendmail(){
    
			var name = $('#Name').val();			

			// var body = $('#body').val();

			var Body='Name: '+name;
			//console.log(name);

			Email.send({
        SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
				To: 'raash6969@gmail.com',
				From: "raash6969@gmail.com",
				Subject: "New message on contact from "+name,
				Body: Body
			}).then(
				message =>{
					//console.log (message);
					if(message=='OK'){
					alert('Your mail has been send. Thank you for connecting.');
					}
					else{
						console.error (message);
						alert('There is error at sending message. ')
						
					}

				}
			);



		}
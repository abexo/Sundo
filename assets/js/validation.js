const validate = new window.JustValidate("#form")

const validation = new JustValidate("#form")

validation
	.addField("#fullname", [
		{
			rule: "minLength",
			value: 3,
		},
		{
			rule: "maxLength",
			value: 30,
		},
		{
			rule: "required",
			errorMessage: "Please fill in your full name",
		},
		{
			rule: "customRegexp",
			value: /^[a-zA-Z]+$/,
			errorMessage: "Only letters allowed",
		},
	])
	.addField("#email", [
		{
			rule: "required",
			errorMessage: "Please fill in your email",
		},
		{
			rule: "email",
			errorMessage: "Email is invalid!",
		},
		{
			rule: "customRegexp",
			value: /^[A-Za-z0-9]+(.|_)+[A-Za-z0-9]+@+spitogatos.gr$/,
			errorMessage: "Accepted email only from @spitogatos.gr",
		},
	])
	.addField("#phone", [
		{
			rule: "required",
			errorMessage: "Please fill in your phone",
		},
		{
			rule: "customRegexp",
			value: /^\d+$/,
			errorMessage: "Please use only numbers",
		},
	])
	.addField("#message", [
            {
             rule: 'maxLength',
             value: 100,
            }
	])
	.addRequiredGroup(
		'#checkbox_group',
		'You should select at least one option'
	  )


    $('#message').keyup(function() {
    
        var characterCount = $(this).val().length,
            current = $('#current'),
            maximum = $('#maximum'),
            theCount = $('#the-count');
          
        current.text(characterCount);
       
        
        /*This isn't entirely necessary, just playin around*/
        if (characterCount < 70) {
          current.css('color', '#666');
        }
        if (characterCount > 70 && characterCount < 90) {
          current.css('color', '#6d5555');
        }
        if (characterCount > 90 && characterCount < 100) {
          current.css('color', '#793535');
        }
        if (characterCount > 100 && characterCount < 120) {
          current.css('color', '#841c1c');
        }
        if (characterCount > 120 && characterCount < 139) {
          current.css('color', '#8f0001');
        }
        
        if (characterCount >= 140) {
          maximum.css('color', '#8f0001');
          current.css('color', '#8f0001');
          theCount.css('font-weight','bold');
        } else {
          maximum.css('color','#666');
          theCount.css('font-weight','normal');
        }
        
            
      });
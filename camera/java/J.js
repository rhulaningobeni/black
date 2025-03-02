 <script src="https://smtpjs.com/v3/smtp.js"></script>
    
var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
            e.preventDefault()
            console.log('hi');

            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;
    var body = 'name: ' + name + '<br/> email:' + email + '<br/> subject:' + subject + '<br/> message:' + message + 'phone number:' + contact;



            Email.send({
                SecureToken: "ffcc7d0f-01e2-4ff2-87cf-664d9c5d568f",
                To: 'maposatinotends78@gmail.com',
                From: "maposatinotenda245@gmail.com",
                Subject: "contact message",
                Body: body
            }).then(
                message => alert(message)
    );
    
       if (!name || !email || !message || !subject || !contact) {
        e.preventDefault();
        alert("Please fill in all fields.");
    }

        })


    


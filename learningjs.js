        function senddata() {
            let username = document.getElementById("username").value
            validateUsername(username)

            let email = document.getElementById("email").value
            validateEmail(email)

            let password = document.getElementById("password").value
            validatePassword(password)

            let gender = document.querySelector("input[name='gender']: checked").value
            let genClicked = gender ? gender.value : false
            validateGender(genClicked)


            let date = document.getElementById("date").value
            validateDate(date)
        }

        function validateUsername(username) {
            let regex = /^[A-Za-z0-9]+$/
            if (username === '') {
                alert("username cannot be empty")
            } else if (username.length < 5 || username.length > 15) {
                alert("username should contain min 5 and max 15 character")
            } else if (regex.test(username) == false) {
                alert("username should be alpha numeric")
            } else {
                alert("valid username")
            }
        }

        function validatePassword(password) {
            let digRegex = /[0-9]/
            let lowRegex = /[a-z]/
            let upperRegex = /[A-Z]/
            if (password === '') {
                alert("password cannot be empty")
            } else if (password.length > 8 || password.length < 15) {
                alert("password should contain min 8 and max 15 character")
            } else if (digRegex.test(password) == false) {
                alert("password should contain at least 1 digit")
            } else if (lowRegex.test(password) == false) {
                alert("password should contain at least 1 lowercase")
            } else if (upperRegex.test(password) == false) {
                alert("password should contain at least 1 uppercase ")
            } else {
                alert("valid password")
            }
        }

        function validateEmail(email) {
            regex = /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/
            if (email === '') {
                alert("email can not be empty")
            } else if (regex.test(email) == false) {
                alert("email should follow the format- alphanumeric@alphabets.alphabets ")
            } else {
                alert("valid email")
            }
        }



        function validateGender(gender) {
            if (gender == false) {
                alert("gender cannot be empty")
            } else {
                alert("valid gender")
            }
        }

        function validateDate(date) {
            if (date === '') {
                alert("dob cannot be empty")
            } else {
                alert("valid dob")
            }
        }
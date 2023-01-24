const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

    const loginFormHandler = async (event) => {
        // Stop the browser from submitting the form so we can do so with JavaScript
        event.preventDefault();
      
        // Gather the data from the form elements on the page
        const email = document.querySelector('#email-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();
      
        if (email && password) {
          // Send the e-mail and password to the server
          const response = await fetch('/api/mystore/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            document.location.replace('/marketplace');
          } else {
            alert('Failed to log in');
          }
        }
      };
      document
        .querySelector("div.input-field input[name='loginBtn']")
        .addEventListener('click', loginFormHandler);
      
      const registerFormHandler = async (event) => {
        // Stop the browser from submitting the form so we can do so with JavaScript
        event.preventDefault();
      
        // Gather the data from the form elements on the page
        const username= document.querySelector('#signUpName').value.trim();
        const email= document.querySelector('#signUpEmail').value.trim();
        const password= document.querySelector('#signUpPassword').value.trim();
      
      if (username && email && password) {
          // Send the e-mail and password to the server
          const response = await fetch('/api/mystore/signup', {
            method: 'POST',
            body: JSON.stringify({username, email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            document.location.replace('/marketplace');
          } else {
            alert('Failed to log in');
          }
        }
      };
      
      document
        .querySelector("div.input-field input[name='signupBtn']")
        .addEventListener('click', registerFormHandler);
      

        // add js to grab value of each one
        // then post to api/newitem/post input value in body
        const newitemData = async (event) => {
          // Stop the browser from submitting the form so we can do so with JavaScript
          event.preventDefault();
        console.log("click")
        const image= document.querySelector('#image').value.trim();
        const description= document.querySelector('#description').value.trim();
        const price= document.querySelector('#price').value.trim();
        const product_name= document.querySelector('#product_name').value.trim();
        const seller= document.querySelector('#seller').value.trim();



        if (image && description && price && product_name && seller) {
          // Send the product data to the server
          const response = await fetch('/api/newItem', {
            method: 'POST',
            body: JSON.stringify({image, description, price, product_name, seller}),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            document.location.replace('/mystore');
          } else {
            alert('Failed to add item');
          }
        }
      }
    document
      .querySelector(".addItem")
      .addEventListener('click', newitemData);
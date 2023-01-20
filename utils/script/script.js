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





// $('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
//     var $this = $(this),
//         label = $this.prev('label');
  
//         if (e.type === 'keyup') {
//               if ($this.val() === '') {
//             label.removeClass('active highlight');
//           } else {
//             label.addClass('active highlight');
//           }
//       } else if (e.type === 'blur') {
//           if( $this.val() === '' ) {
//               label.removeClass('active highlight'); 
//               } else {
//               label.removeClass('highlight');   
//               }   
//       } else if (e.type === 'focus') {
        
//         if( $this.val() === '' ) {
//               label.removeClass('highlight'); 
//               } 
//         else if( $this.val() !== '' ) {
//               label.addClass('highlight');
//               }
//       }
  
//   });
  
//   $('.tab a').on('click', function (e) {
    
//     e.preventDefault();
    
//     $(this).parent().addClass('active');
//     $(this).parent().siblings().removeClass('active');
    
//     target = $(this).attr('href');
  
//     $('.tab-content > div').not(target).hide();
    
//     $(target).fadeIn(600);
    
//   });
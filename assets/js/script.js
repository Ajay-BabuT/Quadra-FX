document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*-------------------nav--------------------------*/
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");

// JS code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;
  if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
    nav.classList.remove("active");
  }
});
/*-------------------nav--------------------------*/




// service cards 
document.querySelectorAll('.vdo-cards video').forEach(video => {
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});


/*-------------------ajax--------------------------*/

//form script

$("#submit-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbw07wFYvy8KKu9fFjqFsEsn8lFK0MZUB8bnJhbXm02GNcGJrZtZ43r6DjrNTqjLako8/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })


/*-------------------video--------------------------*/
const video = document.getElementById('trd-video');
    let isPlaying = false;

    // Play on hover
    video.addEventListener('mouseenter', () => {
      video.play();
    });

    // Pause and reset on mouse leave
    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0; // Reset the video to the start
    });

    // Toggle play/pause on click
    video.addEventListener('click', () => {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      isPlaying = !isPlaying; // Toggle the state
    });
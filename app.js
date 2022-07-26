// METHOD ONE

const firstSection = document.querySelector(".first-sec");
const secondSection = document.querySelector(".second-sec");

let button = document.querySelectorAll("button");
let section = document.querySelectorAll(".loop-sec");

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", oneBtn);

  count = 0;

  function oneBtn(e) {
    count++;

    if (count) {
      for (x = 0; x < section.length; x++) {
        if (
          e.target.parentElement.parentElement.parentElement.classList.contains(
            "first-sec"
          )
        ) {
          firstSection.style.display = "none";
          secondSection.style.display = "flex";
        } else if (
          e.target.parentElement.parentElement.parentElement.classList.contains(
            "second-sec"
          )
        ) {
          secondSection.style.display = "none";
          firstSection.style.display = "flex";
        }
      }
    }

    e.preventDefault();
  }
}



// METHOD 2

// const appData = [
//     {
//         firstName: 'IFEJESU',
//         Job: "Engineer",
//         description: `I’ve been interested in coding for a while but never taken the jump, until now.
//         I couldn’t recommend this course enough. I’m now in the job of my dreams and so
//         excited about the future.`,
//         image: '/images/image-john.jpg'
//     },
//     {
//         firstName: 'SAMUEL',
//         Job: "Doctor",
//         description: ` If you want to lay the best foundation possible I’d recommend taking this course.
//         The depth the instructors go into is incredible. I now feel so confident about
//         starting up as a professional developer. ”`,
//         image: '/images/image-tanya.jpg'

//     },
//     {
//         firstName: 'BOLAJI',
//         Job: "Business man",
//         description: `I’ve been interested in coding for a while but never taken the jump, until now.
//         I couldn’t recommend this course enough. I’m now in the job of my dreams and so
//         excited about the future.`,
//         image: '/images/image-john.jpg'
//     },
//     {
//         firstName: 'DAVID',
//         Job: "Mathematician",
//         description: ` If you want to lay the best foundation possible I’d recommend taking this course.
//         The depth the instructors go into is incredible. I now feel so confident about
//         starting up as a professional developer. ”`,
//         image: '/images/image-tanya.jpg'
//     } 
// ]

// const leftButton = document.querySelector('.angle-left').addEventListener('click', leftClick)
// const rightButton = document.querySelector('.angle-right').addEventListener('click', rightClick)


// let counter = 0;

// function leftClick (e){
//     if(counter > 0){
//         counter--;
//     } else{
//         counter = appData.length -1;
//     }

//     ui(counter)
//     console.log(counter);

//     e.preventDefault();
// }

// function rightClick (){
//     if(counter >= 0 && counter < appData.length -1){
//         counter++
//     } else {
//         counter = 0;
//     }
//     ui(counter)
//     console.log(counter)
// }

// function ui(counter){
//     const name = document.querySelector('h4');
//     const job = document.querySelector('.job');
//     const description = document.querySelector('.des')
//     const image = document.querySelector('.tanya-john')

//     description.innerHTML = appData[counter].description
//     job.innerHTML = appData[counter].Job
//     name.innerHTML = appData[counter].firstName
// }




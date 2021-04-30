// profiles is an identifier for the array of objects that needs to be added
const profiles = [
  {
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "JavaScript", "C", "Go"
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS"
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  }
 ]



 // Code that requires the DOM be loaded should not be run until the DOM is loaded
 document.addEventListener("DOMContentLoaded", function(){


   //map will loop over each object in the array with a method
   //end result - new card for each profile (which is an object in the array)

  let cardsHTML = profiles.map(function(x){

    //creating HTML inserting each property of the object
    let card1 = `
    <section class="card">
      <div class="col-lg-6 col-sm-4 col-xs-12 name-photo">
        <img src="./img/headshot.jpg" alt="Paolo Maldini, the dog, Headshot" width="100%">
        <h1>${x.name}</h1>
        <h2>${x.jobTitle}</h2>
      </div>
      <article class="col-lg-6 col-sm-8 col-xs-12 info">
        <div>
          <h3>Company:</h3>
          <p>${x.company}</p>
        </div>
        <div>
          <h3>Experience:</h3>
          <p>${x.experience}</p>
        </div>
        <div>
          <h3>School:</h3>
          <p>${x.school}</p>
        </div>
        <div>
          <h3>Major:</h3>
          <p>${x.major}</p>
        </div>
        <div>
          <h3>Email:</h3>
          <p><a href="mailto:${x.email}" target="_blank">${x.email}</a></p>
        </div>

        <div>
          <h3>Coding Languages</h3>
          <ul>`;
    // turn the codeLanguages array into a string with a space between elements
     let language = x.codeLanguages;
     console.log(language)
     let languagesString = language.join(", ")

     /// playing with trying to get the languages to view as an unordered html list

    let listLanguage = language.map(function(i){
       let list = `<li>`
        list += `${i}`
        list +=`</li>`
        console.log(list)
        return list
    });
    listLanguage = listLanguage.join(" ")
    console.log(listLanguage)


    let card2 =
          `${listLanguage}</ul>
        </div>
        <div>
          <img src="./img/linkedin.svg" alt="Linkedin Blue and White Icon">
          <p><a href="mailto:${x.linkedInUrl}" target="_blank">${x.name} Linkedin Profile</a></p>
        </div>
      </article>
    </section>`;
    cards = card1 + card2
    return cards;


  });
  //Adding the HTML above to the index.html where the class .cards is located.
  document.querySelector('.profile-cards').innerHTML = cardsHTML


})

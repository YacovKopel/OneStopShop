

//Create an array of objects that contains the data for the div elements.
const data = [
    {
      id: "1", 
      image: "https://randomuser.me/api/portraits/men/82.jpg",
      date_created: 1-1-23,
      price: "$20.29",
      Description: "new",
      Gender: "male",
      size: "small"
     
    },
    {
      id: "John Doe", 
      image: "https://randomuser.me/api/portraits/men/82.jpg",
      date_created: 32,
      price: "male",
      Description: "female",
      Gender: "Boston MA",
     
    },
    {
      id: "John Doe", 
      image: "https://randomuser.me/api/portraits/men/82.jpg",
      date_created: 32,
      price: "male",
      Description: "female",
      Gender: "Boston MA",
     
    }
  ];
  
  //Create a function that will create the div elements and add the appropriate class and content to each of the div elements.
  const profiles = profileIterator(data);
  
  //Call the next event
  nextProfile();
  
  //Next Event
  document.getElementById("next").addEventListener("click", nextProfile);
  
  //Next Profile Display
  function nextProfile() {
    const currentProfile = profiles.next().value;
  
    if (currentProfile !== undefined) {
      document.getElementById("profileDisplay").innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">Name: ${currentProfile.name}</li>
          <li class="list-group-item">Age: ${currentProfile.age}</li>
          <li class="list-group-item">Location: ${currentProfile.location}</li>
          <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
      `;
  
      document.getElementById("imageDisplay").innerHTML = `<img src="${currentProfile.image}">`;
    } else {
      //No more profiles
      window.location.reload();
    }
  }
  
  //Profile Iterator
  function profileIterator(profiles) {
    let nextIndex = 0;
  
    return {
      next: function() {
        return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
      }
    };
  }
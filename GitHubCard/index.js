
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


import axios from 'axios'
const entryPoint = document.querySelector('div.cards');


let users = [
  'scamillegomez',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
]

function grabData(array){
  console.log('About to fetch data!');
  array.forEach(username=>{
    axios.get(`https://api.github.com/users/${username}`)
    .then(result=>{
      console.log(result.data);
      const profileCard = socialCardMaker(result.data);
      entryPoint.appendChild(profileCard);
  })
  .catch(error=>{
    console.log(error);
  })
  })
}

grabData(users);


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



  

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
  function socialCardMaker(obj){
    
    // build the html elements
    let gitCard = document.createElement('div');
    let gitCardImg = document.createElement('img');
    let gitCardInfoContainer = document.createElement('div');
    let gitCardTitle = document.createElement('h3');
    let gitCardUserName = document.createElement('p');
    let gitCardLocation = document.createElement('p');
    let gitCardProfile = document.createElement('p');
    let gitCardProfileURL = document.createElement('a');
    let gitCardFollowers = document.createElement('p');
    let gitCardFollowing = document.createElement('p');
    let gitCardBio = document.createElement('p');

    // set class names
    gitCard.classList.add('card');
    gitCardInfoContainer.classList.add('card-info');
    gitCardTitle.classList.add('name');
    gitCardUserName.classList.add('username');

    // set text content
    gitCardImg.src = obj.avatar_url;
    gitCardTitle.textContent = obj.name;
    gitCardUserName.textContent = obj.login;
    gitCardLocation.textContent = `Location: ${obj.location}`;
    gitCardProfile.textContent = 'Profile:';
    gitCardProfileURL.href = obj.html_url;
    gitCardProfileURL.textContent = obj.html_url;
    gitCardFollowers.textContent = `Followers: ${obj.followers}`;
    gitCardFollowing.textContent = `Following: ${obj.following}`;
    gitCardBio.textContent = `Bio: ${obj.bio}`;

    // create hierarchy
    gitCard.appendChild(gitCardImg);
    gitCard.appendChild(gitCardInfoContainer);
    gitCardInfoContainer.appendChild(gitCardTitle);
    gitCardInfoContainer.appendChild(gitCardUserName);
    gitCardInfoContainer.appendChild(gitCardLocation);
    gitCardInfoContainer.appendChild(gitCardProfile);
    gitCardProfile.appendChild(gitCardProfileURL);
    gitCardInfoContainer.appendChild(gitCardFollowers);
    gitCardInfoContainer.appendChild(gitCardFollowing);
    gitCardInfoContainer.appendChild(gitCardBio);

    return gitCard;
  }


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

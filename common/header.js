const header =`<div class="nav-left flex-div">
<img src="../images/menu.png" class="menu-icon" />
<img src="../images/logo.png" click="logo" />
</div>
<div class="nav-middle flex-div">
<div class="search-box flex-div">
    <input type="text" placeholder="search Here" id="searchInput" value=''/>
    <button id="search">Search</button>
</div>

<img src="../images/voice-search.png" class="mic-icon" />
</div>
<div class="nav-right flex-div">
<img src="../images/upload.png" />
<img src="../images/more.png" />
<img src="../images/notification.png" />
<img src="../images/Jack.png" class="user-icon" />
${JSON.parse(localStorage.getItem('profileDetails')).username!==''?`<p>${JSON.parse(localStorage.getItem('profileDetails')).username }</p>`:`<a href="signup.html" id=signupid>Sign up</a>`}
</div>
`;




document.getElementsByTagName("nav")[0].innerHTML = header;
const SEARCH_KEY = "AIzaSyCGLXN9fJuDBWS_y2tUkpNOn4lbA3TYjHI";

const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?key=${SEARCH_KEY}`
const getSearchVideos = async()=>{
    const searchValue = document.getElementById("searchInput").value;
    console.log(searchValue);
    const fetchSearchData = await fetch(searchUrl+`&q=${searchValue}`);
    const searchResults = await fetchSearchData.json();
    getVideoID(searchResults.items);
    window.location.href = "../searchResults.html";
}

const searchButton = document.getElementById("search");

searchButton.addEventListener("click",()=>{
    getSearchVideos();

})

const getVideoID = (items)=>{
    localStorage.removeItem("videoId");
    const filteredIds = items.map((item)=>item?.id?.videoId).join(',');
    localStorage.setItem("videoId",filteredIds);

}


// ${JSON.parse(localStorage.getItem('profileDetails')).username!==''?`<p>${JSON.parse(localStorage.getItem('profileDetails')).username }</p>`:`<a href="signup.html" id=signupid>Sign up</a>`}
//<a href="signup.html" id=signupid>Sign up</a>



// Remove localstorage
// localStorage.removeItem('profileDetails');
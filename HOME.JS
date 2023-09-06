// var menuIcon=document.querySelector(".menu-icon")
// var sidebar=document.querySelector(".sidebar")
// var container=document.querySelector(".container")
// menuIcon.onclick=function(){
//     sidebar.classList.toggle("small-sidebar")
//     container.classList.toggle("large-container")
// }

const API_KEY = 'AIzaSyBb6IGMRDG3bLPKS7gmWfse21iIVRp8PMk';
const videoListApi = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;

const getVideoList = async()=>{
    const fetchData = await fetch(videoListApi);
    const videoData = await fetchData.json();
    console.log(videoData);
    createVideoList(videoData.items);
   
}
getVideoList();






const createVideoList = (items)=>{
    items.forEach((obj)=>{
       const element = `<div class="vid-list">
        <a href="play-video.html?v=${obj.id}"><img src="${obj.snippet.thumbnails.medium.url}" class="thumbnail" /></a>
        <div class="flex-div">
            <img src="images/Jack.png" />
            <div class="vid-info">
                <a href="play-video.html?v=${obj.id}">${obj.snippet.localized.title}</a>
                <p>${obj.snippet.channelTitle}</p>
                <p>${obj.statistics.viewCount} &bull; in 1 days</p>
            </div>
        </div>
    </div>`


    document.getElementsByClassName("list-container")[0].innerHTML +=element;
    });
}





// DATA
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Rendering posts
const mailEl = document.getElementById("main")
let html = ""

for (let i=0; i<posts.length ; i++){
    
    html += `
    <article >
            <div class="container">
                <img class="avatar-img" src="${posts[i].avatar}" alt="avatars of users">
                <div class="user-info">
                    <h2 id="user-full-name">${posts[i].name}</h2>
                    <p id="location">${posts[i].location}</p>
                </div>
            </div>
            <img class="post_photo" src="${posts[i].post}" alt="A post's photo">
            <div class="container">
                <img class="small-icons" id= "heart" src="images/icon-heart.png" alt="A heart's icon">
                <img class="small-icons" src="images/icon-comment.png" alt="A comment's icon">
                <img class="small-icons" src="images/icon-dm.png" alt=""> 
            </div>
            <p id="like-count">${posts[i].likes} likes</p>
                <div class="container-username-caption">
                    <p id="username-caption">${posts[i].username} <span id="comment"> ${posts[i].comment}</p>
                </div>
        </article>
    `

}
mailEl.innerHTML = html;


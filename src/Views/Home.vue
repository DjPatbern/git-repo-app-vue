<template>
    <div class="home-container">
        <div class="home-flex">
            <div class="details-cont">
                <h1>Hi There 👋 I am Victor Patrick</h1>
                <h3>Welcome To My Git App</h3>
                <p>Where you can see my Github repositories and your Github profile with it</p>
                <router-link to="/repos" class="repo-btn link">▶ My Repos</router-link><router-link to="/search" class="git-btn link">🔎 Your Profile</router-link>
            </div>
            <div>
                <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" alt="" class="home-img">
            </div>
        </div> 
    </div>


</template>



<style>

.home-container{
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(38, 235, 235);
}

.home-flex{
    display: flex;
    margin-top: 10%;
    margin-left: 10%;
    
}

h1{
    color: aqua;
    font-weight: bolder;
    width: 80%;
    margin-bottom: 20px;
}
h3{
    color: rgb(38, 235, 235);
    margin-bottom: 10px;
}

p{
    margin-bottom: 30px;
}

.repo-btn{
    color: rgb(36, 9, 61);
    background-color: aqua;
    margin-right: 20px;
}

.repo-btn:hover{
    color: aqua;
    background-color: rgb(36, 9, 61);
}

.git-btn{
    background-color: white;
    color: rgb(36, 9, 61);
}

.git-btn:hover{
    background-color: rgb(36, 9, 61);
    color: white;
}
.link{
    border-radius: 20px;
    padding: 3% 7%;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
}

.details-cont{
    margin-right: 40px;
}

.home-img{
    width: 72%;
}

img.home-img {
    -webkit-animation: mover 1.5s infinite  alternate;
    animation: mover 1.5s infinite  alternate;
}
img.home-img {
    -webkit-animation: mover 1.5s infinite  alternate;
    animation: mover 1.5s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}

@media (max-width: 600px){
    .home-flex{
        display: block;
    }
.link{
    display: block;
    margin-bottom: 20px;
}

.home-img{
    display: none;
}

}

@media only screen and (max-width: 970px) and (min-width: 600px){
    .link{
    display: block;
    margin-bottom: 20px;
}
}
</style>
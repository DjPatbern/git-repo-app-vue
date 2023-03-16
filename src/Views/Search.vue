<template>
  <div>
    <div class="search-flex">
      <div>
        <input class="search-div" type="text" v-model="search" placeholder="Search Here" autofocus />
        <button @click="callSearch" class="search-btn">Enter</button>
        <div v-if="loading" class="search-user-text">Search your Github Username here</div>
      </div>
    </div>
    <div v-if="loading"></div>
    <div v-else class="pro-page">
      <div class="profile-flex">
        <div>
          <img :src="`${profile.avatar_url}`" class="pro-img" />
        </div>
        <div>
          <h1>{{ profile.name }}</h1>
          <p>{{ profile.login }}</p>
          <p>{{ profile.bio }}</p>
          <a :href="`${profile.followers_url}`" target="_blank">
            Followers: {{ profile.followers }}
          </a>
          <a :href="`${profile.following_url}`" target="_blank">
            Following: {{ profile.following }}
          </a>
          <p>◉ {{ profile.location }}</p>
          <a :href="`https://${profile.blog}`" target="_blank"
            >🔗 Website</a
          >
          <p>Public Repos: {{ profile.public_repos }}</p>
          <!-- <a :href="`${profile.repos_url}`" target="_blank">See Repos</a> -->
          <p>Joined On: {{ profile.created_at }}</p>
          <p>Last Update: {{ profile.updated_at }}</p>
          <a :href="`${profile.html_url}`" target="_blank">Live Profile</a>

        </div>
      </div>
    </div>
    <p v-for="rep in profile.repos_url" :key="rep.id">
            {{rep.name}}
          </p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const profile = ref([]);
    const loading = ref(true);
    const search = ref("");
    const fetchProfile = () => {
      const endpoint = `https://api.github.com/users/${search.value}`;
      fetch(endpoint)
        .then((response) => response.json())
        .then((data) => (profile.value = data))
        .finally(() => (loading.value = false));
    };

    const callSearch = (event) => {
      event.preventDefault();
      fetchProfile();
    };
    return {
      profile,
      loading,
      search,
      callSearch,
    };
  },
};
</script>

<style>
.search-div {
  margin-top: 5px;
  outline: none;
  width: 100%;
  text-align: center;
  padding: 15px  0 15px 0;
  border-radius: 15px;
  border: none;
  background-color: white;
  color: rgb(36, 9, 61);
  font-weight: bold;
  margin-bottom: 20px
}

.search-btn{
  width: 120%;
  text-align: center;
  padding: 15px  0 15px 0;
  border-radius: 15px;
  border: none;
  background-color: white;
  color: rgb(36, 9, 61);
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 5px;
  outline: none;
}

/* .search-div::placeholder{
    color: rgb(10, 190, 190);
} */

.search-flex button:hover{
  cursor: pointer;
  background-color: aqua;
  color: rgb(36, 9, 61);
  box-shadow: 1.2px 1px 1px rgb(36, 9, 61);
}

.search-flex{
  margin-top: 20px;
}

.profile-flex {
  display: flex;
  padding: 2%;
  box-shadow: 1.2px 5px 5px rgb(10, 190, 190);
  border-radius: 10px;
  margin: 0 auto;
  background-color: rgb(36, 9, 61);
  width: 80%;
  color: aqua;
  margin-bottom: 30px;
  margin-top: 20px;
}
.profile-flex p {
  margin-top: 15px;
  margin-bottom: 15px;
}

.profile-flex a {
  text-decoration: none;
  color: white;
  background-color: rgb(9, 114, 114);
  padding: 2%;
  border-radius: 8px;
  margin-right: 20px;
}

.profile-flex a:hover {
  color: rgb(9, 90, 144);
  background-color: white;
}

.pro-img {
  border-radius: 20px;
  margin-right: 20px;
}

.search-flex, .search-user-text{
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-user-text{
  color: white;
}

@media (max-width: 600px){
  .profile-flex{
    display: block;
  }

  .pro-img {
 max-width: 100%;
}

.search-btn{
  max-width: 100%;
}

.search-div{
  max-width: 80%;
}
}

@media only screen and (max-width: 970px) and (min-width: 600px){
  .profile-flex{
    display: block;
  }


  }
</style>

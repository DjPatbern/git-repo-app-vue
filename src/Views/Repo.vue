<template>
  <!-- <div v-if="notFound">
   <NotFound />
</div> -->

  <div v-if="loading === false" class="details-container">
    <div class="repo-datas">
      <img
        src="https://avatars.githubusercontent.com/u/99277508?v=4"
        alt="Owners Profile Picture"
        class="repo-avatar"
      />
      <div class="details-grid">
        <p><b>Name:</b> {{ repo.name }}</p>

        <p><b>id:</b> {{ repo.id }}</p>
        <p><b>Description:</b> {{ repo.description }}</p>
        <p><b>Forks:</b> {{ repo.forks }}</p>
        <p><b>Language:</b> {{ repo.language }}</p>
        <p><b>Watchers:</b> {{ repo.watchers }}</p>
        <p><b>Visibility:</b> {{ repo.visibility }}</p>
        <p><b>Push At:</b> {{ repo.pushed_at }}</p>
        <p><b>Created At:</b> {{ repo.created_at }}</p>
        <p><b>Updated At:</b> {{ repo.updated_at }}</p>
        <router-link class="back-link" to="/repos">Back</router-link>
        <b
          ><a :href="`${repo.svn_url}`" target="_blank">➡ Go To Repo Here</a></b
        >
      </div>
    </div>
  </div>

  <div v-else>
    <div>
      <NotFound />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import NotFound from "./NotFound.vue";
export default {
  setup() {
    const repo = ref({});
    const notFound = ref(false);
    const loading = ref(true);
    const route = useRoute();
    const fetchRepo = () => {
      const { repoId } = route.params;
      const endpoint = `https://api.github.com/repos/DjPatbern/${repoId}`;
      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => (repo.value = json))
        .then((loading.value = false))
        .catch(function (error) {
          if (error.response.status === 404) {
            return loading.value = true;
          }
        })
        // .finally(() => (loading.value = false));
    };
    onMounted(() => {
      fetchRepo();
    });
    return {
      repo,
      notFound,
      loading,
      
    };
  },
  components: { NotFound },
};
</script>

<style>
.repo-avatar {
  height: 3.5em;
  border-radius: 100px;
  border: rgb(10, 190, 190) 2px solid;
}

.details-grid {
  display: grid;
  grid-template-columns: auto auto;
}
.back-link {
  max-width: 30%;
}

b {
  font-weight: bold;
  margin: 2px;
}
.details-container {
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.repo-datas {
  padding: 2%;
  box-shadow: 1.2px 5px 5px rgb(10, 190, 190);
  border-radius: 10px;
  margin: 0 auto;
  background-color: rgb(36, 9, 61);
  width: 80%;
}
.repo-datas b {
  color: rgb(10, 190, 190);
}

.repo-datas p {
  color: aqua;
}

@media (max-width: 600px) {
  .details-grid {
    display: block;
  }

  .details-container {
    margin-bottom: 20px;
  }

  .back-link {
    margin-right: 22%;
  }
}
</style>

<template>
  <div class="container">
    <div>
      <div v-if="repos.length">
        <ul class="repos">
          <li
            v-for="repo in paginatedRepos"
            :key="repo.id"
            @click="$router.push(`/repos/${repo.name}`)"
            class="repo"
          >
            {{ repo.name }}
          </li>
        </ul>
      </div>

      <div v-else>
        <Loading />
      </div>

      <ul class="paginate">
        <li v-if="currentPage > 1" @click="currentPage--">Prev</li>
        <li
          v-for="pageNumber in pageNumbers"
          :key="pageNumber"
          :class="{ active: pageNumber === currentPage }"
          @click="currentPage = pageNumber"
        >
          {{ pageNumber }}
        </li>
        <li v-if="currentPage < totalPages" @click="currentPage++">Next</li>
      </ul>

      <div v-if="error">
        <div>erro</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import Loading from "../components/Loading.vue";

export default {
  setup() {
    const currentPage = ref(1);
    const reposPerPage = 6;
    const totalRepos = ref(0);
    const repos = ref([]);
    const error = ref(null);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/DjPatbern/repos"
        );
        const data = await response.json();
        repos.value = data;
        totalRepos.value = data.length;
      } catch (error) {
        error.value = error.message;
      }
    };
    onMounted(fetchData);
    const totalPages = computed(() => {
      return Math.ceil(totalRepos.value / reposPerPage);
    });
    const pageNumbers = computed(() => {
      const numbers = [];
      for (let i = 1; i <= totalPages.value; i++) {
        numbers.push(i);
      }
      return numbers;
    });
    const paginatedRepos = computed(() => {
      const startIndex = (currentPage.value - 1) * reposPerPage;
      const endIndex = startIndex + reposPerPage;
      return repos.value.slice(startIndex, endIndex);
    });
    return {
      currentPage,
      pageNumbers,
      totalPages,
      paginatedRepos,
      repos,
      error,
    };
  },
  components: { Loading },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  margin-left: -30px;
}
.active {
  font-weight: bold;
  background-color: aqua;
  color: rgb(36, 9, 61);
}

.paginate {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

li {
  list-style-type: none;
  cursor: pointer;
  padding: 10px;
  background-color: rgb(36, 9, 61);
  color: aqua;
  border-radius: 5px;
  text-align: center;
  box-shadow: 1.2px 3px 3px rgb(10, 190, 190);
}

.repos {
  display: grid;
  grid-template-columns: auto auto;
}

.repo {
  margin: 10px;
}

.repo:hover {
  font-weight: bold;
  background-color: aqua;
  color: rgb(36, 9, 61);
}

@media (max-width: 600px) {
  .repos {
    display: block;
  }
}
</style>

<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
    </div>
    <div class="p-8 pb-3">
        <input
        type="text" 
        v-model="keyword"
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full" 
        placeholder="Search for Meals"
        @change="searchMeals"
        />
    </div>
     <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div> -->
  
    <Meals :meals="meals" />
</template>

<script setup>
import { computed,  onMounted } from "vue";
import { ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import YouTubeButton from "../components/YouTubeButton.vue";
import Meals from "../components/Meals.vue";
// import MealItem from "../components/MealItem.vue";

const route =useRoute();
const keyword = ref([]);
const meals =computed(() => store.state.searchedMeals);

function searchMeals() {
    if (keyword.value){
        store.dispatch('searchMeals', keyword.value );
    }
    else{
        store.commit('setSearchedMeals', [] );
    }
}



onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})
</script>


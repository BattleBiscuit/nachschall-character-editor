<script setup lang="ts">
import GeneralInformation from './components/GeneralInformation.vue'
import BaseStats from './components/BaseStats.vue'
import Talents from './components/Talents.vue'
import { reactive, watch   } from 'vue'

const state = reactive({
  activeTab: 'tab1',
  generalData: {
    name: '',
    age: 0,
    origin: null,
    profession: '',
    experience: null
  },
  baseStats: {
    strength: 0,
    health: 0,
    nimbleness: 0,
    dexterity: 0,
    charisma: 0,
    intellect: 0,
    bravery: 0,
    intelligence: 0,
    initiative: null,
    healthpoints: 0
  }
})

watch(
  () => state.activeTab,
  (newValue, oldValue) => {
    let newActive = document.getElementById(newValue)?.firstElementChild
    let oldActive = document.getElementById(oldValue)?.firstElementChild
    let newActiveContainer = document.getElementById(newValue + 'Container')
    let oldActiveContainer = document.getElementById(oldValue + 'Container')
    oldActive?.classList.remove('active')
    newActive?.classList.add("active")
    newActiveContainer?.classList.remove('d-none')
    oldActiveContainer?.classList.add('d-none')
  }
)

function changeTab(tab: string) {
  state.activeTab = tab;
}

</script>

<template>
  <div class="container">
    <img src="./assets/img/main_logo.png" class="rounded mx-auto d-block">
    <div class="card">
        <div class="card-header text-center pb-0">
          <ul class="nav nav-tabs">
            <li id="tab1" class="nav-item" @click="changeTab('tab1')">
              <a class="nav-link active" aria-current="page" href="#">Allgemeines</a>
            </li>
            <li id="tab2" class="nav-item" @click="changeTab('tab2')">
              <a class="nav-link" href="#" >Grundwerte</a>
            </li>
            <li id="tab3" class="nav-item" @click="changeTab('tab3')">
              <a class="nav-link" href="#">Talente</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <span id="tab1Container">
            <GeneralInformation @update-data="(data) => state.generalData = data"></GeneralInformation>
          </span>
          <span id="tab2Container" class="d-none">
            <BaseStats v-if="state.generalData.experience !== null" :generalInformation="state.generalData" @update-data="(data) => state.baseStats = data"></BaseStats>
          </span>
          <span id="tab3Container" class="d-none">
            <Talents v-if="state.generalData.experience !== null && state.baseStats.strength != null" :generalInformation="state.generalData" :baseStats="state.baseStats"></Talents>
          </span>
        </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  color: #ff9f1a !important;
}
</style>

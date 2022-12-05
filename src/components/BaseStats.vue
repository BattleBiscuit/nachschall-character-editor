<script setup lang="ts">
  import { reactive, computed } from 'vue'

  const emit = defineEmits(['update-data'])

  const props = defineProps(['generalInformation'])

  
  const state = reactive({
    strength: 0,
    health: 0,
    nimbleness: 0,
    dexterity: 0,
    charisma: 0,
    intellect: 0,
    bravery: 0,
    intelligence: 0
  })
  
  // computed properties
  const healthpoints = computed(() => {
    return state.strength + state.health * 4 + state.nimbleness + props.generalInformation.origin.healthBonus + props.generalInformation.age.bonus
  })

  const initative = computed(() => {
    let initative = state.nimbleness * 2 + state.bravery
    let initativeGroup = getIniGroup(initative)
    return {ini: initative, group: initativeGroup}
  })

  const remainingEgp = computed(() => {
    return calculateRemainingErp()
  })

  const baseStatsFull = computed(() => {
    let initative = state.nimbleness * 2 + state.bravery
    let initativeGroup = getIniGroup(initative)
    let hp = state.strength + state.health * 4 + state.nimbleness + props.generalInformation.origin.healthBonus
    return {
      strength: state.strength,
      health: state.health,
      nimbleness: state.nimbleness,
      dexterity: state.dexterity,
      charisma: state.charisma,
      intellect: state.intellect,
      bravery: state.bravery,
      intelligence: state.intelligence,
      initative: { ini: initative, group: initativeGroup },
      healthpoints: hp
    }
  })

  function calculateRemainingErp() {
    let values = Object.keys(state).map(element => Object(state)[element]);
    const sum = values.reduce((accumulator, value) => {
      return accumulator + value
    }, 0)
    return props.generalInformation.experience.egp - sum
  }

  function getIniGroup(initative: number) {
    let initativeGroup = 2
    if(initative < 21) {
      initativeGroup = 2
    }
    else if(initative < 25) {
      initativeGroup = 1
    }
    else if(initative < 30) {
      initativeGroup = 0
    }
    else if(initative < 35) {
      initativeGroup = -1
    }
    else if(initative < 40) {
      initativeGroup = -2
    }
    else if(initative < 45) {
      initativeGroup = -3
    }
    else if(initative < 50) {
      initativeGroup = -4
    }
    else if(initative > 50) {
      initativeGroup = -5
    }
    return initativeGroup
  }

  function checkValidity(event: any, value: any) {
    if(!event.target.validity.valid) {
        Object(state)[value] = props.generalInformation.experience.egpMax;
    }
  }

  function validateAndSendData(event: any, value: any) {
    checkValidity(event, value)
    inputHandler(event)
  }

  function inputHandler(event:any) {
  let element = event.target
  if(element != null && element.value != '') {
    console.log(element.value)
    let stringValue = parseInt(element.value).toString() 
    element.value = stringValue
  }
  emit('update-data', baseStatsFull)
}




</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="form-text">
        In diesem Reiter werden die Basiswerte deines Charakters festgelegt.
        <br>
        Auf diese Werte wird später mit einem D20 gewürfelt, der Maximalwert ist also 20.
        Liegst du mit einem Wurf unter deinem Wert, so ist dieser erfolgreich.
        <br>
        <b>Powerplay ist für Langweiler.</b> Lege also deine Attribute so fest, dass sie zu deinem Charakter passen, nicht für den besten Nutzen für die Gruppe.
      </div>
      <hr>
    </div>
    <div class="col text-center">
      <span v-if="remainingEgp > 0" class="badge rounded-pill bg-secondary">Erfahrungspunkte: {{ remainingEgp }} / {{ props.generalInformation.experience.egp }}</span>
      <span v-else-if="remainingEgp === 0" class="badge rounded-pill bg-success">Erfahrungspunkte: {{ remainingEgp }} / {{ props.generalInformation.experience.egp }}</span>
      <span v-else class="badge rounded-pill bg-danger">Erfahrungspunkte: {{ remainingEgp }} / {{ props.generalInformation.experience.egp }}</span>
    </div>
    <div class="col text-center">
      <span class="badge rounded-pill bg-secondary">Trefferpunkte: {{ healthpoints }}</span>
    </div>
    <div class="col text-center">
      <span class="badge rounded-pill bg-secondary">Initiative: {{ initative.ini }} / {{ initative.group }}</span>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-sm-6 col-md-3">
      <label for="strengthInput" class="form-label mb-0">Kraft</label>
      <div class="input-group mb-3">
        <input v-model="state.strength" type="number" min="0" :max="props.generalInformation.experience.egpMax" id="strengthInput" class="form-control" @input="validateAndSendData($event, 'strength')">
        <span class="input-group-text">/ {{ props.generalInformation.experience.egpMax  }}</span>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <label for="healthInput" class="form-label mb-0">Gesundheit</label>
      <div class="input-group mb-3">
        <input v-model="state.health" type="number" min="0" :max="props.generalInformation.experience.egpMax" id="healthInput" class="form-control" @input="inputHandler($event)">
        <span class="input-group-text">/ {{ props.generalInformation.experience.egpMax  }}</span>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <label for="nimblenessInput" class="form-label mb-0">Flinkheit</label>
      <div class="input-group mb-3">
        <input v-model="state.nimbleness" type="number" min="0" :max="props.generalInformation.experience.egpMax" id="nimblenessInput" class="form-control" @input="inputHandler($event)">
        <span class="input-group-text">/ {{ props.generalInformation.experience.egpMax  }}</span>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <label for="dexterityInput" class="form-label mb-0">Fingerfertigkeit</label>
      <div class="input-group mb-3">
        <input v-model="state.dexterity" type="number" min="0" :max="props.generalInformation.experience.egpMax" id="dexterityInput" class="form-control" @input="inputHandler($event)">
        <span class="input-group-text">/ {{ props.generalInformation.experience.egpMax  }}</span>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <label for="charismaInput" class="form-label mb-0">Charisma</label>
      <div class="input-group mb-3">
        <input v-model="state.charisma" type="number" min="0" :max="props.generalInformation.experience.egpMax" id="charismaInput" class="form-control" @input="inputHandler($event)">
        <span class="input-group-text">/ {{ props.generalInformation.experience.egpMax  }}</span>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <label for="intellectInput" class="form-label mb-0">Intellekt</label>
      <div class="input-group mb-3">
        <input v-model="state.intellect" type="number" min="0" :max="props.generalInformation.experience.egpMax" id="intellectInput" class="form-control" @input="inputHandler($event)">
        <span class="input-group-text">/ {{ props.generalInformation.experience.egpMax  }}</span>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <label for="braveryInput" class="form-label mb-0">Tapferkeit</label>
      <div class="input-group mb-3">
        <input v-model="state.bravery" type="number" min="0" :max="props.generalInformation.experience.egpMax" id="braveryInput" class="form-control" @input="inputHandler($event)">
        <span class="input-group-text">/ {{ props.generalInformation.experience.egpMax  }}</span>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <label for="intelligenceInput" class="form-label mb-0">Intelligenz</label>
      <div class="input-group mb-3">
        <input v-model="state.intelligence" type="number" min="0" :max="props.generalInformation.experience.egpMax" id="intelligenceInput" class="form-control" @input="inputHandler($event)">
        <span class="input-group-text">/ {{ props.generalInformation.experience.egpMax  }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

input {
  border-right: none !important;
}
.input-group-text{
  background: white !important;
  border-left: none !important;
}
</style>

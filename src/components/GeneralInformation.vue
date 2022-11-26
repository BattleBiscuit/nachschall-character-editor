<script setup lang="ts">
  import { reactive, computed } from 'vue'

  // intern data
  const origins = [
    {id: 1, label: 'Cordania', healthBonus: 0},
    {id: 2, label: 'Ael', healthBonus: 5},
    {id: 3, label: 'Istakum', healthBonus: 12},
    {id: 4, label: 'Bruchlande', healthBonus: 100},
    {id: 5, label: 'Elersien', healthBonus: 7}
  ]
  const experienceLevel = [
    { label: 'Jugendlich', level: [
      {
        id: 1,
        label: '1',
        egp: 64,
        egpMax: 12,
        tp: 110,
        apMax: 10,
        dodgeParry: 66
      },
      {
        id: 2,
        label: '2',
        egp: 68,
        egpMax: 12,
        tp: 135,
        apMax: 11,
        dodgeParry: 68
      },
      {
        id: 3,
        label: '3',
        egp: 72,
        egpMax: 13,
        tp: 150,
        apMax: 12,
        dodgeParry: 70
      },
      {
        id: 4,
        label: '4',
        egp: 76,
        egpMax: 13,
        tp: 165,
        apMax: 13,
        dodgeParry: 72
      }
    ]},
    { label: 'Erfahren', level: [
      {
        id: 5,
        label: '1',
        egp: 80,
        egpMax: 14,
        tp: 180,
        apMax: 14,
        dodgeParry: 74
      },
      {
        id: 6,
        label: '2',
        egp: 83,
        egpMax: 14,
        tp: 195,
        apMax: 15,
        dodgeParry: 76
      },
      {
        id: 7,
        label: '3',
        egp: 86,
        egpMax: 15,
        tp: 210,
        apMax: 16,
        dodgeParry: 78
      },
      {
        id: 8,
        label: '4',
        egp: 89,
        egpMax: 15,
        tp: 225,
        apMax: 17,
        dodgeParry: 80
      }
    ]},
    { label: 'Meisterlich', level: [
      {
        id: 9,
        label: '1',
        egp: 92,
        egpMax: 16,
        tp: 240,
        apMax: 18,
        dodgeParry: 82
      },
      {
        id: 10,
        label: '2',
        egp: 95,
        egpMax: 16,
        tp: 255,
        apMax: 19,
        dodgeParry: 84
      },
      {
        id: 11,
        label: '3',
        egp: 98,
        egpMax: 17,
        tp: 270,
        apMax: 19,
        dodgeParry: 86
      },
      {
        id: 12,
        label: '4',
        egp: 101,
        egpMax: 17,
        tp: 285,
        apMax: 20,
        dodgeParry: 88
      }
    ]},
    {label: 'Heldenhaft', level: [
      {
        id: 13,
        label: '1',
        egp: 105,
        egpMax: 18,
        tp: 300,
        apMax: 22,
        dodgeParry: 90
      },
      {
        id: 14,
        label: '2',
        egp: 109,
        egpMax: 18,
        tp: 315,
        apMax: 23,
        dodgeParry: 92
      },
      {
        id: 15,
        label: '3',
        egp: 113,
        egpMax: 19,
        tp: 330,
        apMax: 24,
        dodgeParry: 94
      },
      {
        id: 16,
        label: '4',
        egp: 117,
        egpMax: 19,
        tp: 345,
        apMax: 25,
        dodgeParry: 96
      }
    ]}
  ]

  const emit = defineEmits(['update-data'])

  // reavtive data
  const state = reactive({
    name: '',
    age: 0,
    profession: '',
    origin: 1,
    experience: 1
  })

  // computed properties
  const generalInformation = computed(() => {
    let experienceObject
    for (let level of experienceLevel) {
      experienceObject = level.level.find((levelObject) => levelObject.id === state.experience )
      if (typeof experienceObject !== 'undefined') break
    }
    let originObject
    for(let origin of origins) {
      if(origin.id === state.origin) {
        originObject = origin
        break
      }
    }
    let general = {
      name: state.name,
      age: state.age,
      origin: originObject,
      profession: state.profession,
      experience: experienceObject
    }

    return general
})

function ageInputHandler(event:any) {
  let element = event.target
  if(element != null && element.value != '') {
    console.log(element.value)
    let stringValue = parseInt(element.value).toString() 
    console.log('s', stringValue)
    element.value = stringValue
  }
  emit('update-data', generalInformation)
}

</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="form-text mb-3">
        Hier werden die allgemeinen Daten deines Charakters festgehalten.
        <br>
        Name, Alter, deine Profession, also dein Beruf oder Berufung, das Land aus dem du kommst und dein Erfahrungsgrad.
      </div>
      <hr>
    </div>
    <div class="col-md-6 mb-3">
      <label for="nameInput" class="form-label mb-0">Name</label>
      <input v-model="state.name" type="text" class="form-control" id="nameInput" @input="emit('update-data', generalInformation)">
    </div>
    <div class="col-md-6 mb-3">
      <label for="ageInput" class="form-label mb-0">Alter</label>
      <input v-model="state.age" type="number" class="form-control" id="ageInput" @input="ageInputHandler($event)">
    </div>
    <div class="col-md-6">
      <label for="profession" class="form-label mb-0">Profession</label>
      <input v-model="state.profession" type="text" class="form-control" id="profession" @input="emit('update-data', generalInformation)">
    </div>
    <div class="col-md-6">
      <label for="originInput" class="form-label mb-0">Herkunft</label>
      <select v-model="state.origin" class="form-control" id="originInput" @change="emit('update-data', generalInformation)">
        <option v-for="origin of origins" :value="origin.id">{{ origin.label }}</option>            
      </select>
      <div class="form-text mt-0"><small>Je nach Herkunft ändert sich der Grundwert für Lebenspunkte</small></div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="expierenceInput" class="form-label mb-0">Erfahrungsgrad</label>
      <select v-model="state.experience" class="form-control" id="expierenceInput" @change="emit('update-data', generalInformation)">
        <optgroup v-for="expGroup of experienceLevel" :label="expGroup.label">
          <option v-for="level of expGroup.level" :value="level.id">{{ expGroup.label }} {{ level.label }}</option>
        </optgroup>
      </select>
      <div class="form-text mt-0"><small>Legt die Anzahl und Grenzen für die Punktverteilung fest</small></div>
    </div>
  </div>
</template>

<style scoped>

</style>

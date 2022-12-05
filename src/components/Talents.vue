<script setup lang="ts">
import { reactive, computed, watch } from 'vue'

  const props = defineProps(['generalInformation','baseStats'])
  
  const state = reactive({
    talents: [
        { label: "Kampf", talents: [
            {
                label: 'Ausweichen',
                stats: [],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Parieren',
                stats: [],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Hiebwaffen',
                stats: [],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Stichwaffen',
                stats: [],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Wurfwaffen',
                stats: [],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Kettenwaffen',
                stats: [],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Schlagwaffen',
                stats: [],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Stangenwaffen',
                stats: [],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Bögen',
                stats: [],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Armbrüste',
                stats: [],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
        ]},
        { label: 'Körper', talents: [
            {
                label: 'Akrobatik',
                stats: ['GH', 'FL', 'FF'],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Ertragen',
                stats: ['GH', 'TA', 'TA'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: 0
            },
            {
                label: 'Klettern',
                stats: ['KR', 'GH', 'FL'],
                baseValue: 3,
                difficulty: {label: 'A', factor: 1},
                value: 0
            },
            {
                label: 'Kraftakt',
                stats: ['KR', 'KR', 'KR'],
                baseValue: 5,
                difficulty: {label: 'A', factor: 1},
                value: 0
            },
            {
                label: 'Rudern',
                stats: ['KR', 'KR', 'GH'],
                baseValue: 3,
                difficulty: {label: 'A', factor: 1},
                value: 0
            },
            {
                label: 'Schleichen',
                stats: ['GH', 'FF', 'FF'],
                baseValue: 5,
                difficulty: {label: 'A', factor: 1},
                value: 0
            },
            {
                label: 'Schwimmen',
                stats: ['GH', 'GH', 'FL'],
                baseValue: 5,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Sprinten',
                stats: ['FL', 'FL', 'FL'],
                baseValue: 5,
                difficulty: {label: 'A', factor: 1},
                value: 0
            },
            {
                label: 'Tanzen',
                stats: ['FL', 'FF', 'IN'],
                baseValue: 3,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Wahrnehmung',
                stats: ['IN', 'IN', 'IN'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: 0
            },
            {
                label: 'Weitsprung',
                stats: ['GH', 'FL', 'FL'],
                baseValue: 5,
                difficulty: {label: 'A', factor: 1},
                value: 0
            },
            {
                label: 'Weitwurf',
                stats: ['GH', 'GH', 'FL'],
                baseValue: 5,
                difficulty: {label: 'A', factor: 1},
                value: 0
            }
        ]},
        { label: 'Gesellschaft', talents: [
            {
                label: 'Betören',
                stats: ['CH', 'CH', 'IN'],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Etikette',
                stats: ['CH', 'WE', 'IN'],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Glücksspiel',
                stats: ['WE', 'IN', 'IN'],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Menschenkenntnis',
                stats: ['CH', 'IN', 'IN'],
                baseValue: 3,
                difficulty: {label: 'C', factor: 3},
                value: 0
            },
            {
                label: 'Rhetorik',
                stats: ['CH', 'CH', 'CH'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: 0
            },
            {
                label: 'Selbstbeherrschung',
                stats: ['TA', 'TA', 'TA'],
                baseValue: 3,
                difficulty: {label: 'C', factor: 3},
                value: 0
            },
            {
                label: 'Taschendiebstahl',
                stats: ['FL', 'FF', 'FF'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: 0
            },
            {
                label: 'Täuschen',
                stats: ['FF', 'TA', 'TA'],
                baseValue: 3,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Überzeugen',
                stats: ['CH', 'CH', 'IN'],
                baseValue: 5,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Verkleiden',
                stats: ['FL', 'FF', 'FF'],
                baseValue: 5,
                difficulty: {label: 'A', factor: 1},
                value: 0
            }
        ]},
        { label: 'Wildnis', talents: [
            {
                label: 'Fährtensuche',
                stats: ['FL', 'WE', 'WE'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: 0
            },
            {
                label: 'Fallensellen',
                stats: ['FF', 'WE', 'WE'],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Fischen',
                stats: ['FL', 'FF', 'IN'],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Fixieren',
                stats: ['KR', 'KR', 'TA'],
                baseValue: 3,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Orientierung',
                stats: ['WE', 'WE', 'IN'],
                baseValue: 0,
                difficulty: {label: 'B', factor: 2},
                value: 0
            },
            {
                label: 'Tiere zähmen',
                stats: ['WE', 'TA', 'TA'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: 0
            },
            {
                label: 'Überleben',
                stats: ['GH', 'WE', 'IN'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: 0
            },
            {
                label: 'Reitverständnis',
                stats: ['GH', 'FF', 'TA'],
                baseValue: 5,
                difficulty: {label: 'A', factor: 1},
                value: 0
            }
        ]},
        { label: 'Handwerk', talents: [
            {
                label: 'Fahrwerksarbeit',
                stats: ['KR', 'FF', 'IN'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
            {
                label: 'Handel',
                stats: ['CH', 'CH', 'IN'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
            {
                label: 'Holzarbeit',
                stats: ['KR', 'FF', 'IN'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
            {
                label: 'Lebensmittelarbeit',
                stats: ['FF', 'FF', 'WE'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
            {
                label: 'Lederarbeit',
                stats: ['FF', 'FF', 'WE'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
            {
                label: 'Malerei',
                stats: ['FF', 'FF', 'IN'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
            {
                label: 'Mechanik',
                stats: ['FF', 'FF', 'WE'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
            {
                label: 'Metallarbeit',
                stats: ['KR', 'FF', 'IN'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
            {
                label: 'Musizieren',
                stats: ['FF', 'CH', 'WE'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
            {
                label: 'Seefahrt',
                stats: ['FF', 'FF', 'WE'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
            {
                label: 'Steinarbeit',
                stats: ['KR', 'FF', 'IN'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
            {
                label: 'Stoffarbeit',
                stats: ['FF', 'FF', 'WE'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
            {
                label: 'Waffenarbeit',
                stats: ['KR', 'FF', 'IN'],
                baseValue: 0,
                difficulty: {label: 'C', factor: 3},
                value: null
            },
        ]},
        { label: 'Wissen', talents: [
            {
                label: 'Giftkunde',
                stats: ['WE', 'WE', 'WE'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Himmelskunde',
                stats: ['WE', 'WE', 'IN'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Historie',
                stats: ['CH', 'WE', 'WE'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Jagdkunde',
                stats: ['WE', 'WE', 'IN'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Kartenkunde',
                stats: ['WE', 'WE', 'WE'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Medizin',
                stats: ['WE', 'WE', 'WE'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Pflanzenkunde',
                stats: ['WE', 'WE', 'IN'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Psychologie',
                stats: ['CH', 'WE', 'WE'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Religions- & Kultenkunde',
                stats: ['WE', 'WE', 'WE'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Sagen- & Legendenkunde',
                stats: ['CH', 'WE', 'WE'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Sprachenkunde',
                stats: ['CH', 'WE', 'WE'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Tierkunde',
                stats: ['WE', 'WE', 'IN'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Tiermedizin',
                stats: ['WE', 'WE', 'WE'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            },
            {
                label: 'Wetterkunde',
                stats: ['CH', 'WE', 'WE'],
                baseValue: 0,
                difficulty: {label: 'D', factor: 4},
                value: null
            }
        ]}
    ]
  })

  const remainingTP = computed(() => {
    let sum = 0
    for(let category of state.talents) {
        for(let talent of category.talents) {
            if(talent.value !== null && talent.difficulty != null) {
                sum += talent.value * talent.difficulty.factor
            }
        }
    }
    return props.generalInformation.experience.tp - sum
  })

  watch(() => props.baseStats, newValue => {
      let strength = props.baseStats.strength
      let health = props.baseStats.health
      let dexterity = props.baseStats.dexterity
      let nimbleness = props.baseStats.nimbleness
      let intellect = props.baseStats.intellect
      let bravery = props.baseStats.bravery

      state.talents = state.talents.map(cat => {
        if(cat.label === 'Kampf') {
            Object(cat).talents = cat.talents.map(talent => {
                switch (talent.label) {
                    case 'Parieren':
                        talent.baseValue = strength + 0.5 * health + nimbleness + 1.5 * bravery
                        break
                    case 'Ausweichen':
                        talent.baseValue =  0.5 * strength + 0.5 * health + 1.5 * nimbleness + dexterity + intellect + 0.5 * bravery
                        break
                    case 'Hiebwaffen':
                        talent.baseValue = strength + 0.5 * health + 1.5 * nimbleness + dexterity
                        break
                    case 'Stichwaffen':
                        talent.baseValue = strength + health + 1.5 * nimbleness + 0.5 * dexterity
                        break
                    case 'Wurfwaffen':
                        talent.baseValue = health + 0.5 * nimbleness + 1.5 * dexterity
                        break
                    case 'Kettenwaffen':
                        talent.baseValue = strength + health + 1.5 * nimbleness + 0.5 * dexterity
                        break
                    case 'Schlagwaffen':
                        talent.baseValue = 2 * strength + health + nimbleness + dexterity
                        break
                    case 'Stangenwaffen':
                        talent.baseValue = 2 * strength + health + nimbleness + dexterity
                        break
                    case 'Bögen':
                        talent.baseValue = health +  dexterity + 1.5 * nimbleness
                        break
                    case 'Armbrüste':
                        talent.baseValue = strength + 0.5 * health + dexterity + 1.5 * nimbleness
                        break
                    default:
                        break;
                }

                return talent
            })
        }
        return cat
      })
      for(let cat of state.talents) {
        
      }
  })

  function calculateCombined(base: number, value: any) {
    if(value === null) value = 0
    return base + value
  }

  function calculateRemainingAp(talent:any, category:any) {
    if(category.label !== 'Kampf') {
        return props.generalInformation.experience.apMax - talent.baseValue
    }
    else if (talent.label === 'Ausweichen' || talent.label === 'Parieren') {
        return props.generalInformation.experience.dodgeParry - talent.baseValue
    }
    return 100 - talent.baseValue
  }


  function checkValidity(event: any, talent: any, category: any) {
    if(!event.target.validity.valid) {
        console.log(talent, event)
        talent.value = calculateRemainingAp(talent, category);
    }
  }

  function inputHandler(event: any, talent: any, category: any) {
    checkValidity(event, talent, category)
    let element = event.target
    if(element != null && element.value != '') {
        let stringValue = parseInt(element.value).toString() 
        element.value = stringValue
    }
}

  

</script>

<template>
    <div class="row">
        <div class="col-12">
            <div class="form-text mb-3">
                Talente entscheiden darüber, welche Tätigkeiten du wie gut erledigen kannst.
                Die einzelnen Talente sind natürlich nicht gleich leicht oder schwer zu erlernen, deswegen hat unser allmächter Spielleiter ein Rating eingebaut.
                <br>
                Jeder Punkt, den du verteilst, kann bei einem schlechten Wurf verwendet werden, um die Differenz zum erfolgreichen Wurf auszubessern.
                Für jedes Talent werden 3 Würfe benötigt, das jeweilige Attribut auf das geworfen wird ist jeweils mit ausgeschrieben.
                Kampftalente werden mit einem W100 geworfen.
            </div>
            <hr>
        </div>
        <div class="col text-center">
            <span v-if="remainingTP < 0" class="badge rounded-pill bg-danger">Talentpunkte: {{ remainingTP }} / {{ props.generalInformation.experience.tp }}</span>
            <span v-else class="badge rounded-pill bg-secondary">Talentpunkte: {{ remainingTP }} / {{ props.generalInformation.experience.tp }}</span>
        </div>
        <div class="col text-center">
            <span class="badge rounded-pill bg-secondary">Maximale Ausweichpunkte pro Talent: {{ props.generalInformation.experience.apMax }}</span>
        </div>
    </div>
    <hr>
    <div class="talentWrapper">
        <div v-for="category of state.talents">
            <h5><b>{{ category.label }}</b></h5>
            <div class="row">
                <div v-for="talent of category.talents" class="col-lg-3 col-sm-6">
                    <label for="strengthInput" class="form-label mb-0 w-100">
                        {{ talent.label }}
                        <small>
                            <span v-if="talent.difficulty.label === 'A'" class="badge rounded-pill bg-secondary text-success"> {{ talent.difficulty.label }}</span>
                            <span v-if="talent.difficulty.label === 'B'" class="badge rounded-pill bg-secondary text-info"> {{ talent.difficulty.label }}</span>
                            <span v-if="talent.difficulty.label === 'C'" class="badge rounded-pill bg-secondary text-warning"> {{ talent.difficulty.label }}</span>
                            <span v-if="talent.difficulty.label === 'D'" class="badge rounded-pill bg-secondary text-danger"> {{ talent.difficulty.label }}</span>
                        </small>
                        <small class="float-end">
                            <span v-if="talent.label === 'Ausweichen' || talent.label === 'Parieren'" class="badge badge-sm rounded-pill bg-secondary">max: {{ props.generalInformation.experience.dodgeParry }}</span>
                            <span v-else-if="category.label === 'Kampf'" class="badge badge-sm rounded-pill bg-secondary">max: 100 </span>
                            <span v-for="stat of talent.stats" class="badge badge-sm rounded-pill bg-secondary">{{ stat }}</span>
                        </small>
                    </label>
                    <div class="input-group mb-3">
                        <input v-model="talent.value" type="number" min="0" :max="calculateRemainingAp(talent, category)" :placeholder="talent.value !== null ? '' : '-'" id="strengthInput" class="form-control" @input="inputHandler($event, talent, category)">
                        <span class="input-group-text">{{ talent.baseValue != 0 ? '+' + talent.baseValue : '' }} | <b class=" ms-2 text-black">{{ calculateCombined(talent.baseValue, talent.value) }}</b></span>
                    </div>
                </div>
            </div>
            <hr>
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

.talentWrapper {
    max-height: 600px !important;
    height: 600px !important;
    overflow-y: scroll !important;
    overflow-x: hidden !important;
}

</style>

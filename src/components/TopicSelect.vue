<template>
  <div id="dropdown-div">
    <label for="section-dropdown">section:</label>
    <select id="section-dropdown" v-model="latestSection" @change="updateAll">
      <option value="">Select a section</option>
      <option v-for="section in sections" :value="section">{{ section }}</option>
    </select>
  </div>
  <div id="remove-div" v-if="selectedSections.length > 0">
    <div v-for="selectedTopic in selectedSections" :key="selectedTopic.id" class="selected-topic">
      {{ selectedTopic }}
      <button id="remove-button" @click="removeSelectedTopic(selectedTopic)">Remove</button>
    </div>
  </div>
</template>

<script>
import {getUnits} from "@/composables/firebaseFunctions";

export default {
  data() {
    return {
      sections: [],
      latestSection: 'select',
      selectedSections: [],
      selectedUnits:[]
    };
  },
  async created() {
    const units = await getUnits();
    units.forEach((unit) => {
      this.sections.push(unit.title);
    });
  },
  methods: {
    updateUnits(){
      console.log(this.selectedUnits);
      for(let i = 0;i < this.sections.length; i++){
        if(this.sections[i] == this.latestSection){
            this.selectedUnits.push(i);
            this.selectedSections.push(this.latestSection);
            return;
        }
      }
  
    },removeSelectedTopic(topic) {
        const index = this.selectedSections.findIndex(t => t.id === topic.id)
        if (index !== -1) {
          this.selectedSections.splice(index, 1);
          this.selectedUnits.splice(index, 1);
        }
        console.log(this.selectedUnits);
    },
    updateAll(){
      this.updateUnits();
      this.$emit('generateTopics',this.selectedUnits);
    }
  },emits: ['generateTopics']
};
</script>

<style scoped>
  #dropdown-div {
    padding: 5px;
  }

  #remove-div {
    padding: 5px;
  }

  label {
    margin: 20px;
  }

  #remove-button {
    margin: 0px 10px;
  }
</style>

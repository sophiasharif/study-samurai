<template>
  <div>
    <label for="section-dropdown">Section:</label>
    <select id="section-dropdown" v-model="selectedSection" @change="$emit('generateTopic',this.unitNumber,this.selectedSubtopic)">
      <option value="">Select a section</option>
      <option v-for="section in sections" :value="section">{{ section }}</option>
    </select>

    <label for="subtopic-dropdown" v-if="selectedSection">Subtopic:</label>
    <select id="subtopic-dropdown" v-if="selectedSection" v-model="selectedSubtopic" @change="$emit('generateTopic',this.unitNumber,this.selectedSubtopic)">
      <option value="">Random</option>
      <option v-for="subtopic in subtopics[selectedSection]" :value="subtopic">{{ subtopic }}</option>
    </select>
  </div>
</template>

<script>
import {getUnits} from "@/composables/firebaseFunctions";

export default {
  data() {
    return {
      sections: [],
      subtopics: {},
      selectedSection: '',
      unitNumber:0,
      selectedSubtopic: ''
    };
  },
  async created() {
    const units = await getUnits();
    units.forEach((unit) => {
      this.sections.push(unit.title);
      this.subtopics[unit.title] = unit.subtopics;
    });
  },
  methods: {
    updateUnit(){
        let i = 0;
        for(;i < this.sections.length; i++)
        if(this.sections[i] == this.selectedSection){
            this.unitNumber = i;
            return;
        }
        this.unitNumber = -1;
    }
  },emits: ['generateTopic']
};
</script>

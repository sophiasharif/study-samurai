<template>
  <div>
    <div class="dropdown">
      <button class="dropbtn">Topics</button>
      <div class="dropdown-content">
        <a href="" v-for="topic in topics" :key="topic.id" class="topics" :value="topic.name" @click="getSelectedTopics()">{{ topic.name }}</a>
      </div>
    </div>
    <select v-model="selectedTopic" @change="handleTopicChange">
      <option value="">-- Select a Topic --</option>
      <option v-for="topic in topics" :key="topic.id" class="topics" :value="topic.name">{{ topic.name }}</option>
    </select>
    <div v-if="selectedTopics.length > 0">
      <div v-for="selectedTopic in selectedTopics" :key="selectedTopic.id" class="selected-topic">
        {{ selectedTopic.name }}
        <button @click="removeSelectedTopic(selectedTopic)">Remove</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import {getUnits} from "@/composables/firebaseFunctions"

  export default {
    data() {
      return {
        selectedTopic: '',
        topics: [
          { id: 1, name: 'Linear Algebra' },
          { id: 2, name: 'Analysis' },
          { id: 3, name: 'Multivariable Differentiation' },
          { id: 4, name: 'Multivariable Integration' },
          { id: 5, name: 'Integrability' },
          { id: 6, name: 'Change of Variables' }
        ],
        selectedTopics: []
      }
    },
    methods: {
      handleTopicChange() {
        this.addSelectedTopic(this.selectedTopic)
      },
      addSelectedTopic(topic) {
        if (topic !== '' && !this.selectedTopics.find(t => t.name === topic)) {
          const newTopic = { id: this.selectedTopics.length + 1, name: topic }
          this.selectedTopics.push(newTopic)
        }
      },
      removeSelectedTopic(topic) {
        const index = this.selectedTopics.findIndex(t => t.id === topic.id)
        if (index !== -1) {
          this.selectedTopics.splice(index, 1)
        }
      },
      //function to get an array of selected topics.
      getSelectedTopics(){
        return this.selectedTopics;
      }
    },mounted(){
      getUnits();
    }
  }
  </script>
  
  <style>
  .selected-topic {
    display: inline-block;
    margin: 0 10px 10px 0;
    padding: 5px 10px;
    border: 3px solid #4b3a3a;
    border-radius: 5px;
    background-color: #382870;
  }
  .topics {
    display: inline-block;
    margin: 0 10px 10px 0;
    padding: 5px 10px;
    border: 3px solid #4b3a3a;
    border-radius: 5px;
    background-color: #382870;
  }
  </style>
  
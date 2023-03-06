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
        <option value="custom">Custom</option>
      </select>
      <div v-if="showCustomInput">
        <input type="text" v-model="customTopic" placeholder="Enter custom topic...">
        <button @click="handleCustomTopic">Add</button>
      </div>
      <div v-if="selectedTopics.length > 0">
        <div v-for="selectedTopic in selectedTopics" :key="selectedTopic.id" class="selected-topic">
          {{ selectedTopic.name }}
          <button @click="removeSelectedTopic(selectedTopic)">Remove</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTopic: '',
        customTopic: '',
        topics: [
          { id: 1, name: 'Linear Algebra' },
          { id: 2, name: 'Analysis' },
          { id: 3, name: 'Multivariable Differentiation' },
          { id: 4, name: 'Multivariable Integration' },
          { id: 5, name: 'Integrability' },
          { id: 6, name: 'Change of Variables' }
        ],
        showCustomInput: false,
        selectedTopics: []
      }
    },
    methods: {
      handleTopicChange() {
        if (this.selectedTopic === 'custom') {
          this.showCustomInput = true
        } else {
          this.showCustomInput = false
          this.addSelectedTopic(this.selectedTopic)
        }
      },
      handleCustomTopic() {
        if (this.customTopic !== '') {
          this.topics.push({ id: this.topics.length + 1, name: this.customTopic })
          this.selectedTopic = this.customTopic
          this.customTopic = ''
          this.showCustomInput = false
          this.addSelectedTopic(this.selectedTopic)
        }
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
  
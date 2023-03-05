<template>
    <div>
      <select v-model="selectedTopic" @change="handleTopicChange">
        <option value="">-- Select a Topic --</option>
        <option v-for="topic in topics" :key="topic.id" :value="topic.name">{{ topic.name }}</option>
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
          { id: 1, name: 'Mathematics' },
          { id: 2, name: 'Science' },
          { id: 3, name: 'History' },
          { id: 4, name: 'Geography' },
          { id: 5, name: 'English' },
          { id: 6, name: 'Computer Science' }
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
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5f5f5;
  }
  </style>
  
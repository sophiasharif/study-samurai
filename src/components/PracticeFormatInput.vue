<template>
  <div align-items="center" class="test-format">
    <div class="increment-div">
      <input type="text" ref="prob" v-model="numProblems" @input="updateValue" @click="selectAll">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
    <div class="increment-div">
      <input type="text" ref="time" v-model="numTime" @input="updateTime" @click="selectTime">
      <button @click="incrementTime">+</button>
      <button @click="decrementTime">-</button>
    </div>
    <button id="generate-button" ref="generateButton" class="button" @click="$emit('generate-test',this.getNumProblem(), this.getNumTime())">GENERATE</button>
  </div>
</template>

<script>
export default{
    data(){
        return{
            numProblems: '5 problems',
            defaultNumProblems: '5 problems',
            numTime: '45 minutes',
            defaultTime: '45 minutes'
        };
    },
    methods: {
        increment(){
            this.numProblems = (this.getNumProblem()+1) + ' problems';
        },
        decrement(){
            this.numProblems = (Math.max(1, this.getNumProblem() - 1)) + ' problems';
        },updateValue(event) {
            const input = event.target.value;
            if (isNaN(input)) {
                this.numProblems = this.defaultNumProblems;
            }else if(input != '' && input < 1){
                this.numProblems = 1 + ' problems';
            }else{
                this.numProblems = input + ' problems';
            }
        },selectAll() {
            this.$refs.prob.select();
        },
        getNumTime(){
            return parseInt(this.numTime.split(' ').at(0));
        },getNumProblem(){
            return parseInt(this.numProblems.split(' ').at(0));
        },
        incrementTime(){
            this.numTime = (parseInt(this.getNumTime() + 15) + ' minutes');
        },
        decrementTime(){
            this.numTime = (Math.max(15, this.getNumTime() - 15)) + ' minutes';
        },updateTime(event) {
            const input = event.target.value;
            if (isNaN(input)) {
                this.numTime = this.decrementTime;
            }else if(input != '' && input < 1){
                this.numTime = 1 + ' minutes';
            }else{
                this.numTime = input + ' minutes';
            }
        },selectTime() {
            this.$refs.time.select();
        }
    },emits: ['generate-test']
}
</script>

<style scoped>
  .test-format{
      margin : 20px;
  }

  .increment-div {
    padding: 5px;
  }

  #generate-button {
    margin: 10px;
  }
</style>
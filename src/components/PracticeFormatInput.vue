<template>
    <div align-items="center" class="test-format">
        <input type="text" ref="prob" v-model="numProblems" @input="updateValue" @click="selectAll">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <input type="text" ref="time" v-model="numTime" @input="updateTime" @click="selectTime">
        <button @click="incrementTime">+</button>
        <button @click="decrementTime">-</button>
    </div>
</template>

<script>
export default{
    data(){
        return{
            numProblems: '5 Problems',
            defaultNumProblems: '5 Problems',
            numTime: '45 Minutes',
            defaultTime: '45 Minutes'
        };
    },
    methods: {
        increment(){
            this.numProblems = (parseInt(this.numProblems.split(' ').at(0)) + 1) + ' Problems';
        },
        decrement(){
            this.numProblems = (Math.max(1, parseInt(this.numProblems.split(' ').at(0)) - 1)) + ' Problems';
        },updateValue(event) {
            const input = event.target.value;
            if (isNaN(input)) {
                this.numProblems = this.defaultNumProblems;
            }else if(input != '' && input < 1){
                this.numProblems = 1 + ' Problems';
            }else{
                this.numProblems = input + ' Problems';
            }
        },selectAll() {
            this.$refs.prob.select();
        },
        
        incrementTime(){
            this.numTime = (parseInt(this.numTime.split(' ').at(0)) + 15) + ' Minutes';
        },
        decrementTime(){
            this.numTime = (Math.max(15, parseInt(this.numTime.split(' ').at(0)) - 15)) + ' Minutes';
        },updateTime(event) {
            const input = event.target.value;
            if (isNaN(input)) {
                this.numTime = this.decrementTime;
            }else if(input != '' && input < 1){
                this.numTime = 1 + ' Minutes';
            }else{
                this.numTime = input + ' Minutes';
            }
        },selectTime() {
            this.$refs.time.select();
        }
    }
}
</script>

<style scoped>
.test-format{
    margin : 20px;
}
</style>
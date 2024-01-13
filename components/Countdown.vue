<template>
  <div class="text-white">
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span v-if="days > 99">{{ Math.floor(days / 100).toFixed(0) }}</span>
          <span :style="'--value:' + this.days % 100 + ';'"></span>
        </span>
        days
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="'--value:' + this.hours % 100 + ';'"></span>
        </span>
        hours
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="'--value:' + this.minutes % 100 + ';'"></span>
        </span>
        min
      </div>
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span :style="'--value:' + this.seconds % 100 + ';'"></span>
        </span>
        sec
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Countdown',
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      deadline: '2024-02-07T24:00:00'
    }
  },
  created() {
    this.getTimeRemaining()
  },
  methods: {
    getTimeRemaining() {
      setTimeout(() => {
        const total = new Date(this.deadline).getTime() - new Date().getTime();
        this.seconds = Math.floor((total / 1000) % 60);
        this.minutes = Math.floor((total / 1000 / 60) % 60);
        this.hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        this.days = Math.floor(total / (1000 * 60 * 60 * 24));
        this.getTimeRemaining();
      }, 1000);


    }
  }

}
</script>
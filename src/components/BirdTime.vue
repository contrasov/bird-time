<template>
    <section class="flex flex-col items-center">
      <div class="font-semibold text-2xl text-grColor">{{ day }}, {{ date }}</div>
      <div class="
      text-gColor text-9xl font-semibold
      border border-gColor px-8 py-8 bg-geColor
      mt-4
      ">{{ time }}</div>
    </section>
</template>
  
<script>
import music from '../assets/music.mp3'

  export default {
    data() {
      return {
        time: '',
        date: '',
        day: '',
        audio: null
      };
    },
    methods: {
      fetchTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        this.time = `${hours}:${minutes}:${seconds}`;
  
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        this.date = `${day}/${month}/${year}`;
  
        let weekday = now.toLocaleDateString('pt-BR', { weekday: 'long' });
        this.day = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  
        if (hours === '00' && minutes === '2' && seconds === '05') {
          this.playSound();
        }
      },
      playSound() {
        this.audio.play();
      }
    },
    created() {
      this.fetchTime();
      setInterval(this.fetchTime, 1000);
      this.audio = new Audio(music);
    }
  };
</script>
  
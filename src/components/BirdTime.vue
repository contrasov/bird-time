<template>
    <section class="flex flex-col items-center mt-2 w-full px-4">
      <div class="font-extrabold text-2xl text-grColor uppercase tracking-widest text-center">{{ day }}, {{ date }}</div>
      <div class="
      text-gColor text-7xl md:text-[10rem] font-extrabold tracking-tighter
      border-2 md:border-4 border-b-[8px] md:border-b-[12px] border-gColor px-6 md:px-12 py-8 md:py-10 bg-geColor rounded-3xl md:rounded-[3rem]
      mt-6 select-none
      ">{{ time }}</div>
      <div v-if="showProgressBar" class="w-full max-w-md bg-geColor h-8 rounded-2xl border-2 border-b-4 border-grColor mt-8 p-1">
        <div 
          class="bg-gColor h-full rounded-xl transition-width duration-300 ease-linear" 
          :style="{ width: progress + '%' }"
        ></div>
      </div>
    </section>
</template>
  
<script>
  export default {
    data() {
      return {
        time: '',
        date: '',
        day: '',
        audio: null,
        progress: 0,
        showProgressBar: false
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
  
        if (hours === '23') {
          this.showProgressBar = true;
          
          const startTime = new Date(now);
          startTime.setHours(23, 0, 0, 0);

          const endTime = new Date(now);
          endTime.setHours(23, 55, 4, 0);

          if (now >= endTime) {
            this.progress = 100;
          } else {
            const totalDuration = endTime.getTime() - startTime.getTime();
            const elapsedTime = now.getTime() - startTime.getTime();
            this.progress = Math.max(0, (elapsedTime / totalDuration) * 100);
          }
        } else {
          this.showProgressBar = false;
        }

        if (hours === '23' && minutes === '55' && seconds === '04') {
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
      this.audio = new Audio('/music.mp3');
    }
  };
</script>
  
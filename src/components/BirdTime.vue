<template>
  <section class="flex flex-col items-center">
    <div class="font-semibold text-2xl text-grColor" >{{ day }}, {{ date }} </div>
    <div class="
    text-gColor text-9xl font-semibold
    border border-gColor px-8 py-8 bg-geColor
    mt-4
    " 
    > {{ time }} </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            time: '',
            date: '',
            day: '',
            audio: null
        }
    },
    methods: {
        async fetchTime(){            

            try {
                const response = await fetch('http://worldtimeapi.org/api/timezone/America/Fortaleza');
                const data = await response.json();
                const dateTime = new Date(data.datetime);
                const hours = String(dateTime.getHours()).padStart(2,'0');
                const minutes = String(dateTime.getMinutes()).padStart(2, '0');
                const seconds = String(dateTime.getSeconds()).padStart(2, '0');
                this.time = `${hours}:${minutes}:${seconds}`;
            
                const day = String(dateTime.getDate()).padStart(2, '0');
                const month = String(dateTime.getMonth() +1).padStart(2, '0');
                const year = dateTime.getFullYear();
                this.date = `${day}/${month}/${year}`

                let weekday = dateTime.toLocaleDateString('pt-BR', {weekday: 'long'})
                this.day = weekday.charAt(0).toUpperCase() + weekday.slice(1);

                if(hours === '23' && minutes === '55' && seconds === '05'){
                    this.playSound();
                }
            } catch (error) {
                console.error('Erro ao buscar horario:', error)
            }
        },
        playSound(){
            this.audio.play()
        }
    },
    created(){
        this.fetchTime();
        setInterval(this.fetchTime, 1000);
        this.audio = new Audio('../src/assets/music.mp3')
    }
}
</script>

<style>

</style>
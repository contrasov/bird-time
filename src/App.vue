<template>
<main>
  <div class="flex flex-col items-center mt-10 gap-6 px-4">
    <span class="flex flex-col items-center gap-2">
      <h1 class="text-gColor font-extrabold text-5xl md:text-6xl text-center tracking-tight" >Free Bird Time</h1>
      <p class="text-grColor font-bold text-lg md:text-xl text-center" >Aguarde pelo horário do Free Bird (23:55:04), by Álvaro</p>
      <p v-if="yearsSinceCreation > 0" class="text-gColor font-bold text-base md:text-lg text-center">
        Celebrando a {{ yearsSinceCreation }}ª virada de ano ao som do solo!
      </p>
    </span>
    <BirdTime/>

    <div class="mt-4 border-2 border-b-[6px] border-grColor rounded-3xl p-4 md:p-6 text-center max-w-xl w-full flex flex-col items-center gap-4">
      <p class="text-grColor font-bold text-lg leading-relaxed">
        Faça uma doação via pix de qualquer valor e ajude a manter este pobre programador (ou me dê um emprego). 
      </p>
      <div class="bg-geColor border-2 border-b-[4px] border-gColor rounded-2xl px-4 py-3 md:px-6 md:py-4 font-extrabold text-gColor text-xl md:text-2xl w-full break-words">
        Chave pix: vagnespeixe@gmail.com
      </div>
    </div>

    <Icons/>
  </div>
</main>
</template>

<script>
  import BirdTime from './components/BirdTime.vue';
  import Icons from './components/Icons.vue';

  export default{
    components: {
      BirdTime,
      Icons
    },
    data() {
      return {
        yearsSinceCreation: 0
      };
    },
    created() {
      const creationYear = 2024;
      const currentYear = new Date().getFullYear();
      this.yearsSinceCreation = currentYear - creationYear;
    }
  }

</script>
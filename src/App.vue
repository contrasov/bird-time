<template>
<main>
  <div class="flex flex-col items-center mt-6 gap-4">
    <span class="flex flex-col items-center gap-2">
      <h1 class="text-gColor font-semibold text-4xl" >Free Bird Time</h1>
      <p class="text-grColor" >Aguarde pelo horário do Free Bird, by Álvaro</p>
    </span>
    <BirdTime/>
    <p class="text-grColor">
      Faça uma doação via pix de qualquer valor e ajude a manter este pobre programador (ou de um emprego). 
    </p>
    <p class="text-gColor">
      Chave pix: vagnespeixe@gmail.com
    </p>
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
    }
  }

</script>
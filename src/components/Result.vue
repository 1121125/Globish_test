<template>
  <div class="cover">
    <div class="result-container">
      <h1>ผลลัพธ์ของคุณคือ</h1>
      <img
        src="../assets/TheGradual.png"
        v-if="submitResult.totalScore >= 131"
      />
      <img
        src="../assets/TheEnthusiastic.png"
        v-else-if="submitResult.totalScore >= 91"
      />
      <img
        src="../assets/TheGradual.png"
        v-else-if="submitResult.totalScore >= 60"
      />
      <div class="text-container">
        <h3>คุณรู้จัก Globish ผ่าน</h3>
        <h3>{{ submitResult.know.join(',') }}</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Result',
  props: ['submitResult'],
};
</script>

<style lang="scss">
.cover {
  padding: 2rem 5px;
  max-width: 720px;
  margin: 0 auto;
}
.result-container {
  background: #fff;
  border-radius: 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: fit-content;
  h1 {
    text-align: center;
    font-size: 32px;
    padding: 1.5rem;
  }
  img {
    width: 100%;
  }
}
.text-container {
  padding: 2rem;
  h3 {
    text-align: center;
    font-size: 20px;
  }
}
</style>

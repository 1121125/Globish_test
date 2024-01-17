<template>
  <div class="page-container">
    <div class="track-container">
      <div
        v-for="test in tests"
        :key="test.id"
        :class="test.id <= questionTrack ? 'active' : 'no-active'"
      ></div>
    </div>
    <TestBox
      :test="tests[questionTrack - 1]"
      :answers="answers"
      @answer="selectAnswer"
    />
    <div class="button-container">
      <button @click="goBack">กลับ</button>
      <button v-if="questionTrack < 7" @click="goNext">ต่อไป</button>
      <button v-else>ดูผลลัพธ์</button>
    </div>
  </div>
</template>

<script lang="ts">
import TestBox from '@/components/TestBox.vue';
export default {
  name: 'PersonalityTest',
  components: {
    TestBox,
  },
  data() {
    return {
      tests: [
        {
          id: 1,
          question: 'ถ้าวันนี้เป็นวันหยุด คุณจะ...',
          choices: [
            { id: 1, point: 10, description: 'นอนเล่น พักผ่อน' },
            { id: 2, point: 20, description: 'ดูหนัง ดูซีรี่ส์ เล่นเกม' },
            { id: 3, point: 30, description: 'เรียนรู้อะไรใหม่ ๆ' },
          ],
        },
        {
          id: 2,
          question: 'คุณต้องการพัฒนาภาษาอังกฤษเพื่ออะไร?',
          choices: [
            { id: 1, point: 30, description: 'การทำงาน' },
            { id: 2, point: 10, description: 'เที่ยวต่างประเทศ' },
            { id: 3, point: 20, description: 'ใช้ในชีวิตประจำวัน' },
          ],
        },
        {
          id: 3,
          question: 'สไตล์การเรียนภาษาอังกฤษของคุณเป็นแบบไหน?',
          choices: [
            {
              id: 1,
              point: 30,
              description: 'เรียนคอร์สออนไลน์ / โรงเรียนสอนภาษา',
            },
            {
              id: 2,
              point: 20,
              description: 'เรียนด้วยตนเอง เช่น อ่านหนังสือ ดูหนัง ฟังเพลง',
            },
            {
              id: 3,
              point: 10,
              description: 'คุยกับเพื่อนต่างชาติ / ไปเที่ยวต่างประเทศ',
            },
          ],
        },
        {
          id: 4,
          question: 'คุณใช้ภาษาอังกฤษบ่อยแค่ไหน?',
          choices: [
            { id: 1, point: 30, description: 'เป็นประจำทุกวัน' },
            { id: 2, point: 10, description: 'เป็นบางครั้ง' },
            { id: 3, point: 20, description: 'นาน ๆ ที / ไม่ได้ใช้เลย' },
          ],
        },
        {
          id: 5,
          question: 'คุณอยากพัฒนาสกิลภาษาอังกฤษสกิลไหนมากที่สุด?',
          choices: [
            { id: 1, point: 20, description: 'การฟัง' },
            { id: 2, point: 10, description: 'การพูด' },
            { id: 3, point: 30, description: 'การเขียน' },
          ],
        },
        {
          id: 6,
          question: 'อยากเรียนภาษาอังกฤษ แต่...',
          choices: [
            { id: 1, point: 30, description: 'ไม่มีเวลา' },
            { id: 2, point: 10, description: 'เนื้อหาไม่น่าสนใจ / สอนไม่สนุก' },
            { id: 3, point: 20, description: 'ไม่มั่นใจ' },
          ],
        },
        {
          id: 7,
          question: 'คุณรู้จัก Globish ผ่านช่องทางใด(เลือกได้มากกว่า 1 ข้อ)',
          choices: [
            { id: 1, point: 0, description: 'Instagram' },
            { id: 2, point: 0, description: 'Facebook' },
            { id: 3, point: 0, description: 'อื่นๆ (โปรดระบุ)' },
          ],
        },
      ],
      questionTrack: 1,
      answers: [],
    };
  },
  methods: {
    goNext(this: { questionTrack: number }): void {
      this.questionTrack++;
    },
    goBack(this: { questionTrack: number }): void {
      if (this.questionTrack <= 1) {
        return;
      }
      this.questionTrack--;
    },
    selectAnswer(
      this: {
        answers: {
          test_id: number;
          choice_id: number;
          point: number;
        }[];
      },
      choice_id: number,
      test_id: number,
      point: number
    ) {
      console.log(choice_id, test_id);
      const findIndex = this.answers.findIndex((el) => el.test_id === test_id);
      if (findIndex >= 0) {
        if (this.answers[findIndex].choice_id === choice_id) {
          this.answers.splice(findIndex, 1);
        } else {
          this.answers.splice(findIndex, 1, { test_id, choice_id, point });
        }
      } else {
        this.answers.push({ test_id, choice_id, point });
      }
      this.answers = [...this.answers];
    },
  },
};
</script>

<style lang="scss">
.page-container {
  height: 100vh;
  max-width: 720px;
  margin: 0 auto;
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 44px;
}
.track-container {
  display: flex;
  gap: 5px;
  div {
    flex: 1 1;
    height: 9px;
    border-radius: 999px;
  }
  .no-active {
    background-color: #fff;
  }
  .active {
    background-color: #333;
  }
}
.button-container {
  display: flex;
  gap: 1rem;
  button {
    padding: 0.1rem;
    border-radius: 999px;
    border: 1px solid black;
    font-family: 'IBM Plex Sans Thai';
    font-size: 20px;
    cursor: pointer;
  }
  :nth-child(1) {
    flex: 3 1;
  }
  :nth-child(2) {
    flex: 7 1;
    background-color: $secondary-color;
  }
}
</style>

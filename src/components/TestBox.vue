<template>
  <div class="test-container">
    <h1>Q{{ test.id }}</h1>
    <div class="question-container">
      <h2>{{ test.question }}</h2>
    </div>
    <div class="choices">
      <div
        v-for="choice in test.choices"
        :key="choice.id"
        :class="
          choice_answer_id == choice.id ? 'active choice' : 'no-active choice'
        "
        @click="answer(choice.id, choice.point)"
      >
        <p>
          {{ choice.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TestBox',
  props: ['test', 'answers'],
  data() {
    return {
      inputVisible: false,
    };
  },
  computed: {
    choice_answer_id(): number | null {
      const filteredAnswers = (this as any).answers.filter(
        (answer: { test_id: number }) =>
          answer.test_id === (this as any).test.id
      );

      return filteredAnswers.length > 0 ? filteredAnswers[0].choice_id : null;
    },
  },
  methods: {
    answer(this: { test: { id: number } }, id: number, point: number) {
      (this as any).$emit('answer', id, this.test.id, point);
    },
  },
};
</script>

<style lang="scss">
.test-container {
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-family: 'Gloria Hallelujah';
    font-size: 32px;
    color: #c8c8c8;
  }
  h2 {
    font-size: 16px;
  }
}
.question-container {
  height: 60px;
  padding: 0 10px;
}
.choices {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.choice {
  cursor: pointer;
  border: 1px solid;
  border-radius: 20px;
  height: 72px;
  padding: 5px 1rem;
  display: flex;
  align-items: center;
}
.active {
  background: $primary-color;
}
input {
  margin: 0 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid;
  font-size: 16px;
}
</style>

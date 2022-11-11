<template>
  <div>
    <div v-if="!submitted">
      <div class="mb-3">
        <label for="question" class="form-label">question</label>
        <input
          type="text"
          class="form-control"
          id="question"
          required
          name="question"
          v-model="qna.question"
        />
      </div>
      <div class="mb-3">
        <label for="questioner" class="form-label">questioner</label>
        <input
          type="questioner"
          class="form-control"
          id="questioner"
          required
          name="questioner"
          v-model="qna.questioner"
        />
      </div>
      <div class="mb-3">
        <label for="answer" class="form-label">answer</label>
        <input
          type="text"
          class="form-control"
          id="answer"
          name="answer"
          v-model="qna.answer"
        />
      </div>
      <div class="mb-3">
        <label for="answerer" class="form-label">answerer</label>
        <input
          type="text"
          class="form-control"
          id="answerer"
          name="answerer"
          v-model="qna.answerer"
        />
      </div>
      <div class="mb-3">
        <button @click="saveQna" class="btn btn-primary">Submit</button>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-success" role="alert">Save qna successfully!</div>
      <button @click="newQna" class="btn btn-primary">Add New Qna</button>
    </div>
  </div>
</template>

<script>
import QnaDataService from "../../services/QnaDataService";

export default {
  data() {
    return {
      qna: {
        qno: null,
        question: "",
        questioner: "",
        answer: "",
        answerer: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveQna() {
      let data = {
        question: this.qna.question,
        questioner: this.qna.questioner,
        answer: this.qna.answer,
        answerer: this.qna.answerer,
      };
      QnaDataService.create(data)
        .then((response) => {
          this.qna.qno = response.data.qno;
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newQna() {
      this.submitted = false;
      this.qna = {};
    },
  },
};
</script>

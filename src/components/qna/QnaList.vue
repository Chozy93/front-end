<template>
  <div>
    <!-- search 관련 div 시작 -->
    <div class="col-md-8">
      <div class="input-group mb-3">
        <div class="col-2">
          <select class="form-select" v-model="searchSelect">
            <option>question</option>
            <option>questioner</option>
          </select>
        </div>

        <div class="col-9">
          <input
            type="text"
            class="form-control"
            placeholder="Search by Question"
            v-model="searchKeyword"
          />
        </div>

        <div class="input-group-append col-1">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="
              page = 1;
              retrieveQna();
            "
          >
            Search
          </button>
        </div>
        <!--            Todo : 수정 끝 -->
      </div>
    </div>
    <!-- search 관련 div 끝 -->

    <!--    Todo : page 바 시작 -->
    <div class="col-md-12">
      <div class="mb-3">
        Items per Page:
        <select v-model="pageSize" @change="handlePageSizeChange($event)">
          <option v-for="size in pageSizes" :key="size" :value="size">
            <!--            size : 3, 6, 9 -->
            {{ size }}
          </option>
        </select>
      </div>

      <b-pagination
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
      ></b-pagination>
    </div>
    <!--    Todo : page 바 끝 -->

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Question</th>
          <th scope="col">Questioner</th>
          <th scope="col">Answer</th>
          <th scope="col">Answerer</th>
        </tr>
      </thead>
      <tbody v-for="(data, index) in qna" :key="index">
        <tr>
          <td>{{ data.question }}</td>
          <td>{{ data.questioner }}</td>
          <td>{{ data.answer }}</td>
          <td>{{ data.answerer }}</td>
          <td>
            <router-link :to="'/qna/' + data.qno"
              ><span class="badge bg-success">Edit</span></router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import QnaDataService from "../../services/QnaDataService";

export default {
  data() {
    return {
      qna: [],
      searchKeyword: "",
      searchSelect: "question",

      page: 1,
      count: 0,
      pageSize: 3,

      pageSizes: [3, 6, 9],
    };
  },
  methods: {
    retrieveQna() {
      QnaDataService.getAll(
        this.searchSelect,
        this.searchKeyword,
        this.page - 1,
        this.pageSize
      )
        .then((response) => {
          const { qna, totalItems } = response.data;
          this.qna = qna;
          this.count = totalItems;

          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    //  페이지 번호 변경시 실행되는 함수
    //  부트스트랩-페이지 양식에 페이지번호만 매개변수로 전달하면 됨
    // 페이지번호를 변경한 숫자가 매개변수(value)로 전달됨
    handlePageChange(value) {
      this.page = value;
      this.retrieveQna();
    },

    // 셀렉트 박스 값 변경시 (페이지 크기 변경) 실행되는 함수
    // event.target.value : 셀렉트 박스에서 선택된 값
    handlePageSizeChange(event) {
      this.pageSize = event.target.value;
      this.page = 1;
      this.retrieveQna();
    },
  },
  mounted() {
    this.retrieveQna();
  },
};
</script>

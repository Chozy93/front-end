<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand ms-3">SimpleDMS</router-link>
      <div class="navbar-nav mr-auto">

        <!-- 대메뉴 #1 : 부서정보 -->
        <li class="nav-item dropdown ms-5">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >Department Info</a
          >
          <ul class="dropdown-menu">
            <li><router-link to="/dept" class="dropdown-item">Dept</router-link></li>
            <li><router-link to="/add/dept" class="dropdown-item">Add</router-link></li>
          </ul>
        </li>

        <!-- 대메뉴 #2 : 사원정보 -->
        <li class="nav-item dropdown ms-5">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >Employee Info</a
          >
          <ul class="dropdown-menu">
            <li><router-link to="/emp" class="dropdown-item">Emp</router-link></li>
            <li><router-link to="/add/emp" class="dropdown-item">Add</router-link></li>
          </ul>
        </li>

        <!-- 대메뉴 #3 : Faq -->
        <li class="nav-item dropdown ms-5">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >Faq</a
          >
          <ul class="dropdown-menu">
            <li><router-link to="/faq" class="dropdown-item">Faq</router-link></li>
            <li><router-link to="/add/faq" class="dropdown-item">Add</router-link></li>
          </ul>
        </li>

        <!-- 대메뉴 #4 : Customer -->
        <li class="nav-item dropdown ms-5">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >Customer Info</a
          >
          <ul class="dropdown-menu">
            <li><router-link to="/customer" class="dropdown-item">Customer</router-link></li>
            <li><router-link to="/add/customer" class="dropdown-item">Add</router-link></li>
          </ul>
        </li>

        <!-- 대메뉴 #5 : Qna -->
        <li class="nav-item dropdown ms-5">
          <a
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >Q &amp; A</a
          >
          <ul class="dropdown-menu">
            <li><router-link to="/qna" class="dropdown-item">Q &amp; A</router-link></li>
            <li><router-link to="/add/qna" class="dropdown-item">Add</router-link></li>
          </ul>
        </li>

      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

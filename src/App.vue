<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Movie List</a>
      <div class="d-flex">
        <input
          v-model="title"
          class="form-control me-2"
          type="search"
          placeholder="Search Movie"
          aria-label="Search"
          v-on:keyup.enter="searchMovie()"
        />
        <button class="btn btn-outline-primary" @click="searchMovie()">
          Search
        </button>
      </div>
    </div>
  </nav>
  <div>
    <router-link to="/">Movies</router-link>
    <router-link to="/movie">Movie Detail</router-link>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

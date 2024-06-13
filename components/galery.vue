<template>
  <div
      class="grid w-full grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8 lg:gap-12 [&amp;>img]:mx-auto">
    <img
        src="/epm.jpg"
        width="300"
        alt="Member Logo"
        class="mx-auto  overflow-hidden rounded-xl object-cover object-center hidden xl:block"
    /> <img
      src="/czeko.jpg"
      width="300"
      alt="Member Logo"
      class="mx-auto  overflow-hidden rounded-xl object-cover object-center hidden xl:block"
  /> <img
      src="/kotel.jpg"
      width="300"
      alt="Member Logo"
      class="mx-auto  overflow-hidden rounded-xl object-cover object-center hidden xl:block"
  />

    <div class="carousel w-full xl:hidden">
      <div id="slide1" class="carousel-item relative w-full">
        <img
            src="/epm.jpg"
            width="300"
            alt="Member Logo"
            class="mx-auto  overflow-hidden rounded-xl object-cover object-center"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img
            src="/czeko.jpg"
            width="300"
            alt="Member Logo"
            class="mx-auto  overflow-hidden rounded-xl object-cover object-center"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img
            src="/kotel.jpg"
            width="300"
            alt="Member Logo"
            class="mx-auto  overflow-hidden rounded-xl object-cover object-center"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style>

</style>

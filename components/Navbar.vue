<template>
  <div style="background: transparent; height: 3rem; width:100%;" class="grid grid-cols-10 gap4">
    <div class="col-span-1">
      <div class="grid grid-cols-3">
        <UAvatar class="col-span-1 m-2" src="https://www.github.com/ilasdavide2011.png"/>
        <p style="font-family: 'DM Serif Display';" class="col-span-2 m-auto text-lg">Ilas Davide</p>
      </div>
    </div>
    <div class="m-auto col-start-5 col-span-2">
      <NuxtLink to="/blog"><UButton color="white" variant="link">Blog</UButton></NuxtLink>
      <NuxtLink to="/about"><UButton color="white" variant="link">About</UButton></NuxtLink>
      <NuxtLink to="/projects"><UButton color="white" variant="link">Projects</UButton></NuxtLink>
      <NuxtLink to="/social"><UButton color="white" variant="link">Links</UButton></NuxtLink>
    </div>
  </div>
</template>


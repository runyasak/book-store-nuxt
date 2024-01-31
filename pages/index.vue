<template>
  <header class="bg-purple-400 p-2">
    <UContainer class="flex">
      <span class="font-bold">
        Book Store Management
      </span>
      <span class="ml-auto">
        YOUR NAME
      </span>
    </UContainer>
  </header>
  <UContainer class="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <UCard class="inline-block w-full">
      <NuxtImg class="mx-auto" src="https://picsum.photos/200/300" width="145" fit="cover" />
      <template #footer>
        <div class="flex flex-col">
          <span>The Housemaid</span>
          <span>by <ULink to="#" class="text-[#2F80ED] underline">Freida McFadden</ULink></span>
          <span>date <ULink to="#" class="text-[#2F80ED]">August 2023</ULink> </span>
        </div>

        <div class="flex gap-2 pt-2">
          <UButton>Read</UButton>
          <UButton color="sandy-brown">
            Edit
          </UButton>

          <UButton class="!bg-[#EB5757] hover:!bg-[#EB5757]/80">
            Delete
          </UButton>
        </div>
      </template>
    </UCard>
    <UCard class="inline-block w-full">
      <NuxtImg class="mx-auto" src="https://picsum.photos/200/300" width="145" fit="cover" />
      <template #footer>
        <div class="flex flex-col">
          <span>The Housemaid</span>
          <span>by <ULink to="#" class="text-[#2F80ED] underline">Freida McFadden</ULink></span>
          <span>date <ULink to="#" class="text-[#2F80ED]">August 2023</ULink> </span>
        </div>
      </template>
    </UCard>
    <UCard class="inline-block w-full">
      <NuxtImg class="mx-auto" src="https://picsum.photos/200/300" width="145" fit="cover" />
      <template #footer>
        <div class="flex flex-col">
          <span>The Housemaid</span>
          <span>by <ULink to="#" class="text-[#2F80ED] underline">Freida McFadden</ULink></span>
          <span>date <ULink to="#" class="text-[#2F80ED]">August 2023</ULink> </span>
        </div>
      </template>
    </UCard>
    <UCard class="inline-block w-full">
      <NuxtImg class="mx-auto" src="https://picsum.photos/200/300" width="145" fit="cover" />
      <template #footer>
        <div class="flex flex-col">
          <span>The Housemaid</span>
          <span>by <ULink to="#" class="text-[#2F80ED] underline">Freida McFadden</ULink></span>
          <span>date <ULink to="#" class="text-[#2F80ED]">August 2023</ULink> </span>
        </div>
      </template>
    </UCard>
    <UCard class="inline-block w-full justify-self-start">
      <NuxtImg class="mx-auto" src="https://picsum.photos/200/300" width="145" fit="cover" />
      <template #footer>
        <div class="flex flex-col">
          <span>The Housemaid</span>
          <span>by <ULink to="#" class="text-[#2F80ED] underline">Freida McFadden</ULink></span>
          <span>date <ULink to="#" class="text-[#2F80ED]">August 2023</ULink> </span>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>

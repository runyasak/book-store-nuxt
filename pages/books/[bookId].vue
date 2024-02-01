<script setup lang="ts">
interface QueryBooksByBookId {
  books: {
    title: string
    coverImageUrl: string
    publishedDate: string
    description: string
    rating: number
    author: {
      name: string
    }
  }[]
}

const route = useRoute()

const query = gql`
  query BooksByBookId($bookId: Int) {
    books(where: { bookId: { eq: $bookId } }) {
      title
      coverImageUrl
      publishedDate
      description
      rating
      author {
        name
      }
    }
  }
`

const { data } = await useAsyncQuery<QueryBooksByBookId>(query, {
  bookId: Number(route.params.bookId),
})

const book = computed(() => data.value.books[0])
</script>

<template>
  <UContainer class="flex h-[calc(100dvh-40px)] items-center p-8">
    <NuxtImg class="h-[405px] w-auto flex-1 object-contain" :src="book.coverImageUrl" />

    <div class="flex flex-1 flex-col gap-4">
      <div class="text-4xl font-bold">
        {{ book.title }}
      </div>
      <div>
        Author: {{ book.author.name }}
      </div>
      <div>
        Published Date : {{ book.publishedDate }}
      </div>
      <div class="flex gap-4">
        <span>
          Rating :
        </span>
        <IconHeart v-for="index of book.rating" :key="index" />
      </div>
      <div class="pt-8 font-bold">
        Description :
      </div>
      <div>
        {{ book.description }}
      </div>
    </div>
  </UContainer>
</template>

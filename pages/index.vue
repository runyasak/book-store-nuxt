<script setup lang="ts">
const query = gql`
  query Books {
    books {
      title
      coverImageUrl
      publishedDate
      author {
        name
      }
    }
  }
`

const { data } = await useAsyncQuery<{ books: {
  bookId: number
  title: string
  coverImageUrl: string
  publishedDate: string
  author: {
    name: string
  }
}[] }>(query)
</script>

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
    <BookDetailCard
      v-for="book of data.books"
      :key="book.bookId"
      :title="book.title"
      :cover-image-url="book.coverImageUrl"
      :author-name="book.author.name"
    />
  </UContainer>
</template>

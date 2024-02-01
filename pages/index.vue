<script setup lang="ts">
const query = gql`
  query Books {
    books {
      bookId
      title
      coverImageUrl
      publishedDate
      author {
        name
      }
    }
  }
`

interface QueryBooks {
  books: {
    bookId: number
    title: string
    coverImageUrl: string
    publishedDate: string
    author: {
      name: string
    }
  }[]
}

const { data } = await useAsyncQuery<QueryBooks>(query)
</script>

<template>
  <UContainer class="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <BookDetailCard
      v-for="book of data.books"
      :key="book.bookId"
      :title="book.title"
      :cover-image-url="book.coverImageUrl"
      :author-name="book.author.name"
      :published-date="book.publishedDate"
      @click-read="$router.push({ name: 'books-bookId', params: { bookId: book.bookId } })"
    />
  </UContainer>
</template>

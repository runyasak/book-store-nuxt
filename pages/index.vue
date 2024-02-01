<script setup lang="ts">
const isDeleteModalOpen = ref(false)

const { mutate: deleteBook, onDone } = useMuationDeleteBooks()

const { data } = await useQueryBooks()

const deleteBookId = ref<number | null>(null)

function onClickDelete(bookId: number) {
  isDeleteModalOpen.value = true
  deleteBookId.value = bookId
}

function onClickCloseModal() {
  isDeleteModalOpen.value = false
}

function onModalClickDelete() {
  if (deleteBookId.value === null)
    return

  deleteBook({ bookId: deleteBookId.value })
}

onDone(async () => {
  console.log('on done!!')
  onClickCloseModal()
  await execute()
  console.log('execute finish!')
})
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
      @click-delete="onClickDelete(book.bookId)"
    />
  </UContainer>

  <UModal v-model="isDeleteModalOpen">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Do you want to delete book?
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isDeleteModalOpen = false"
          />
        </div>
      </template>

      <div>
        Are you sure?
      </div>

      <template #footer>
        <div class="flex justify-end gap-4">
          <UButton
            color="gray"
            @click="onClickCloseModal"
          >
            Close
          </UButton>
          <UButton
            color="danger"
            @click="onModalClickDelete"
          >
            Delete
          </UButton>
        </div>
      </template>
    </UCard>
  </UModal>
</template>

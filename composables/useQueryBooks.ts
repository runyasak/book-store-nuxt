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

export default function () {
  return useAsyncQuery<QueryBooks>(gql`
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
  `)
}

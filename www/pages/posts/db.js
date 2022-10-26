let db = {
    articles: [
      {
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        title: 'My article',
        content: 'Content of the article.',
        date: '04/10/2022',
        author: 'Liz Gringer'
      },
      {
        id: '769nbfnd3-11c0-43da-975e-23skd34443',
        title: "Camille's article",
        content: 'Content of the article.',
        date: '04/02/2002',
        author: 'Camille Hascoët'
      }
    ],
    comments: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        timestamp: 1664835049,
        content: 'Content of the comment.',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Bob McLaren'
      }
    ]
}

export default db
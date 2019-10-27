import * as algoliaSearch from 'algoliasearch'
import * as React from 'react'

interface IAlgolia {
  algoliaIndex: algoliaSearch.Index
  searchAllAndSetArticleList(word: string, dispatch: React.Dispatch<any>): void
}

class Algolia implements IAlgolia {
  algoliaIndex = algoliaSearch(
    'BJI7EFTZSF',
    'b83625cbd299d487bcfe32e93c6671d3'
  ).initIndex('aspiring-engineer')

  searchAllAndSetArticleList(word: string, dispatch: React.Dispatch<any>) {
    this.algoliaIndex.search({ query: word }).then(searchResult => {
      dispatch({
        type: 'SET_ARTICLE_LIST',
        articleList: searchResult.hits,
      })
    })
  }
}

export default Algolia

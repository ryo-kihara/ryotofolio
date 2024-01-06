import { HttpLink, HttpOptions } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import { NextSSRInMemoryCache, NextSSRApolloClient } from '@apollo/experimental-nextjs-app-support/ssr'

export const getApolloClient = (httpLinkOptions: HttpOptions) => {
  const { getClient } = registerApolloClient(() => {
    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: new HttpLink(httpLinkOptions),
    })
  })

  return {
    getClient,
  }
}

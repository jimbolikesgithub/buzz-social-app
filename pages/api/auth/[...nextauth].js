import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // ...add more providers here
    TwitterProvider({
        clientId: 'ZnB0WGJXVWs1NzZlYms3c3RoYi06MTpjaQ',
        clientSecret: '1XTtu0Pz_sORKyvcIHU_NJqaYA9BFs0qZiWfE6_JH_peZ7HLMT',
        version: '2.0', // opt-in to Twitter OAth 2.0
      }),
  ],
}

export default NextAuth(authOptions)
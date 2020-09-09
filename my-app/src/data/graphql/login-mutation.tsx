import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

export const loginMutation = (email: string, password: string) => {
  client.mutate({
    mutation: gql`
      mutation Login($data:LoginInputType!){
        login(data: $data){
          token
          user {
            id
            name
            phone
            birthDate
            email
            role
          }
        }
      }
    `,
    variables : {
      data: { email, password }
    },
  })
};

export function saveToken (token: string) {
  localStorage.setItem("token", token);
} 

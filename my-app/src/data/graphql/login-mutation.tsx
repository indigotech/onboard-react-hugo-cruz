import { gql } from '@apollo/client';
import { client } from './client';

export const loginMutation = (email: string, password: string): Promise<any> => {
  return client.mutate({
    mutation: gql`
      mutation Login ($data:LoginInputType!) {
        login (data: $data) {
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

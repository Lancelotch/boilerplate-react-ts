import gql from "graphql-tag";

export const SIGN_IN = gql`
  mutation signIn($email: string!, password: string!) {
    saveRocket(email: $email, password: $password) {
      email
      token
    }
  }
`;

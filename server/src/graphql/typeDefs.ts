import {gql} from "apollo-server-express";

export const typeDefs = gql`

    type Mutation {
        addInstrument(input: AddInstrumentInput!): Instrument!
        deleteInstrument(id: ID!): Instrument!
    }

    type Instrument {
        id: ID!
        ticker: String!
    }

    type Query {
        instruments: [Instrument!]!
    }

    input AddInstrumentInput {
        ticker: String!
    }
`;
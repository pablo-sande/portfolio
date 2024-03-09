import type { APIRoute } from 'astro';
import { createYoga, createSchema } from 'graphql-yoga';

import SkillLevels from '../../data/skills';

export const prerender = false

const schema = createSchema({
  typeDefs: `
    type SkillItem {
      id: Int!
      title: String!
      thumbnail: String!
      skillLevel: Int!
    }
    type Query {
      skills: [SkillItem!]
    }    
  `,
  resolvers: {
    Query: {
      skills: () => SkillLevels,
    },
  },
});

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: {
    Request: Request,
    Response: Response,
  },
});

export const POST: APIRoute = async (context) => {
  const { request } = context;
  return handleRequest(request, context);
};
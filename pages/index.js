import { gql, GraphQLClient } from "graphql-request";

export default function Home() {
  return (
    <main className="w-full">
      <h1>Testy Test</h1>
    </main>
  );
}

const query = gql`
  query {
    course {
      id
      name
      slug
      courseDetail {
        ... on CourseHeaderRecord {
          __typename
          bigTitle
          smallTitle
          buttonText
          description
          id
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + process.env.DATOCMS_API_KEY,
    },
  });
  const course = await graphQLClient.request(query);
  console.log(course);
  return {
    props: course,
  };
}

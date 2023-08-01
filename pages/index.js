import { gql, GraphQLClient } from "graphql-request";
import CourseSection from "@/components/CourseSection";

export default function Home({ course }) {
  return (
    <main className="w-full">
      {course.courseDetail.map((section) => (
        <CourseSection details={section} key={section.id} />
      ))}
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
  return {
    props: course,
  };
}

import { gql, useQuery } from '@apollo/client';

// gql: allow to see graphql syntax highlighting
const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

// Hooks: functions that allow components to have new behaviors, like fetching an api*/
function App() {
  // This is the better way to do GraphQL requests
  // useQuery returns an object that contains lessons which are from type Lesson[]
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  /*
  That's a way to do GraphQL requests with Apollo, but there are better ways.
  useEffect(() => {
    client
      .query({
        query: GET_LESSONS_QUERY,
      })
      .then(response => {
        console.log(response.data);
      });
  }, []);
  */
  return (
    <div>
      <ul>
        {/* If there is a data object, then map each lesson */}
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

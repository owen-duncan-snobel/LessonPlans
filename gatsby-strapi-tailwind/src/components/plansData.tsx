import { graphql, useStaticQuery } from 'gatsby';

const getPlansData: Function = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allStrapiPlans {
          edges {
            node {
              id
              author
              description
              title
            }
          }
        }
      }
`)
    return data;
}
export default getPlansData;
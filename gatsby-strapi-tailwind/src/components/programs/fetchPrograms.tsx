import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';


const useProgramData = () => {
  const { allStrapiPrograms } = useStaticQuery(
    graphql`
        query MyQuery {
          allStrapiPrograms {
            edges {
              node {
                id
                programName
                description
                slug
                created_at
                updated_at
                category {
                  category
                }
              }
            }
          }
        }
        `
  )
  return allStrapiPrograms.edges;
}
export default useProgramData;
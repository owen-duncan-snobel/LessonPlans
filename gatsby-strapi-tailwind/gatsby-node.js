const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }

            return result;
        })
    )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const getPrograms = makeRequest(graphql, `
    {
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
    `).then(result => {
        // Create pages for each article.
        result.data.allStrapiPrograms.edges.forEach(({ node }) => {
            console.log(node)
            createPage({
                path: `/${node.slug}`,
                component: path.resolve(`src/components/programs/templates/singleProgramLayout.tsx`),
                context: {
                    slug: node.slug,
                    data: node
                },
            })
        })
    });

    // Query for articles nodes to use in creating pages.
    return getPrograms;
};
import React from "react";
import {Link} from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <h1 style={{marginBottom:'3rem', fontSize:'3.2rem'}}>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted By: {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
        <br />
        <br/>
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br/>
        <br/>
        <hr/>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage;
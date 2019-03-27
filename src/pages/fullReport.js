import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h3>00 - full - report</h3>
    <p>This is a concatenated report of all the generated win32k usage logs.</p>
    <div>
      {
        data.allFullReportJson.edges.map((node) => (
        <div>
          <p className="stackFrequency">{node.node.frequency} - {node.node.frames[0]}</p>
          {node.node.frames.map((elem) => (<p className="stackFrame">{elem}</p>))}
        </div>
        ))
      }
    </div>
  </div>
);

export const query = graphql`
query {
  allFullReportJson {
    edges {
      node {
        frequency
        frames
      }
    }
  }
}`;

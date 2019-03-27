import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h3>07 - all - breakpoints - report</h3>
    <p>This is a log capturing basic browsing to mozilla.org with no NT call breakpoints excluded.</p>
    <div>
      {
        data.allAllBreakpointsReportJson.edges.map((node) => (
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
  allAllBreakpointsReportJson {
    edges {
      node {
        frequency
        frames
      }
    }
  }
}`;

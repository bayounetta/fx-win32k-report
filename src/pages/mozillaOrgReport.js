import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h3>01 - mozilla.org - report</h3>
    <p>This is a log capturing loading a single page.</p>
    <div>
      {data.allMozillaOrgReportJson.edges.map((node) => (
        <div>
          <p className="stackFrequency">
            {node.node.frequency} - {node.node.frames[0]}
          </p>
          {node.node.frames.map((elem) => (
            <p className="stackFrame">{elem}</p>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export const query = graphql`
  query {
    allMozillaOrgReportJson {
      edges {
        node {
          frequency
          frames
        }
      }
    }
  }
`;

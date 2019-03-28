import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h3>06 - printing - report</h3>
    <p>This is a log capturing navigation to mozilla.org followed by printing the page to pdf.</p>
    <div>
      {data.allPrintingReportJson.edges.map((node) => (
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
    allPrintingReportJson {
      edges {
        node {
          frequency
          frames
        }
      }
    }
  }
`;

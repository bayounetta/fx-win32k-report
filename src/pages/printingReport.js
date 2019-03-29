import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';

import logStyles from './log.module.css';

export default ({ data }) => (
  <div>
    <Header />
    <div className="page">
      <h3>06 - printing - report</h3>
      <p className={logStyles.reportExplanation}>
        This is a log capturing navigation to mozilla.org followed by printing the
        page to pdf.
      </p>
      <div className={logStyles.stack}>
        {data.allPrintingReportJson.edges.map((node) => (
          <div>
            <p className={logStyles.stackFrequency}>
              {node.node.frequency} - {node.node.frames[0]}
            </p>
            {node.node.frames.map((elem) => (
              <p className={logStyles.stackFrame}>{elem}</p>
            ))}
          </div>
        ))}
      </div>
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

import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';

import logStyles from './log.module.css';

export default ({ data }) => (
  <div>
    <Header />
    <div className="page">
      <h3>05 - webrtc - report</h3>
      <h3>this log last generated at: 4/15/2019, 8:42:52 AM</h3>
      <p className={logStyles.reportExplanation}>
      This is a log capturing the non-crashing peer connection tests under /dom/media/tests/mochitest/.
      </p>
      <div className={logStyles.stack}>
        {data.allWebrtcReportJson.edges.map((node) => (
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
    allWebrtcReportJson {
      edges {
        node {
          frequency
          frames
        }
      }
    }
  }
`;

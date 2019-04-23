import { graphql } from 'gatsby';
import React from 'react';

import Header from '../../components/header';

import logStyles from '../log.module.css';

export default ({ data }) => (
  <div>
    <Header />
    <div className="page">
      <h3>01 - mozilla.org - report</h3>
      <p>Log last generated at: &emsp; &emsp; &emsp; {data.site.buildTime.replace('T', ' ').split('.')[0]} </p>
      <p>On mozilla-central revision: &emsp; {data.site.siteMetadata.revision}</p>
      <p className={logStyles.reportExplanation}>
      This is a log capturing loading a single page.
      </p>
      <div className={logStyles.stack}>
        {data.allMozillaOrgLongReportJson.edges.map((node) => (
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
    site {
      buildTime
      siteMetadata {
        revision
      }
    }
    allMozillaOrgLongReportJson {
      edges {
        node {
          frequency
          frames
        }
      }
    }
  }
`;

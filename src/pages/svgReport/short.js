import { graphql } from 'gatsby';
import React from 'react';

import Header from '../../components/header';

import logStyles from '../log.module.css';

export default ({ data }) => (
  <div>
    <Header />
    <div className="page">
      <h3>02 - svg - report</h3>
      <p>Log last generated at: &emsp; &emsp; &emsp; {data.site.buildTime.replace('T', ' ').split('.')[0]} </p>
      <p>On mozilla-central revision: &emsp; {data.site.siteMetadata.revision}</p>
      <p className={logStyles.reportExplanation}>
      This is a log capturing the rendering of the Ghostscript Tiger svg.
      </p>
      <div className={logStyles.stack}>
        {data.allSvgShortReportJson.edges.map((node) => (
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
    allSvgShortReportJson {
      edges {
        node {
          frequency
          frames
        }
      }
    }
  }
`;

import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';

import logStyles from './log.module.css';

export default ({ data }) => (
  <div>
    <Header />
    <div className="page">
      <h3>08 - test plugin - report</h3>
      <p className={logStyles.reportExplanation}>
        This is a log capturing the non-crashing tests under /dom/plugins/test/mochitest.
      </p>
      <div className={logStyles.stack}>
        {data.allTestPluginReportJson.edges.map((node) => (
          <div>
            <p className={logStyles.stackFrequency}>
              {node.node.frequency} -{node.node.frames[0]}
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
    allTestPluginReportJson {
      edges {
        node {
          frequency
          frames
        }
      }
    }
  }
`;

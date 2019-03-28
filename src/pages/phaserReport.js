import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h3>04 - phaser - report</h3>
    <p>This is a log capturing a short play session of break-out in Phaser.</p>
    <div>
      {data.allPhaserReportJson.edges.map((node) => (
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
    allPhaserReportJson {
      edges {
        node {
          frequency
          frames
        }
      }
    }
  }
`;

import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h3>05 - webrtc - report</h3>
    <p>This is a log capturing a peer to peer video conference connection of WebRTC.</p>
    <div>
      {data.allWebrtcReportJson.edges.map((node) => (
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

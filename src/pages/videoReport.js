import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h3>03 - video - report</h3>
    <p>This is a log capturing video playback of red pandas on YouTube.</p>
    <div>
      {
        data.allVideoReportJson.edges.map((node) => (
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
  allVideoReportJson {
    edges {
      node {
        frequency
        frames
      }
    }
  }
}`;

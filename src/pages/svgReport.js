import { graphql } from 'gatsby';
import React from 'react';

import Header from '../components/header';

export default ({ data }) => (
  <div>
    <Header />
    <h3>02 - svg - report</h3>
    <p>This is a log capturing the rendering of the Ghostscript Tiger svg.</p>
    <div>
      {
        data.allSvgReportJson.edges.map((node) => (
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
  allSvgReportJson {
    edges {
      node {
        frequency
        frames
      }
    }
  }
}`;

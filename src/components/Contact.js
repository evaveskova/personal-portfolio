import React from 'react';

const Contact = ({ references }) => (
  <div className="contact-links" ref={references}>
    <span>
      <a href="https://www.linkedin.com/in/evaveskova">
        LinkedIn
      </a>
    </span>
    <span>
      <a href="https://github.com/evaveskova">
        github
      </a>
    </span>
    <span>
      <a href="https://twitter.com/VangelinaSkov">
        Twitter
      </a>
    </span>
  </div>
);

export default Contact;

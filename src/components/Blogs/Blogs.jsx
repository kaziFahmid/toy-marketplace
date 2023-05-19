import React from 'react';
import UseTitle from '../../UseTitle';

export default function Blogs() {
  UseTitle('Blogs')
  return (
    <div>
      <h2 className='mt-5'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
      <p>An access token is a credential used by a client to access protected resources on a server. It is typically issued by an authentication server after the client successfully authenticates with valid credentials. The access token is then included in the client's requests to the server to authenticate and authorize the client's access to specific resources.</p>
      <p>A refresh token is a credential used to obtain a new access token without requiring the client to re-authenticate. When an access token expires, the client can use the refresh token to request a new access token from the authentication server.</p>
      <p>Both access tokens and refresh tokens should be securely stored on the client-side. Access tokens are often stored in memory or in a browser's local storage or session storage. Refresh tokens, being long-lived credentials, should be stored securely, such as in an HTTP-only secure cookie or a secure server-side storage. Storing tokens securely helps prevent unauthorized access and token theft.</p>

      <h2>Compare SQL and NoSQL databases</h2>
      <p>SQL (Structured Query Language) and NoSQL (Not Only SQL) are two different types of database management systems:</p>
      <ul>
        <li>SQL databases are relational databases that store and manage data in structured tables with predefined schemas. They use SQL for defining and manipulating the data. SQL databases provide strong data consistency, ACID (Atomicity, Consistency, Isolation, Durability) properties, and are suitable for complex transactions and structured data.</li>
        <li>NoSQL databases are non-relational databases that store and manage data in various formats, such as key-value pairs, documents, graphs, or wide-column stores. They are schema-less and don't require predefined schemas. NoSQL databases are highly scalable, provide high availability, and are well-suited for handling large amounts of unstructured or semi-structured data.</li>
      </ul>
      <p>The choice between SQL and NoSQL databases depends on factors such as the nature of the data, scalability requirements, performance needs, and the complexity of the application.</p>

      <h2>What is Express.js? What is Nest.js ?</h2>
      <p>Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple and intuitive way to build web applications and APIs. Express.js allows developers to handle HTTP requests and responses, define routes, and implement middleware to add functionality to the application.</p>
      <p>Nest.js is a progressive TypeScript-based framework for building efficient and scalable server-side applications. It is built on top of Express.js and offers an opinionated structure and architecture. Nest.js leverages decorators, dependency injection, and modules to enable developers to build modular and maintainable applications. It is widely used for building enterprise-grade applications with TypeScript and Node.js.</p>

      <h2>What is MongoDB aggregate and how does it work ?</h2>
      <p>MongoDB's aggregate function is used to perform data aggregation operations on collections. It allows you to process and transform documents within a collection and perform various operations like filtering, grouping, sorting, and calculating aggregate values.</p>
      <p>The aggregate function in MongoDB follows a pipeline-based approach, where you can chain multiple stages together to form a pipeline. Each stage in the pipeline performs a specific operation on the documents. The output of one stage becomes the input for the next stage in the pipeline.</p>
      <p>The stages in the pipeline can include operations like $match (filtering documents), $group (grouping documents), $sort (sorting documents), $project (selecting specific fields), and many more. The aggregate function provides powerful capabilities for data aggregation and analysis in MongoDB.</p>
    </div>
  );
}

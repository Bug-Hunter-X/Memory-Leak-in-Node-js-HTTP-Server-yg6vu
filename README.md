# Node.js HTTP Server Memory Leak

This repository demonstrates a memory leak in a Node.js HTTP server and provides a solution.

## Bug

The `bug.js` file contains a simple HTTP server that echoes the requested URL back to the client.  However, it suffers from a memory leak when handling large requests because it doesn't properly handle the request data.  This leads to a crash after a sufficient number of large requests are processed.

## Solution

The `bugSolution.js` file shows how to fix the memory leak using the appropriate methods for handling large requests. This is done with streaming the response to the client.

## How to reproduce the bug

1. Clone the repository.
2. Run `node bug.js`.
3. Send many large requests to the server (e.g., using `curl -X GET "http://localhost:3000/a-very-long-url"`).
4. Observe that the server eventually crashes due to the memory leak.

## How to test the solution

1. Run `node bugSolution.js`.
2. Send many large requests to the server (e.g., using `curl -X GET "http://localhost:3000/a-very-long-url"`).
3. Observe that the server does not crash because the memory leak has been resolved.
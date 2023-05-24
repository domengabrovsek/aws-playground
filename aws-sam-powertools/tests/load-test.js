import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 5,
  duration: '100s',
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function () {
  let baseUrl = 'https://wkigo5kp3l.execute-api.eu-central-1.amazonaws.com/Stage'; // replace with your API endpoint

  // Define the minimum and maximum number of calls for each endpoint
  let minCalls = 1;
  let maxCalls = 5;

  // Generate a random number of calls for each endpoint
  let getCalls = randomIntFromInterval(minCalls, maxCalls);
  let postCalls = randomIntFromInterval(minCalls, maxCalls);
  let putCalls = randomIntFromInterval(minCalls, maxCalls);
  let deleteCalls = randomIntFromInterval(minCalls, maxCalls);

  // GET /products
  for (let i = 0; i < getCalls; i++) {
    let getResponse = http.get(`${baseUrl}/products`);
    check(getResponse, {
      'GET /products status was 200': (r) => r.status === 200,
    });
    sleep(1); // Add a delay between requests if needed
  }

  // POST /products
  for (let i = 0; i < postCalls; i++) {
    let postResponse = http.post(`${baseUrl}/products`, { /* post data here */ });
    check(postResponse, {
      'POST /products status was 201': (r) => r.status === 200,
    });
    sleep(1); // Add a delay between requests if needed
  }

  // PUT /products
  for (let i = 0; i < putCalls; i++) {
    let putResponse = http.put(`${baseUrl}/products`, { /* put data here */ });
    check(putResponse, {
      'PUT /products status was 200': (r) => r.status === 200,
    });
    sleep(1); // Add a delay between requests if needed
  }

  // DELETE /products
  for (let i = 0; i < deleteCalls; i++) {
    let deleteResponse = http.del(`${baseUrl}/products`);
    check(deleteResponse, {
      'DELETE /products status was 200': (r) => r.status === 200,
    });
    sleep(1); // Add a delay between requests if needed
  }
}

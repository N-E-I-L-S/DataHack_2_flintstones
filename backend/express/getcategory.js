const http = require('http');
const cors = require('cors'); // Assuming you have cors set up
const bodyParser = require('body-parser'); // You may need to use body-parser for parsing the request body

const requestEndpoint = "http://54d9-2409-4040-6e89-2c4b-d944-471e-3108-7921.ngrok-free.app/user-classify/"; // Replace with your API endpoint

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/getcategory') {
    let data = '';

    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', () => {
      try {
        const fetchOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const requestOptions = http.request(requestEndpoint, fetchOptions, (response) => {
          let responseData = '';

          response.on('data', (chunk) => {
            responseData += chunk;
          });

          response.on('end', () => {
            console.log(responseData);
            res.setHeader('Content-Type', 'application/json');
            res.end(responseData);
          });
        });

        requestOptions.on('error', (error) => {
          console.error(error);
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Internal Server Error' }));
        });

        requestOptions.write(data);
        requestOptions.end();
      } catch (error) {
        console.error(error);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
# Express Wikipedia-like API

This repository contains a simple Express.js application that serves as a Wikipedia-like API. It allows you to perform CRUD operations (Create, Read, Update, Delete) on articles stored in a MongoDB database.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/mercyano/wiki-api.git
   ```

2. Install the required dependencies using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Make sure you have MongoDB installed and running on your machine.

## Usage

1. Start the server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

2. Access the API using your preferred HTTP client (e.g., cURL, Postman, etc.) at `http://localhost:3000`.

## API Endpoints

### Request Targeting All Articles

- `GET /articles` - Retrieves all articles from the database.
- `POST /articles` - Creates a new article.
- `DELETE /articles` - Deletes all articles.

### Request Targeting a Specific Article

- `GET /articles/:articleTitle` - Retrieves a specific article by its title.
- `PUT /articles/:articleTitle` - Replaces a specific article with updated content.
- `PATCH /articles/:articleTitle` - Updates a specific article with new content.
- `DELETE /articles/:articleTitle` - Deletes a specific article.

## Example Usage

### Create a new article

- Endpoint: `POST /articles`
- Request body:

  ```json
  {
    "title": "Introduction to Express",
    "content": "Express is a fast, unopinionated, and minimalist web framework for Node.js."
  }
  ```

- Response:

  ```
  New article added
  ```

### Retrieve all articles

- Endpoint: `GET /articles`
- Response:

  ```json
  [
    {
      "_id": "611ff41de0fe670012345678",
      "title": "Introduction to Express",
      "content": "Express is a fast, unopinionated, and minimalist web framework for Node.js."
    },
    {
      "_id": "611ff41de0fe670012345679",
      "title": "Node.js Basics",
      "content": "Node.js is an open-source, cross-platform JavaScript runtime environment."
    }
  ]
  ```

### Update an article

- Endpoint: `PATCH /articles/Introduction%20to%20Express`
- Request body:

  ```json
  {
    "content": "Express is a fast, unopinionated, and minimalist web framework for building web applications."
  }
  ```

- Response:

  ```
  Article updated
  ```

### Delete an article

- Endpoint: `DELETE /articles/Introduction%20to%20Express`
- Response:

  ```
  Article deleted
  ```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

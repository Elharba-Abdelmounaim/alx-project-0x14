# alx-project-0x14 - MoviesDatabase API Integration

## API Overview
The **MoviesDatabase API** is a RESTful API that provides rich movie-related data. It allows developers to:
- Browse a wide collection of movies.
- Filter movies by year, genre, and more.
- Access detailed metadata for specific movie titles.
- Implement pagination for scalable data display.

This API is ideal for building movie discovery applications, search interfaces, and media dashboards.

## Version
**v1.0**  
(Current version as per the MoviesDatabase API documentation.)

## Available Endpoints

| Endpoint | Description |
|----------|-------------|
| `/titles` | Retrieve a list of movie titles with optional filtering by genre, year, etc. |
| `/titles/{id}` | Get full details of a specific movie by its unique ID. |
| `/genres` | Fetch a list of available movie genres. |
| `/years` | Get available years with movie releases. |

> Note: Parameters like `page`, `limit`, `genre`, and `year` can be used to filter and paginate results.

## Request and Response Format

### ✅ Request Example

```http
GET /titles?year=2023&genre=action&page=1&limit=10
Host: api.moviesdatabase.com
Headers:
  Authorization: Bearer YOUR_API_KEY

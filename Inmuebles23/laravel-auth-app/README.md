# Laravel Authentication Application

This project is a Laravel-based application that provides user authentication functionality using a PostgreSQL database. It includes features for user registration and login, ensuring secure access to protected routes.

## Project Structure

The project is organized as follows:

```
laravel-auth-app
├── app
│   ├── Http
│   │   ├── Controllers
│   │   │   └── AuthController.php
│   │   └── Middleware
│   │       └── Authenticate.php
│   ├── Models
│   │   └── User.php
│   └── Providers
│       └── AppServiceProvider.php
├── database
│   ├── migrations
│   │   └── create_users_table.php
│   └── seeders
│       └── DatabaseSeeder.php
├── routes
│   └── api.php
├── config
│   └── database.php
├── .env.example
├── composer.json
├── artisan
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd laravel-auth-app
   ```

2. **Install dependencies:**
   ```
   composer install
   ```

3. **Set up the environment file:**
   Copy the `.env.example` file to `.env` and update the database connection settings to match your PostgreSQL configuration.

4. **Generate the application key:**
   ```
   php artisan key:generate
   ```

5. **Run migrations:**
   ```
   php artisan migrate
   ```

6. **Seed the database (optional):**
   If you want to populate the database with initial data, run:
   ```
   php artisan db:seed
   ```

## Usage

- **API Endpoints:**
  The application provides API endpoints for user registration and login, which are defined in the `routes/api.php` file.

- **Authentication Middleware:**
  The `Authenticate` middleware ensures that only authenticated users can access certain routes.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
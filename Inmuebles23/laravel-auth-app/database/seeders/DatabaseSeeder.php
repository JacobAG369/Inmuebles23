<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Create default users
        DB::table('users')->insert([
            [
                'name' => 'Admin User',
                'email' => 'admin@example.com',
                'password' => bcrypt('password'),
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'Regular User',
                'email' => 'user@example.com',
                'password' => bcrypt('password'),
                'remember_token' => Str::random(10),
            ],
        ]);
    }
}
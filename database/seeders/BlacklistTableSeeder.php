<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class BlacklistTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('blacklist')->insert([
            'email' => 'email1@suportegerencial.com.br'
        ]);
        DB::table('blacklist')->insert([
            'email' => 'email2@suportegerencial.com.br'
        ]);
        DB::table('blacklist')->insert([
            'email' => 'email3@suportegerencial.com.br'
        ]);
    }
}

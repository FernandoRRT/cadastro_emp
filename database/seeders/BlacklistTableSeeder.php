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
            'email' => 'lucas.ferreira@suportegerencial.com.br'
        ]);
        DB::table('blacklist')->insert([
            'email' => 'douglas.santos@suportegerencial.com.br'
        ]);
        DB::table('blacklist')->insert([
            'email' => 'jonathas.almeida@suportegerencial.com.br'
        ]);
    }
}

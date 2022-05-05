<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class CompanyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('company')->insert([
            'trading_name' => 'Chocolate Doces SA',
            'cnpj' => '90.448.286/0001-65',
            'foundation' => '2018-05-03',
            'email' => 'chocolate@chocolate.com',
            'phone' => '21993256612',
            'zipcode' => '95599-000',
            'address' => 'Rua Pacheco Batista 200, Rio de Janeiro / RJ'
        ]);
        DB::table('company')->insert([
            'trading_name' => 'Colchões Moles LTDA',
            'cnpj' => '11.748.474/0001-32',
            'foundation' => '2015-01-01',
            'email' => 'contato@colchao.com',
            'phone' => '11993634953',
            'zipcode' => '91029-000',
            'address' => 'Rua Santos Dumont 200, São Paulo / SP'
        ]);
    }
}

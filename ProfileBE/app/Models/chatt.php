<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class chatt extends Model
{
    use HasFactory;

    protected $fillable=['id','msgbox','username','date','updated_at', 'created_at', 'user'];


}

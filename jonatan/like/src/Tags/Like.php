<?php

namespace Jonatan\Like\Tags;

use Illuminate\Support\Facades\Session;
use Statamic\Tags\Tags;

class Like extends Tags
{

    private function getLikeData(){
        $context = $this->context;
        $status = (Session::get('liked'.$context->get('id'))??False) ? 1 : 0;

        $data = [
            'csrf_field' => csrf_field(),
            //'token' => csrf_token(),            
            'id' => $context->get('id'),
            'likes' => $context->get('likes'),
            'route_store' => route('statamic.like.store'),
            'class' => $status ? 'bg-green-500' : 'bg-blue-700',
            'status' => $status
        ];
        //dd($data);
        return $data;
    }
    /**
     * The {{ like }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        return view("like::button", $this->getLikeData());
    }

    /**
     * The {{ like:scripts }} tag.
     *
     * @return string|array
     */
    public function scripts()
    {
        $scriptsPath=url('vendor/like/js/app.js');
        return "<script src=".  $scriptsPath  ."></script>";
    }
}

<?php

namespace Jonatan\Like;

use Jonatan\Like\Fieldtypes\Liketype;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $tags = [
        Tags\Like::class,
    ];

    protected $routes =[
        'actions' => __DIR__.'/../routes/action.php',
    ];

    protected $scripts =[
        __DIR__.'/../resources/assets/js/app.js',
    ];

    protected $fieldtypes = [
       Liketype::class,
    ];

    public function bootAddon()
    {
        // add fieldtype
        // $fieldtypes
        Liketype::register();

        // load views
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'like');
    }
}

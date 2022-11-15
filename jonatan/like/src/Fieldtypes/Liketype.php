<?php

namespace Jonatan\Like\Fieldtypes;

use Statamic\Fields\Fieldtype;

class Liketype extends Fieldtype
{
    protected $icon = 'like';

    protected $categories = ['text'];

    /**
     * @return string
     */
    public static function title()
    {
        return 'Button like';
    }

    public function process($data)
    {
        if (! $data) {
            return;
        }
        
        return $data;
    }
}

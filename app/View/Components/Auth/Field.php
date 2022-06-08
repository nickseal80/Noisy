<?php

namespace App\View\Components\Auth;

use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Field extends Component
{
    public string $type;
    public string $label;
    public string $name;
    public string $value;

    public function __construct(string $type, string $name, string $label = '', string $value = '')
    {
        $this->type = $type;
        $this->label = $label;
        $this->name = $name;
        $this->value = $value;
    }

    public function render(): View
    {
        return view('auth.components.field');
    }
}

<?php

namespace App\View\Components\Auth;

use Illuminate\View\Component;
use Illuminate\View\View;

class Form extends Component
{
    public string $action;

    public function __construct(string $action)
    {
        $this->action = $action;
    }

    public function render(): View
    {
        return view('authentication.components.form');
    }
}

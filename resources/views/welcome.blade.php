@extends('components.base-layout')

@section('content')
    @guest
        @section('styles')
            <link rel="stylesheet" href="{{ mix('/css/authentication/index.css') }}">
        @endsection

        {{-- show login/register form --}}
        @include('authentication.authentication')
    @endguest
@endsection

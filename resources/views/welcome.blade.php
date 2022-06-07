@extends('components.base-layout')

@section('content')
    <div id="root"></div>

    @section('scripts')
        <script src="{{ mix('/js/index.js') }}"></script>
    @endsection
@endsection

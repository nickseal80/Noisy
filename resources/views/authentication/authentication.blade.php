<div class="auth-container">

    <a href="{{ route('index', ['action' => $action, 'locale' => App::currentLocale() === 'ru' ? 'en' : 'ru']) }}" class="locale-switcher">
        {{ App::currentLocale() === 'ru' ? 'EN' : 'RU' }}
    </a>

    <div class="auth-form">
        <h3>{{ __('auth/messages.headerSignIn') }}</h3>

        <x-auth-form action="{{ $action ?: 'login' }}"/>

        <div class="invite-reg">
            {{ __('auth/messages.notHaveAcc') }}
            <a href="{{ route('index', ['action' => 'sign-up']) }}">{{ __('auth/messages.signUp') }}</a>
        </div>
    </div>
</div>

@section('scripts')
    @if (!$action)
        <script src="{{ mix('/js/auth/sign-in/index.js') }}"></script>
    @endif
@endsection

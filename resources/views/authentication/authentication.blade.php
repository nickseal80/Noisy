<div class="auth-container">

    <a href="{{ route('index', ['locale' => App::currentLocale() === 'ru' ? 'en' : 'ru']) }}" class="locale-switcher">
        {{ App::currentLocale() === 'ru' ? 'EN' : 'RU' }}
    </a>

    <div class="auth-form">
        <h3>{{ __('authentication/messages.headerSignIn') }}</h3>

        <x-auth-form action="login"/>

        <div class="invite-reg">
            {{ __('authentication/messages.notHaveAcc') }}
            <a href="#">{{ __('authentication/messages.signUp') }}</a>
        </div>
    </div>
</div>

@section('scripts')
    <script src="{{ mix('/js/authentication/sign-in/index.js') }}"></script>
@endsection

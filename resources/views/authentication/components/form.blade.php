<form action="{{ route('auth.post.' . $action) }}" method="POST">

    @csrf

    {{-- email field --}}
    <x-auth-field
        type="text"
        label="Email:"
        name="email"
    />

    {{-- password field --}}
    <x-auth-field
        type="password"
        label="{{ __('auth/labels.password') }}"
        name="password"
    />

    {{-- for login --}}
    @if ($action === 'login')

        {{-- forget password --}}
        <a href="#" class="forget-passwd-link">{{ __('auth/labels.forgetPassword') }}</a>

    @endif

    {{-- for registration --}}
    @if ($action === 'sign-up')

        {{-- confirm password --}}
        <x-auth-field
            type="password"
            label="{{ __('auth/labels.confirmPassword') }}"
            name="confirm-password"
        />

        {{-- chat nickname --}}
        <x-auth-field
            type="text"
            label="{{ __('auth/labels.chatNickname') }}"
            name="chat-nickname"
        />

    @endif

    {{-- submit --}}
    <x-auth-field
        type="submit"
        name="sign-in"
        value="{{
            $action === 'login'
                ? __('auth/labels.submitLogin')
                : __('auth/labels.submitRegister')
        }}"
    />

</form>

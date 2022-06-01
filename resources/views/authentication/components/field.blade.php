<div class="form-field">
    @if ($label)
        <label for="{{ $type }}-{{ $name }}">{{ $label }}</label>
    @endif
    <input name="{{ $name }}" id="{{ $type }}-{{ $name }}" type="{{ $type }}" value="{{ $value }}"/>
</div>

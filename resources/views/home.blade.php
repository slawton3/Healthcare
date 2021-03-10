@extends('base')

@section('title', 'Home')

@section('content')
<div class="text-center mb-4">
    <h1>Welcome!</h1>
</div>

<div id="searchForm">
</div>

<!-- React JS -->
<script src="{{ asset('js/app.js') }}" defer></script>

@endsection
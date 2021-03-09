@extends('base')

@section('title', 'Home')

@section('content')
<div class="text-center mb-4">
    <h1>Welcome!</h1>
</div>
<div class="formcontainer" style="max-width:500px">
    <form>
        <!-- Email input -->
        <div class="form-outline">
            <input type="text" id="typeText" class="form-control" placeholder="Code Input"/>
            <label class="form-label" for="typeText" ></label>
        </div>
    
        <!-- Password input -->
        <div class="input-group mb-3 ">
            <select class="custom-select" id="hospitalSelect">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div class="input-group-append">
              <label class="input-group-text" for="hospitalSelect">Hospital</label>
            </div>
          </div>    
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary">Search</button>
    </form>
</div>

<div id="user">
</div>

<!-- React JS -->
<script src="{{ asset('js/app.js') }}" defer></script>

@endsection
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Comics Ghor</title>
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>

    <body>
      <v-app id="app">
          <app-home></app-home>
      </v-app>
    <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>

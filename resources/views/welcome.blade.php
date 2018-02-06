<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Emily D. Coons</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://use.typekit.net/iyh2opq.css">
        <link href="https://fonts.googleapis.com/css?family=Lato:100,200,300,400,700" rel="stylesheet">
        <link href="/css/app.css" rel="stylesheet">
        <link href="/css/salarycalc.css" rel="stylesheet">
        <link href="/css/wordcounter.css" rel="stylesheet">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
        <div id="app">
            <router-view></router-view>

        </div>
    </body>
    <script src="/js/app.js"></script>
    <script src="/js/salary_calc.js"></script>
    <script src="/js/wordcount.js"></script>
</html>

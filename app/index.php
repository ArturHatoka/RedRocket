<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>RedRocket</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" type="text/css" href="css/style.min.css">
</head>
<body>
<h1>Оцените тестовое по шкале от 1 до 5</h1>
<div class="rating">
    <div class="rating-stars">
        <input type="radio" name="rating" id="mark5">
        <label for="mark5">
            <span class="rating-stars__img ajax-rating" data-rating="5"></span>
        </label>
        <input type="radio" name="rating" id="mark4">
        <label for="mark4">
            <span class="rating-stars__img ajax-rating" data-rating="4"></span>
        </label>
        <input type="radio" name="rating" id="mark3">
        <label for="mark3">
            <span class="rating-stars__img ajax-rating" data-rating="3"></span>
        </label>
        <input type="radio" name="rating" id="mark2">
        <label for="mark2">
            <span class="rating-stars__img ajax-rating" data-rating="2"></span>
        </label>
        <input type="radio" name="rating" id="mark1">
        <label for="mark1">
            <span class="rating-stars__img ajax-rating" data-rating="1"></span>
        </label>
    </div>
    <div id="rating-num" class="rating-num">0</div>
</div>
<div class="progress">
    <div class="progress-back">
        <div class="progress-line" id="progress-line">
            <span class="progress-num" id="progress-num">1</span>
        </div>
    </div>
    <select name="progress-plus" id="progress-plus">
        <option value="8">8</option>
        <option value="16">16</option>
        <option value="32">32</option>
        <option value="64">64</option>
    </select>
    <button type="button" id="progress-btn">go</button>
</div>

<script src="script/script.min.js"></script>
</body>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Sorts</title>
</head>
<body>
    <section class="header">
        <div style="width: 50%; margin: auto;">
        <input type="range" min="0" max="100" value="0" class="slider" id="myRange">
        <p id="myNum"></p>
        </div>
    </section>
    <main id="main-section">
    </main>
    <section id="footer">
        <div>
        <select name="sorts-types" id="sorts-types">
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="selection">Selection Sort</option>
        </select>
        <button id="btn" onclick="roadMap()">click me!</button>
    </div>
    </section>
</body>

<script src="./script.js"></script>
</html>

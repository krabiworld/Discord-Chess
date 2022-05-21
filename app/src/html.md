### Redirect `How to add?`

```html

<div id='redirect'>
	<span id='redirect-path'><!-- JSON key from info.js --></span>
	<!-- !Important -->
	<script src='info.js'></script>
	<script src='functions/redirect.js'></script>
</div>
```

### Localization `How to localize?`

```html
<span localize='key'></span> <!-- key - is JSON key from info.js file -->
<span translation='false' localize='key'></span> <!-- Take the translation from the default language, ignoring the others (useful for names) -->
```

### Random `How to add?`

```html
<!-- Figures Moves -->
<div id='figures-moves-random'></div>...
<script src='functions/random.js'></script></body>
```
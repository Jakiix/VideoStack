<script>
	import { page } from '$app/stores';
	import search from '$lib/images/search.png';
	import github from '$lib/images/github.svg';
</script>

<header>
	<form class="search-container">
    <input type="text" id="search-bar" placeholder="Search in your collection...">
    <a href="https://github.com/sveltejs/kit"><img class="search-icon" src={search} alt="Search Icon"></a>
  </form>
</header>

<style>

	header {
		margin-top: 100px;
		display: flex;
		justify-content: space-between;
	}

	.search-container {
		width: 490px;
		display: block;
		margin: 0 auto;
	}

	input#search-bar {
		margin: 0 auto;
		width: 100%;
		height: 64px;
		padding: 0 20px;
		font-size: 22px;
		border: 1px solid #4992D8;
		outline: none;
		border-radius: 16px;
		background-color: #4992D8;
	}

	#search-bar::placeholder {
  	color: white;
  	opacity: 1;
	}

	input#search-bar:focus {
		border: 1px solid #16324F;
		transition: 0.35s ease;
		color: white;
	}

	input#search-bar:focus::-webkit-input-placeholder {
		transition: opacity 0.45s ease;
		opacity: 0;
	}

	input#search-bar:focus::-moz-placeholder {
		transition: opacity 0.45s ease;
		opacity: 0;
	}

	input#search-bar:focus:-ms-placeholder {
		transition: opacity 0.45s ease;
		opacity: 0;
	}

	.search-icon {
		position: relative;
    float: right;
    width: 36px;
    height: 36px;
    top: -51px;
    right: -29px;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>

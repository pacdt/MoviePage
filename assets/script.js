let movieID = 436270;
const apiKey = "6d326c6165f963f78b528d76e49f358c";
const imgURL = "https://image.tmdb.org/t/p/original";
const lang = "pt-BR";
const movieURL = "https://embed.warezcdn.net/filme/";

async function loadingInfo() {
	let req = await fetch(
		`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=${lang}`
	);
	json = await req.json();

	let bp = imgURL + json.backdrop_path;

	let bgImg = (document.getElementById("body").style = `
            background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url("${bp}");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
            `);

	let poster = (document.getElementById("poster").src =
		imgURL + json.poster_path);
	let name = (document.getElementById("name").innerHTML = json.title);
	let title = (document.getElementById("webTitle").innerHTML = json.title);
	let resumo = (document.getElementById("resumo").innerHTML = json.overview);
	let date = (document.getElementById("release_date").innerHTML =
		json.release_date);
	let originalTitle = (document.getElementById("originalTitle").innerHTML =
		json.original_title);

	let rating = (document.getElementById("rating").innerHTML =
		json.vote_average.toFixed(1));
}

loadingInfo();

async function cast() {
	let req = await fetch(
		`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${apiKey}&language=${lang}`
	);
	json = await req.json();

	let actor1 = (document.getElementById("actor1").src =
		imgURL + json.cast[0].profile_path);
	let actor2 = (document.getElementById("actor2").src =
		imgURL + json.cast[1].profile_path);
	let actor3 = (document.getElementById("actor3").src =
		imgURL + json.cast[2].profile_path);
	let actor4 = (document.getElementById("actor4").src =
		imgURL + json.cast[3].profile_path);

	let aName1 = (document.getElementById("actorN1").innerHTML =
		json.cast[0].name);
	let aName2 = (document.getElementById("actorN2").innerHTML =
		json.cast[1].name);
	let aName3 = (document.getElementById("actorN3").innerHTML =
		json.cast[2].name);
	let aName4 = (document.getElementById("actorN4").innerHTML =
		json.cast[3].name);

	let pName1 = (document.getElementById("persN1").innerHTML =
		json.cast[0].character);
	let pName2 = (document.getElementById("persN2").innerHTML =
		json.cast[1].character);
	let pName3 = (document.getElementById("persN3").innerHTML =
		json.cast[2].character);
	let pName4 = (document.getElementById("persN4").innerHTML =
		json.cast[3].character);
}
cast();
let modal = document.getElementById("modal");

function openModal() {
	let modal = document.getElementById("modal");

	if (typeof modal == "undefined" || modal === null) return;

	modal.style.display = "block";
	document.body.style.overflow = "hidden";
}
function closeModal() {
	let modal = document.getElementById("modal");

	if (typeof modal == "undefined" || modal === null) return;

	modal.style.display = "none";
	document.body.style.overflow = "auto";
}
async function getMovie() {
	let req = await fetch(
		`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=${lang}`
	);
	json = await req.json();
	const movie = json.imdb_id;

	let iframe = document.querySelector("iframe");
	iframe.src = movieURL + movie;

	let trailer = document.getElementById("trailer");
	trailer.href =
		"https://www.youtube.com/results?search_query=" +
		json.title +
		"+trailer";
}
getMovie();

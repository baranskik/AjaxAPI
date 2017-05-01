var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	var countryCapital = $('#country-capital').val();
	if (!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function (item) {
		$('<li class="country">').text('Kraj: ' + item.name + ', Stolica: ' + item.capital).appendTo(countriesList);
		$('<ul class="borders"> <li>').text('Graniczy z: ' +
			item.borders).appendTo(countriesList);
		$('<ul class="languages"> <li>').text('U¿ywane jêzyki: ' + item.languages).appendTo(countriesList);
		$('<ul class="currency"> <li>').text('Waluta: ' + item.currencies).appendTo(countriesList);
	});
}
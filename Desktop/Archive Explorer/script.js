// this file handles everything: searching, fetching, and drawing the results

// grab all the page elements we'll need
var searchInput = document.getElementById("searchInput");
var searchBtn = document.getElementById("searchBtn");
var sourceSelect = document.getElementById("source");
var mediaSelect = document.getElementById("mediaType");
var sortSelect = document.getElementById("sortBy");
var periodSelect = document.getElementById("timePeriod");
var grid = document.getElementById("grid");
var statusText = document.getElementById("status");
var loadMoreBtn = document.getElementById("loadMoreBtn");

// track which page of results we're on
var currentPage = 1;

// clicking Search triggers a fresh search
searchBtn.addEventListener("click", function() {
  runSearch();
});

// pressing Enter in the search box does the same thing
searchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    runSearch();
  }
});

// clicking Show More loads the next batch
loadMoreBtn.addEventListener("click", function() {
  currentPage++;
  runSearch(true);
});


function runSearch(isLoadMore) {

  var query = searchInput.value;
  var source = sourceSelect.value;
  var media = mediaSelect.value;
  var sort = sortSelect.value;
  var period = periodSelect.value;

  // stop here if the search box is empty
  if (query === "") {
    statusText.textContent = "Please type something to search.";
    return;
  }

  // if it's a brand new search, wipe the old results
  if (isLoadMore !== true) {
    currentPage = 1;
    grid.innerHTML = "";
    loadMoreBtn.style.display = "none";
  }

  statusText.textContent = "Searching...";

  // pick which API to hit based on the dropdown
  if (source === "archive") {
    fetchFromArchive(query, media, sort, period);
  } else {
    fetchFromEuropeana(query, media, sort, period);
  }
}


function fetchFromArchive(query, media, sort, period) {

  // build the search query, everything lives inside q=
  var q = query + " AND mediatype:" + media;

  // tack on the time filter if one is picked
  if (period === "before1900") q = q + " AND date:[0001-01-01 TO 1899-12-31]";
  if (period === "1900to1950") q = q + " AND date:[1900-01-01 TO 1950-12-31]";
  if (period === "1950to2000") q = q + " AND date:[1951-01-01 TO 2000-12-31]";
  if (period === "after2000")  q = q + " AND date:[2001-01-01 TO 9999-12-31]";

  var url = ARCHIVE_URL
    + "?q=" + encodeURIComponent(q)
    + "&fl=identifier,title,date,mediatype"
    + "&output=json"
    + "&rows=50"
    + "&page=" + currentPage;

  // sort goes as its own clean param, not inside the query
  if (sort === "newest") url = url + "&sort=" + encodeURIComponent("date desc");
  if (sort === "oldest") url = url + "&sort=" + encodeURIComponent("date asc");
  // default order needs no sort param at all

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var items = data.response.docs;
      if (sort === "alpha") items = sortByTitle(items, "archive");
      showResults(items, "archive");
    })
    .catch(function() {
      statusText.textContent = "Something went wrong. Try again.";
    });
}


function fetchFromEuropeana(query, media, sort, period) {

  // europeana wants the type in uppercase
  var europeanaMedia = "IMAGE";
  if (media === "movies") europeanaMedia = "VIDEO";
  if (media === "texts")  europeanaMedia = "TEXT";

  // map our sort options to what europeana understands
  var europeanaSort = "score desc";
  if (sort === "newest") europeanaSort = "timestamp_created desc";
  if (sort === "oldest") europeanaSort = "timestamp_created asc";
  // alpha sort happens after we get the data back

  // figure out where to start for this page
  var start = ((currentPage - 1) * 50) + 1;

  // qf params stack, so media type and year filter are both separate &qf= params
  var url = EUROPEANA_URL
    + "?wskey=" + EUROPEANA_KEY
    + "&query=" + encodeURIComponent(query)
    + "&qf=" + encodeURIComponent("TYPE:" + europeanaMedia)
    + "&rows=50"
    + "&profile=minimal"
    + "&sort=" + encodeURIComponent(europeanaSort)
    + "&start=" + start;

  if (period === "before1900") url = url + "&qf=" + encodeURIComponent("YEAR:[0001 TO 1899]");
  if (period === "1900to1950") url = url + "&qf=" + encodeURIComponent("YEAR:[1900 TO 1950]");
  if (period === "1950to2000") url = url + "&qf=" + encodeURIComponent("YEAR:[1951 TO 2000]");
  if (period === "after2000")  url = url + "&qf=" + encodeURIComponent("YEAR:[2001 TO 9999]");

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var items = data.items;
      if (sort === "alpha") items = sortByTitle(items, "europeana");
      showResults(items, "europeana");
    })
    .catch(function() {
      statusText.textContent = "Something went wrong. Check your API key.";
    });
}


// sorts a list of items by title, a to z
function sortByTitle(items, source) {
  if (!items) return items;
  return items.slice().sort(function(a, b) {
    var titleA = source === "archive" ? (a.title || "") : (a.title ? a.title[0] : "");
    var titleB = source === "archive" ? (b.title || "") : (b.title ? b.title[0] : "");
    return titleA.toLowerCase().localeCompare(titleB.toLowerCase());
  });
}


function showResults(items, source) {

  // nothing came back
  if (!items || items.length === 0) {
    if (currentPage === 1) {
      statusText.textContent = "No results found. Try a different search.";
    } else {
      statusText.textContent = "No more results to load.";
      loadMoreBtn.style.display = "none";
    }
    return;
  }

  statusText.textContent = "Showing results...";

  // show the load more button only if we got a full page back
  loadMoreBtn.style.display = items.length === 50 ? "block" : "none";

  // build and add a card for each result
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var title, year, thumb, link;

    if (source === "archive") {
      title = item.title || "No title";
      year = item.date || "Unknown year";
      thumb = "https://archive.org/services/img/" + item.identifier;
      link = "https://archive.org/details/" + item.identifier;
    } else {
      title = item.title ? item.title[0] : "No title";
      year = item.year ? item.year[0] : "Unknown year";
      thumb = item.edmPreview ? item.edmPreview[0] : "";
      link = item.guid;
    }

    var card = "<a class='card' href='" + link + "' target='_blank'>"
             +   "<img src='" + thumb + "' alt='" + title + "' onerror=\"this.style.display='none'\">"
             +   "<div class='info'>"
             +     "<p class='title'>" + title + "</p>"
             +     "<p class='meta'>" + year + " · " + source + "</p>"
             +   "</div>"
             + "</a>";

    grid.innerHTML = grid.innerHTML + card;
  }
}

function executeSearch() {
    var searchTerm = $("#keyword").val()
    var numberOfRecords = $("#numRecords").val()
    var startYear = $("#startYear").val()
    var endYear = $("#endYear").val()
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryURL += '?' + $.param({
            'api-key': "40ed1ebf418948d0947dd487805b5c49",
            'q': searchTerm,
            'begin_date': startYear,
            'end_date': endYear
        })
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            for (i=0;i<response.length;i++) {
                var result = response.docs[i];
                var headline = result.headline;
                var resultDiv = $("<div>");
                var headlineDiv = $("<div>")
                $(headlineDiv).html("<h2>" + headline + "<h2>")
                $(resultDiv).append(headlineDiv)
                $("#resultsSection".append(resultDiv))
            }
        })
    }

$("#runSearch").on("click", function () {
        executeSearch()
    })
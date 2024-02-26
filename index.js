module.exports =  {
    search: require("./src/search.js").Getsearch,
    detail: require("./src/detail.js").Getdetail,
    download_eps: require("./src/download.js").GetDownload,
    get_genre_all: require("./src/genre.js").Listgenre,
    genre: require("./src/genre.js").Getgenre,
    get_popular: require("./src/ongoing.js").Getpopular,
    get_realese: require("./src/ongoing.js").Getrealese
}
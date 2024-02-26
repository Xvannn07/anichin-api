const axios = require("axios")
const cheerio = require("cheerio")

async function Listgenre() {
    let res = await axios.request({
        method: "GET",
        url: "https://anichin.plus/",
        headers: {
            "Referer": "https://anichin.plus/"
        }
    })

    let $ = cheerio.load(res.data)

    let list_genre = $("div#content > div.wrapper > div#sidebar > div.section:nth-child(7) > ul > li").get().map((ap) => {
        return {
            genre: $(ap).find("a").text().trim(),
            link: $(ap).find("a").attr("href")
        }
    })

    return list_genre
}

async function Getgenre(genre) {
    let res = await axios.request({
        method: "GET",
        url: "https://anichin.plus/genres/" + genre + "/",
        headers: {
            "Referer": "https://anichin.plus/"
        }
    })

    let $ = cheerio.load(res.data)

    let array = []

    $("div#content > div.wrapper > div.postbody > div.bixbox.bbnofrm > div.listupd > article").each(function () {
        let data = {
            title: $(this).find("div > a > div.tt").text().trim(),
            img_src: $(this).find("div > a > div.limit > img").attr("src"),
            type: $(this).find("div > a > div.limit > div:nth-child(2)").text().trim(),
            subtitle: $(this).find("div > a > div.limit > div.bt > span.sb.Sub").text().trim()
        }
        array.push(data)
    })
    return array
}

module.exports = { Listgenre, Getgenre }
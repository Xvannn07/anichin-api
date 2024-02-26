const axios = require("axios")
const cheerio = require("cheerio")

async function Getpopular() {
    let res = await axios.request({
        method: "GET",
        url: "https://anichin.plus/",
        headers: {
            "Referer": "https://anichin.plus/"
        }
    })

    let $ = cheerio.load(res.data)

    let array = []

    $("#content > div.wrapper > div.postbody > div.bixbox.bbnofrm:nth-child(2) > div.listupd.normal > div.excstf > article").each(function () {
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

async function Getrealese() {
    let res = await axios.request({
        method: "GET",
        url: "https://anichin.plus/",
        headers: {
            "Referer": "https://anichin.plus/"
        }
    })

    let $ = cheerio.load(res.data)

    let array = []

    $("#content > div.wrapper > div.postbody > div.bixbox.bbnofrm:nth-child(3) > div.listupd.normal > div.excstf > article").each(function () {
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

module.exports = { Getpopular, Getrealese }
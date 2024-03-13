const axios = require("axios");
const cheerio = require("cheerio");

async function Getsearch(querys) {
    let res = await axios.request({
        method: "GET",
        url: "https://anichin.plus/?s=" + querys,
        headers {
            "Referer": "https://anichin.plus/"
        }
    });
    let $ = cheerio.load(res.data);

    let array = [];

    $("#content > div > div.postbody > div > div.listupd > article").each(function () {
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

module.exports = { Getsearch }

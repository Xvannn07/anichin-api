const axios = require("axios");
const cheerio = require("cheerio");

async function Getdetail(urls) {
    let res = await axios.request({
        method: "GET",
        url: urls,
        headers: {
            "Referer": "https://anichin.plus/"
        }
    });

    let $ = cheerio.load(res.data);

    let anichin_obj = {
        title: "",
        img_src: "",
        info: {},
        genre: [],
        list_episode: [],
        description: "",
    };

    // data
    anichin_obj.title = $("div.bigcontent.nobigcv > div.infox > h1").text().trim();
    anichin_obj.img_src = $("div.bigcontent.nobigcv > div.thumbook > div.thumb > img").attr("src");
    anichin_obj.description = $("div.entry-content > p:nth-child(1)").text().trim();

    $("div.bigcontent.nobigcv > div.infox > div > div.info-content > div.spe > span").each(function () {
        let title = $(this).find("b").text()
        anichin_obj.info[title.split(":")[0].toLowerCase().replace(/ /g, "_")] = $(this).text().split(":")[1] || $(this).find("a").text().split(":")[1] || ""
    });

    $("div.bigcontent.nobigcv > div.infox > div > div.info-content > div.genxed > a").each(function () {
        anichin_obj.genre.push({
            string: $(this).text(),
            url: $(this).attr("href")
        })
    }).toArray();

    $("div.bixbox.bxcl.epcheck > div.eplister > ul > li").each(function () {
        anichin_obj.list_episode.push({
            title: $(this).find("a > div.epl-title").text(),
            episode: $(this).find("a > div.epl-num").text(),
            released: $(this).find("a > div.epl-date").text(),
            url: $(this).find("a").attr("href")
        })
    }).toArray();

    return anichin_obj
}

module.exports = { Getdetail }
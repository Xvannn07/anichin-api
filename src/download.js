const axios = require("axios");
const cheerio = require("cheerio");

async function GetDownload(urls) {
    let res = await axios.request({
        method: "GET",
        url: urls,
        headers: {
            "Referer": "https://anichin.plus/"
        }
    });

    let $ = cheerio.load(res.data);

    let data = {
        title: "",
        stream: {},
        downloads: {},
    };

    //let anu 

    // data
    data.title = $("div.megavid > div > div.item.meta > div.lm > div > h1").text().trim();

    $("div.megavid > div > div.item.video-nav > div > select > option").each(function () {
        if($(this).text().trim() !== "Select Video Server") {
            let decode = Buffer.from($(this).attr("value"), 'base64').toString('utf8')
            let title_stream = $(this).text().trim()
            data.stream[title_stream.replace("[Ads]", "").replace("[Setting DNS]", "").replace(/ /g, "_").replace(/\./g, "_").toLowerCase()] = decode?.split("=")[3]?.replace("frameborder", "")?.split('"')[1] || ""
            //data.stream.push(JSON.parse(Buffer.from($(this).attr("value"), "base64").toString("utf8")))
        }
    });

    $("div.entry-content > div.bixbox > div.mctnx > div > div.soraurlx").each(function () {
        let resolusi = $(this).find("strong").text().trim()

        data.downloads[resolusi.toLowerCase()] = $(this).find("a").get().map(ap => {
            return {
                provider: $(ap).text().trim(),
                link: $(ap).attr("href")
            }
        })
    })
    
    return data
}

module.exports = { GetDownload }

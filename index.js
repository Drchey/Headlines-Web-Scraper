const axios = require('axios')
const cheerio = require('cheerio') 
const express = require('express')

async function getNews(){
    try {
        // define the site url we are scraping from 
        const washingtonPost = 'https://www.washingtonpost.com/world/ukraine-russia/'
        const data1 = await axios({
            method: 'GET',
            url: washingtonPost
        })

        const $ = cheerio.load(data1.data)
        const elemSelector = '#main-content > div:nth-child(1) > div > div.table-in-grid.hpgrid.hpgrid-item.hpgrid-item--c-start.hpgrid-item--c-spans.hpgrid-item--r-spans.extra-wide-left-layout.grid-top.grid-bottom.grid-right.table9.include-dividers-features.hide-helpers > div.card.relative.hpgrid-item.hpgrid-item--c-start.hpgrid-item--c-spans.hpgrid-item--r-spans.table9-childStyles.grid-top.grid-left.grid-right > div > div > div.headline.relative.gray-darkest.pb-xs > h2'
        $(elemSelector).each((parentIdx,parentElem) =>{
            console.log(parentIdx)
        })        
    } catch (err) {
        console.error(err)
    }
}

getNews()




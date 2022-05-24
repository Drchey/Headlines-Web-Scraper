const axios = require('axios')
const cheerio = require('cheerio') 
const express = require('express')

async function getGDP(){
    try {
        // define the site url we are scraping from 
        const gdpPerCapita = 'https://worldpopulationreview.com/countries/countries-by-gdp'
        const data1 = await axios({
            method: 'GET',
            url: gdpPerCapita
        })

        const $ = cheerio.load(data1.data)
        const elemSelector = '#worldCountries > div.container.is-fluid.m-0 > div > div > div:nth-child(2) > div.datatable-container.undefined > table > tbody > tr'
           const keys=[
            'Rank',
            'Name',
            'GDP (IMF 19)',
            'GDP (UN 16)',
            'GDP per Capita',
            'Population',
        ]
        
        $(elemSelector).each((parentIdx,parentElem) =>{
            // define a key index
            let keyIdx =0
            let gdpObj = {}
            if(parentIdx <= 14){  
                $(parentElem).children().each((childIdx, childElem) => {
                    const values = $(childElem).text()
                    if(values){
                        gdpObj[keys[keyIdx]] = values
                        keyIdx++
                    }
                })
                console.log(gdpObj)
            }
        })
        // console.log(emi)


        
    } catch (err) {
        console.error(err)
    }
}

async function getHealthCare(){
    try {
        // define the site url we are scraping from 
        const getHealthCare = 'https://worldpopulationreview.com/country-rankings/best-healthcare-in-the-world'
        const data2 = await axios({
            method: 'GET',
            url: getHealthCare
        })

        const $ = cheerio.load(data2.data)
        const elemSelector = '#dataTable > div.container.is-fluid.m-0 > div > div.column.is-8.is-clearfix.py-6 > div:nth-child(2) > div.datatable-container.undefined > table > tbody > tr'
           // const keys=[
        //     'rank',
        //     'name',
        //     'price',
        //     '24h',
        //     '7d',
        //     'MarketCap',


        // ]
        
        $(elemSelector).each((parentIdx,parentElem) =>{
            if(parentIdx <= 15){  
                console.log(parentIdx)            
            }
        })
        // console.log(emi)


        
    } catch (err) {
        console.error(err)
    }
}

async function getPoorNations(){
    try {
        // define the site url we are scraping from 
        const getPoorNation = 'https://worldpopulationreview.com/country-rankings/best-healthcare-in-the-world'
        const data3 = await axios({
            method: 'GET',
            url: getPoorNation
        })

        const $ = cheerio.load(data3.data)
        const elemSelector = '#dataTable > div.container.is-fluid.m-0 > div > div.column.is-8.is-clearfix.py-6 > div:nth-child(1) > div.datatable-container.undefined > table > tbody > tr'
           // const keys=[
        //     'rank',
        //     'name',
        //     'price',
        //     '24h',
        //     '7d',
        //     'MarketCap',


        // ]
        
        $(elemSelector).each((parentIdx,parentElem) =>{
            if(parentIdx <= 15){  
                console.log(parentIdx)            
            }
        })
        // console.log(emi)


        
    } catch (err) {
        console.error(err)
    }
}


async function getEmissions(){
    try {
        // define the site url we are scraping from 
        const getEmission = 'https://worldpopulationreview.com/country-rankings/co2-emissions-by-country'
        const data4 = await axios({
            method: 'GET',
            url: getEmission
        })

        const $ = cheerio.load(data4.data)
        const elemSelector = '#dataTable > div.container.is-fluid.m-0 > div > div.column.is-8.is-clearfix.py-6 > div:nth-child(2) > div.datatable-container.undefined > table > tbody > tr'
           // const keys=[
        //     'rank',
        //     'name',
        //     'price',
        //     '24h',
        //     '7d',
        //     'MarketCap',


        // ]
        
        $(elemSelector).each((parentIdx,parentElem) =>{
            if(parentIdx <= 15){  
                console.log(parentIdx)            
            }
        })
        // console.log(emi)


        
    } catch (err) {
        console.error(err)
    }
}

async function getCrimeRate(){
    try {
        // define the site url we are scraping from 
        const getCrime = 'https://worldpopulationreview.com/country-rankings/crime-rate-by-country'
        const data5 = await axios({
            method: 'GET',
            url: getCrime
        })

        const $ = cheerio.load(data5.data)
        const elemSelector = '#dataTable > div.container.is-fluid.m-0 > div > div.column.is-8.is-clearfix.py-6 > div:nth-child(1) > div.datatable-container.undefined > table > tbody > tr'
           // const keys=[
        //     'rank',
        //     'name',
        //     'price',
        //     '24h',
        //     '7d',
        //     'MarketCap',


        // ]
        
        $(elemSelector).each((parentIdx,parentElem) =>{
            if(parentIdx <= 15){  
                console.log(parentIdx)            
            }
        })
        // console.log(emi)


        
    } catch (err) {
        console.error(err)
    }
}


getGDP()
// getHealthCare()
// getPoorNations()
// getEmissions()
// getCrimeRate()





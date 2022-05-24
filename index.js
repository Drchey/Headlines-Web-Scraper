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

        //
        const $ = cheerio.load(data1.data)
        const elemSelector = '#worldCountries > div.container.is-fluid.m-0 > div > div > div:nth-child(2) > div.datatable-container.undefined > table > tbody > tr'
           const keys=[
            'Name',
            'GDP (IMF 19)',
            'GDP (UN 16)',
            'GDP per Capita',
            'Population',
             ]
        const gdpArr = []
        
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
                gdpArr.push(gdpObj)

            }
        })
        return gdpArr


        
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
        const keys = [
            'Country',
            'LPI 2020 Ranking',
            'LPI 2019 Ranking',
            'CEO World Ranking',
            'Population'
        ]
        
        const health = []
        
        $(elemSelector).each((parentIdx,parentElem) =>{
            // define a key index
            let keyIdx =0
            let healthObj = {}
            if(parentIdx <= 14){  
                $(parentElem).children().each((childIdx, childElem) => {
                    const values = $(childElem).text()
                    if(values){
                        healthObj[keys[keyIdx]] = values
                        keyIdx++
                    }
                })
                health.push(healthObj)

            }
        })
        return health


        
    } catch (err) {
        console.error(err)
    }
}

async function getPoorNations(){
    try {
        // define the site url we are scraping from 
        const getPoorNation = 'https://worldpopulationreview.com/country-rankings/poorest-countries-in-the-world'
        const data3 = await axios({
            method: 'GET',
            url: getPoorNation
        })

        const $ = cheerio.load(data3.data)
        const elemSelector = '#dataTable > div.container.is-fluid.m-0 > div > div.column.is-8.is-clearfix.py-6 > div:nth-child(1) > div.datatable-container.undefined > table > tbody > tr'
        
        const keys = [
            'Country',
            'GNI per capita, Atlas method (current US$)',
            'Latest Year',
            'GNI per capita',
            'Population'
        ]
        
        const poorNations = []
        
        $(elemSelector).each((parentIdx,parentElem) =>{
            // define a key index
            let keyIdx =0
            let poorObj = {}
            if(parentIdx <= 14){  
                $(parentElem).children().each((childIdx, childElem) => {
                    const values = $(childElem).text()
                    if(values){
                        poorObj[keys[keyIdx]] = values
                        keyIdx++
                    }
                })
                poorNations.push(poorObj)

            }
        })
        return poorNations


        
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
        const keys = [
            'Country',
            'CO2 Total Emissions (Mton)',
            '% World Total',
            'Population',
        ]
        
        const emissions = []
        
        $(elemSelector).each((parentIdx,parentElem) =>{
            // define a key index
            let keyIdx =0
            let emissionsObj = {}
            if(parentIdx <= 14){  
                $(parentElem).children().each((childIdx, childElem) => {
                    const values = $(childElem).text()
                    if(values){
                        emissionsObj[keys[keyIdx]] = values
                        keyIdx++
                    }
                })
                emissions.push(emissionsObj)

            }
        })
        return emissions
        
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
        const keys = [
            'Rankings',
            'Country',
            'Crime Index',
            'Population',
        ]
        
        const crime = []
        
        $(elemSelector).each((parentIdx,parentElem) =>{
            // define a key index
            let keyIdx =0
            let crimeObj = {}
            if(parentIdx <= 14){  
                $(parentElem).children().each((childIdx, childElem) => {
                    const values = $(childElem).text()
                    if(values){
                        crimeObj[keys[keyIdx]] = values
                        keyIdx++
                    }
                })
                crime.push(crimeObj)

            }
        })
        return crime


        
    } catch (err) {
        console.error(err)
    }
}


// getGDP()
// getHealthCare()
// getPoorNations()
// getEmissions()
// getCrimeRate()

const app = express()

app.get('/api/gdp-countries', async(req,res) =>{
    try {
        const getGDPx = await getGDP()
        return res.status(200).json({
            "Countries with Highest GDP": getGDPx
        })
    } catch (error) {
        return res.status(500).json({
            err: err.toString()
        })
    }
})

app.get('/api/best-healthcare-countries', async(req,res) =>{
    try {
        const getHealth = await getHealthCare()
        return res.status(200).json({
            "HealthCare Status of top 15 nations": getHealth
        })
    } catch (error) {
        return res.status(500).json({
            err: err.toString()
        })
    }
})

app.get('/api/poor-countries', async(req,res) =>{
    try {
        const getPoor = await getPoorNations()
        return res.status(200).json({
            "Poorest Nations Currently": getPoor
        })
    } catch (error) {
        return res.status(500).json({
            err: err.toString()
        })
    }
})

app.get('/api/emissions', async(req,res) =>{
    try {
        const getEmission = await getEmissions()
        return res.status(200).json({
            "CO2  Emissions Currently": getEmission
        })
    } catch (error) {
        return res.status(500).json({
            err: err.toString()
        })
    }
})

app.get('/api/crime-rate', async(req,res) =>{
    try {
        const getCrime = await getCrimeRate()
        return res.status(200).json({
            "Crime Rate": getCrime
        })
    } catch (error) {
        return res.status(500).json({
            err: err.toString()
        })
    }
})

app.listen(5000, ()=>{
    console.log('Running on Port 5000')
})


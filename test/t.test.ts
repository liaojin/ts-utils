import {makeTest} from '../src/t'
import express from 'express'
import assect from 'assert'


it("make",()=>{
    return makeTest(express().get("/hello",(req,res)=>{
        res.json({
            code:0,
            msg:"hello jin"
        })
    })).get("/hello").then(r=>{
        assect.equal(r.status,200)
        assect.equal(r.body.code,0)
    })
})
import app from "./app.js"

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to response at port ${process.env.PORT}`)
})
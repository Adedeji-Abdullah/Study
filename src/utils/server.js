const express = require("express")
const fetch = require("node-fetch") 
const cors = require("cors")

const app = express();
app.use(cors());

app.get("/questions", async (req, res)
=> {
    try{
        const response = await fetch("https://questions.aloc.com.ng/api/v2/q?subject=english&year=2019&type=utme",
            {
                headers: {
                    Authorisation: "Bearer QB-0ac051b55b76ea795457",
                    Accept: "application/json",
                }
            }
        )
        const data = await response.json()
        res.json(data)
    }catch(error){
        res.status(500).json({error:
            error.message
        })
    }
})

app.listen(5000, () => console.log("Server running on port 5000"))
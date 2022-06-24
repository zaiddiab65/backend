import express from "express";
import cors from "cors";
import { sample_gears } from "./data";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/gears", (req,res) => {
    res.send(sample_gears);
})

app.get("/api/gears/search/:searchTerm", (req,res)=>{
    const searchTerm = req.params.searchTerm;
    const gears = sample_gears.filter(gear => gear.name.toLowerCase().
    includes(searchTerm.toLowerCase()));
    res.send(gears);
})

app.get("/api/gears/:gearId", (req, res)=>{
    const gearId = req.params.gearId;
    const gear = sample_gears.find(gear => gear.id == gearId);
})

const port = 5000;
app.listen(port,()=> {
    console.log("Website served on http://localhost:" + port);

})
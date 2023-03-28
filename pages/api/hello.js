import * as fs from "fs"

export default function handler(req, res) {

  fs.readFile("blogdata/data.json",(err , data)=> {
    if (err){
      res.status(500).json("No Blog Found")
    }
    // console.log(req.query)
    res.status(200).json(JSON.parse(data))
  },)

}

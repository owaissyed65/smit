import * as fs from 'fs'
export default async function handler(req, res) {
    try {
        let data = []
        let fileName = await fs.promises.readdir('utils', 'utf-8')
        for (let i = 0; i < fileName.length; i++) {
            let element = fileName[i]
            const fileData = await fs.promises.readFile(`utils/${element}`, 'utf-8')
            data.push(JSON.parse(fileData))
        }
        res.status(200).json(data)
    } catch (error) {
        res.status(502).json({Error:'An Error Occured'})
    }
}

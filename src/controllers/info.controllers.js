import os from 'os'

const getInfo= (req,res) => {
    const info = {
        "Cantidad de nucleos": os.cpus().length,
        "Path de ejecucion": process.execPath,
        "Carpeta del proyecto": process.argv[1],
        "Argumentos de ejecucion": process.argv.slice(2),
        "Plataforma": process.platform,
        "Version de Node": process.version,
        "Id del proceso": process.pid,
        "Memoria total Reservada": process.memoryUsage().rss
    }
    res.status(200).json(info)
} 


export default getInfo
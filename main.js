import cluster from 'cluster'
import os from 'os'

import { createServer } from './servidor.js'

let PORT = process.argv[2] ?? 8081

let MODE = process.argv[3] || "fork"

if (MODE == "cluster"){
    if (cluster.isPrimary) {
        const cantCpus = os.cpus().length
        for (let i = 0; i < cantCpus; i++) {
            cluster.fork()
        }
        cluster.on('exit', worker => {
            console.log(`se cerro el proceso: '${worker.process.pid}'`)
            cluster.fork()
        })
    } else {
        await createServer({ port: PORT })
    }
}else {
    await createServer({ port: PORT })
}

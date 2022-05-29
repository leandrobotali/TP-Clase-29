# TP-Clase-29
Tp clase 29
Comandos para ejecutar el servidor:

node main.js "puerto" "modo"

En "puerto": se puede colocar el puerto en el que se desea que arranque el servidor(por defecto es el 8081), si se coloca 0,
se asignara un puerto al azar entre los disponibles.

En "modo": se puede elegir el modo en que va a levantarse el servidor, "cluster" o "fork". Siendo este ultimo, el modo por defecto.

===========================================

Comandos para la ejecucion con forever:

npm install forever -g

forever start main.js [args]   --->>> Comando para arrancar el servidor. En "args" se pueden pasar los parametros para la ejecucion del servidor
(como por ejemplo el puero)
forever list   --->>> Muestra una lista de los procesos que se estan activos
forever stop <id>   --->>> Detiene la ejecucion del proceso con el id especificado
forever stopall   --->>> Detiene la ejecucion de todos los procesos activos
forever --help  --->>> Muestra una ayuda
  
===========================================
  
Comando para la ejecucion con pm2:
  
npm install pm2 -g
  
Para arrancar en modo Fork:
  
pm2 start main.js 
  
Se pueden agregar las etiquetas name, para darle un nombre al servidor. watch, para resetear y aplicar los cambios automaticamente luego de una actualizacion en el codigo.
Y, separado por "--" se pueden agregar ademas los argumentos para la ejecucion del servidor.

ejemplo de script:
pm2 start main.js --name servidor2 --watch -- 8080

Para arrancar en modo Cluster:

A las etiquetas antes mencionadas, se puede agregar la etiqueta "i" para indicar la ejecucion del server en modo cluster. seguida de la cantidad de
instancias de cluster que se desean. Si se coloca la palabra "max", se iniciara tantos cluster como nucleos de procesamiento tenga el hardware del servidor.
  
ejemplo de script:
pm2 start main.js --name servidor2 --watch -i max -- 8080
  
Se pueden ustilizar los siguientes comandos:
  
pm2 list  --->>> Da una lista de todos los procesos activos
pm2 stop   --->>> Para parar un proceso en ejecucion
pm2 restart   --->>> Para resetear la ejecucion de un proceso
pm2 delte --->>> Para elimitar un proceso parado

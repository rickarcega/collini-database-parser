const http = require('http');
const fs = require('fs');
const readline = require('readline');
const log = require('simple-node-logger').createSimpleFileLogger('project.log');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const readInterface = readline.createInterface({
    input: fs.createReadStream('/Users/ricardoarcega/Downloads/collini-reader/antenati-database-copy.txt'),
    console: false
});



server.listen(port, hostname, () => {


    

    readInterface.on('line', function(line) {
        
        //var recordSample = "Errico Giovanni Carlo Collini                                       Padre : Carlo Collini       Madre : Carmela Cimmino                                                               Comune/Località :           Quartiere San Ferdinando, Napoli, Napoli, Italia        Data : 01 Ott 1850            Tipologia di Atto : Nascite";
        var recordSample = "";
        recordSample = line;

        //var firstPart   = recordSample.substring(0, recordSample.indexOf("Età :"));
        //var firstPart   = recordSample.substring(0, recordSample.indexOf("Padre :"));
        //var firstPart   = recordSample.substring(0, recordSample.indexOf("Madre :"));
        //var firstPart   = recordSample.substring(0, recordSample.indexOf("Comune/Località :"));
        //var firstPart   = recordSample.substring(0, recordSample.indexOf("Data :"));
        //var firstPart   = recordSample.substring(0, recordSample.indexOf("Tipologia di Atto :"));
        //var firstPart   = recordSample.substring(0, recordSample.indexOf("Coniuge :"));
        //var firstPart   = recordSample.substring(0, recordSample.indexOf("Età Coniuge :"));
        //var firstPart   = recordSample.substring(0, recordSample.indexOf("Padre Coniuge : "));
        var firstPart   = recordSample.substring(0, recordSample.indexOf("Madre Coniuge : "));
        
        
        if(firstPart != 0){
            //var secondPart  = recordSample.substring(recordSample.indexOf("Età :") + 5, recordSample.length);
            //var secondPart  = recordSample.substring(recordSample.indexOf("Padre :") + 7, recordSample.length);
            //var secondPart  = recordSample.substring(recordSample.indexOf("Madre :") + 7, recordSample.length);
            //var secondPart  = recordSample.substring(recordSample.indexOf("Comune/Località :") + 17, recordSample.length);
            //var secondPart  = recordSample.substring(recordSample.indexOf("Data :") + 6, recordSample.length);
            //var secondPart  = recordSample.substring(recordSample.indexOf("Tipologia di Atto :") + 19, recordSample.length);
            //var secondPart  = recordSample.substring(recordSample.indexOf("Coniuge :") + 9, recordSample.length);
            //var secondPart  = recordSample.substring(recordSample.indexOf("Età Coniuge :") + 13, recordSample.length);
            //var secondPart  = recordSample.substring(recordSample.indexOf("Padre Coniuge :") + 15, recordSample.length);
            var secondPart  = recordSample.substring(recordSample.indexOf("Madre Coniuge :") + 15, recordSample.length);

            var valueArray = 0;
            var valueArray = (950 - firstPart.length);

            if(valueArray <= 0) {
                valueArray = 0;   
            }
            //console.log(valueArray);
            firstPart = firstPart + Array(valueArray).fill('\xa0').join('');  

            recordSample = "";
            //recordSample = firstPart + "Età :"+ secondPart;
            //recordSample = firstPart + "Padre :"+ secondPart;
            //recordSample = firstPart + "Madre :"+ secondPart;
            //recordSample = firstPart + "Comune/Località :"+ secondPart;
            //recordSample = firstPart + "Data :"+ secondPart;
            //recordSample = firstPart + "Tipologia di Atto  :"+ secondPart;
            //recordSample = firstPart + "Coniuge :"+ secondPart;
            //recordSample = firstPart + "Età Coniuge :"+ secondPart;
            //recordSample = firstPart + "Padre Coniuge :"+ secondPart;
            recordSample = firstPart + "Madre Coniuge :"+ secondPart;

            log.info(recordSample);
            
        }else{
            log.info(recordSample);
        }

        
    });


});
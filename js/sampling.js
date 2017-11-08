var invInspectionLevel = {
    'S-1': 0,
    'S-2': 1,
    'S-3': 2,
    'S-4': 3,
    'I': 4,
    'II': 5,
    'III': 6
};

var sampleCodeTable = 
[ { start: 2, end: 8, code: [ 'A', 'A', 'A', 'A', 'A', 'A', 'B' ] },
  { start: 9,
    end: 15,
    code: [ 'A', 'A', 'A', 'A', 'A', 'B', 'C' ] },
  { start: 16,
    end: 25,
    code: [ 'A', 'A', 'B', 'B', 'B', 'C', 'D' ] },
  { start: 26,
    end: 50,
    code: [ 'A', 'B', 'B', 'C', 'C', 'D', 'E' ] },
  { start: 51,
    end: 90,
    code: [ 'B', 'B', 'C', 'C', 'C', 'E', 'F' ] },
  { start: 91,
    end: 150,
    code: [ 'B', 'B', 'C', 'D', 'D', 'F', 'G' ] },
  { start: 151,
    end: 280,
    code: [ 'B', 'C', 'D', 'E', 'E', 'G', 'H' ] },
  { start: 281,
    end: 500,
    code: [ 'B', 'C', 'D', 'E', 'F', 'H', 'J' ] },
  { start: 501,
    end: 1200,
    code: [ 'C', 'C', 'E', 'F', 'G', 'J', 'K' ] },
  { start: 1201,
    end: 3200,
    code: [ 'C', 'D', 'E', 'G', 'H', 'K', 'L' ] },
  { start: 3201,
    end: 10000,
    code: [ 'C', 'D', 'F', 'G', 'J', 'L', 'M' ] },
  { start: 10001,
    end: 35000,
    code: [ 'C', 'D', 'F', 'H', 'K', 'M', 'N' ] },
  { start: 35001,
    end: 150000,
    code: [ 'D', 'E', 'G', 'J', 'L', 'N', 'P' ] },
  { start: 150001,
    end: 500000,
    code: [ 'D', 'E', 'G', 'J', 'M', 'P', 'Q' ] },
  { start: 500001,
    end: -1,
    code: [ 'D', 'E', 'H', 'K', 'N', 'Q', 'R' ] } ];


var AQLTable = {
    AQL: ["0.010","0.015","0.025","0.040","0.065","0.10","0.15","0.25","0.40","0.65","1.0","1.5","2.5","4.0","6.5","10","15","25","40","65","100","150","250","400","650","1000"],
    invCode: { 
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
        F: 5,
        G: 6,
        H: 7,
        J: 8,
        K: 9,
        L: 10,
        M: 11,
        N: 12,
        P: 13,
        Q: 14,
        R: 15
    },
    table: [{"code":"A","size":2,"acceptance":["D","D","D","D","D","D","D","D","D","D","D","D","D","D","0","D","D","1","2","3","5","7","10","14","21","30"]},{"code":"B","size":3,"acceptance":["D","D","D","D","D","D","D","D","D","D","D","D","D","0","U","D","1","2","3","5","7","10","14","21","30","44"]},{"code":"C","size":5,"acceptance":["D","D","D","D","D","D","D","D","D","D","D","D","0","U","D","1","2","3","5","7","10","14","21","30","44","U"]},{"code":"D","size":8,"acceptance":["D","D","D","D","D","D","D","D","D","D","D","0","U","D","1","2","3","5","7","10","14","21","30","44","U","U"]},{"code":"E","size":13,"acceptance":["D","D","D","D","D","D","D","D","D","D","0","U","D","1","2","3","5","7","10","14","21","30","44","U","U","U"]},{"code":"F","size":20,"acceptance":["D","D","D","D","D","D","D","D","D","0","U","D","1","2","3","5","7","10","14","21","U","U","U","U","U","U"]},{"code":"G","size":32,"acceptance":["D","D","D","D","D","D","D","D","0","U","D","1","2","3","5","7","10","14","21","U","U","U","U","U","U","U"]},{"code":"H","size":50,"acceptance":["D","D","D","D","D","D","D","0","U","D","1","2","3","5","7","10","14","21","U","U","U","U","U","U","U","U"]},{"code":"J","size":80,"acceptance":["D","D","D","D","D","D","0","U","D","1","2","3","5","7","10","14","21","U","U","U","U","U","U","U","U","U"]},{"code":"K","size":125,"acceptance":["D","D","D","D","D","0","U","D","1","2","3","5","7","10","14","21","U","U","U","U","U","U","U","U","U","U"]},{"code":"L","size":200,"acceptance":["D","D","D","D","0","U","D","1","2","3","5","7","10","14","21","U","U","U","U","U","U","U","U","U","U","U"]},{"code":"M","size":315,"acceptance":["D","D","D","0","U","D","1","2","3","5","7","10","14","21","U","U","U","U","U","U","U","U","U","U","U","U"]},{"code":"N","size":500,"acceptance":["D","D","0","U","D","1","2","3","5","7","10","14","21","U","U","U","U","U","U","U","U","U","U","U","U","U"]},{"code":"P","size":800,"acceptance":["D","0","U","D","1","2","3","5","7","10","14","21","U","U","U","U","U","U","U","U","U","U","U","U","U","U"]},{"code":"Q","size":1250,"acceptance":["0","U","D","1","2","3","5","7","10","14","21","U","U","U","U","U","U","U","U","U","U","U","U","U","U","U"]},{"code":"R","size":2000,"acceptance":["U","U","1","2","3","5","7","10","14","21","U","U","U","U","U","U","U","U","U","U","U","U","U","U","U","U"]}]
};



function sampleCodeSpecial(lotSize, specialInspectionLevel){
    var ans = -1;
    sampleCodeTable.forEach((v, ind, arr) => {
        if(lotSize >= v.start && (v.end == -1 || lotSize <= v.end)){
            if(ans != -1) alert("ERROR!");
            ans = v.code[specialInspectionLevel];
        }
    });
    if(ans == -1) alert("ERROR!");
    return ans;
}

function acceptanceLevel(sampleCode, AQL){ //AQL is an integer from 0 to 25, indexes on the AQLTable
    var x = AQLTable.invCode[sampleCode];
    var t = AQLTable.table[x].acceptance[AQL];
    if(t == 'U'){
        if(x == 0) alert("ERROR!");
        else{
            return acceptanceLevel(AQLTable.table[x-1].code, AQL);
        }
    }
    else if(t == "D"){
        if(x == 15) alert("ERROR!");
        else{
            return acceptanceLevel(AQLTable.table[x+1].code, AQL);
        }
    }
    else { 
        return {acceptance: t, samplesize: AQLTable.table[x].size, code: sampleCode};
    }
}
function switchToResults(){
    document.querySelector('#form').style.display = 'none';
    document.querySelector('#interim').style.display = 'block';
    document.querySelector('#results').style.display = 'none';
    setTimeout(function(){
        document.querySelector('#form').style.display = 'none';
        document.querySelector('#interim').style.display = 'none';
        document.querySelector('#results').style.display = 'block';
    }, 1000);
}
function switchToForm(){
    document.querySelector('#form').style.display = 'block';
    document.querySelector('#interim').style.display = 'none';
    document.querySelector('#results').style.display = 'none';
    
    document.querySelector('#indicatedlotsize').innerHTML           = 'Error!';
    document.querySelector('#indicatedinspectionlevel').innerHTML   = 'Error!';
    document.querySelector('#interimsamplesizecode').innerHTML      = 'Error!';
    document.querySelector('#indicatedaql').innerHTML               = 'Error!';
    document.querySelector('#displaysamplesizecode').innerHTML      = 'Error!';
    document.querySelector('#displaysamplesize').innerHTML          = 'Error!';
    document.querySelector('#displayacceptance').innerHTML          = 'Error!';
}
    
window.onload = function(){
    switchToForm();
    document.querySelector("#returntoform").onclick = switchToForm;
    var form = document.querySelector('#creds');
    form.addEventListener("submit", function(event) {
        var insp = form.elements.inspectionlevel.value;
        var lotsize = form.elements.lotsize.value;
        var aql = form.elements.aql.value;
        var code = "ERROR!";
        console.log("Saving value", insp);
        
            code = sampleCodeSpecial(lotsize, invInspectionLevel[insp]);
            console.log('Code:', code);
            var r = acceptanceLevel(code, aql);
            console.log('results:', r);
            document.querySelector('#indicatedlotsize').innerHTML           = lotsize;
            document.querySelector('#indicatedinspectionlevel').innerHTML   = insp;
            document.querySelector('#interimsamplesizecode').innerHTML      = code;
            document.querySelector('#indicatedaql').innerHTML               = AQLTable.AQL[aql];
            document.querySelector('#displaysamplesizecode').innerHTML      = r.code;
            document.querySelector('#displaysamplesize').innerHTML          = r.samplesize;
            document.querySelector('#displayacceptance').innerHTML          = r.acceptance;
            switchToResults();
            
        event.preventDefault();
    });
}

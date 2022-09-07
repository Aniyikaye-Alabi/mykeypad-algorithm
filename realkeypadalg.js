
    let keypad = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['*','0','#']
        ];
        
        let realPhoneNo = "";
        let phone_no = [];
        let storeNum;
        for(x = 0; x < 7; x++){
        
        let startNum;
        var validnum = [];
        if (phone_no.length == 0) {
          startNum = 3;
        }
        else{
          startNum = storeNum;
        }
        
        for(i = 0; i < keypad.length; i++){
          for(j=0; j < keypad[i].length; j++){
              if(keypad[i][j] == startNum){
                var a = keypad[i].concat(keypad.map(e => e[keypad[i].indexOf(keypad[i][j])]));
                validnum = a;
              }
            }
         
        }
        
        let filteredarray = validnum.filter(x => x != startNum && x != '0' && x != '*' && x != '#');
        let randomNum = Math.floor(Math.random() * filteredarray.length);
        
        phone_no.push(startNum);
        storeNum = filteredarray[randomNum];
        console.log(startNum);
        
        }
        phone_no.forEach(element => {
          realPhoneNo += element;
        });
        var realPhoneNoFormat = realPhoneNo.slice(0, 3) + "-" + realPhoneNo.slice(3);
        console.log(realPhoneNoFormat);
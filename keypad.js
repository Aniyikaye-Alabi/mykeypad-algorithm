
    let keypad = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['*','0','#']
    ];
    
    //console.log(keypad);
    let realPhoneNo = "";
    let phone_no = [];
    for(x = 0; x < 7; x++){
    
    let startNum;
    var validnum = [];
    if (phone_no.length == 0) {
      startNum = 3;
    }
    else{
      startNum = phone_no[x-1];
    }
    //console.log(startNum);
    
    for(i = 0; i < keypad.length; i++){
      for(j=0; j < keypad[i].length; j++){
        //console.log(keypad[j]);
          //validnum.push(keypad[0,0]);
          //console.log(keypad[i][j]);
          if(keypad[i][j] == startNum){
          //console.log(keypad[i]);
            //console.log(keypad.map(e => e[keypad[i].indexOf("3")]));
            //validnum.concat(keypad[i],keypad.map(e => e[keypad[i].indexOf("3")]));
            var a = keypad[i].concat(keypad.map(e => e[keypad[i].indexOf(keypad[i][j])]));
            validnum = a;
            //console.log(a);
          }
        }
     
    }
    
    let filteredarray = validnum.filter(x => x != startNum && x != '0' && x != '*' && x != '#');
    //console.log(filteredarray);
    let randomNum = Math.floor(Math.random() * filteredarray.length);
    phone_no.push(filteredarray[randomNum]);
    startNum  = phone_no[phone_no.length - 1];
    //return phone_no;
    // x = x + 1;
    //console.log(x);
    //console.log(startNum);
    
    }
    //console.log(phone_no);
    phone_no.forEach(element => {
      realPhoneNo += element;
    });
    //console.log(realPhoneNo);
    var realPhoneNoFormat = realPhoneNo.slice(0, 3) + "-" + realPhoneNo.slice(3);
    console.log(realPhoneNoFormat);
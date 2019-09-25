function strCompare(str1, str2) {
        var dif = 0,
            off = 0,
            maxInsertForgot = 4;
            

        for (var c = 0; c < Math.min(str1.length, str2.length); c++) {

            if (str1[c] == str2[c + off]) {

            }
            else if (str1[c].match(/\s$/) && str2[c].match(/\s/)) {

            }
            else if(str2[c + off] && str1[c] != str2[c + off]){
                
                if(str2[c + off] && str1[c] != str2[c + off]){
                    dif++					
                }  
            
                for (var n = 1; n < maxInsertForgot; n++) {
                    
                    if (str1[c] == str2[c + off + n]) {
                        off++
                        break
                    }
                }	
                for(var n = 1; n < maxInsertForgot; n++){
                    if (str1[c + n] == str2[c + off]) {
                        off--
                        break;
                    }       
                }
            }
            
        }

        return {
            dif: dif,
            off: off
        }
    }

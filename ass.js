function calculateTax(income, expenses) {
    if(income<0&&expenses<0||expenses>income){
return"Invalid Input"
    }
    if(expenses<income){
        let deposited = income-expenses
        let tax= deposited*.20
    return tax
}

}

function sendNotification(email) {


    for(let i=0;i<email.length;i++){
    if(email[i]=='@'){
        
        const part=email.split('@')
        const part1=part.join(' sent you an email from ')
        return part1   
    }
}
for(let i=0;i<email.length;i++){
    if(email[i]!=='@'){
return "Invalid Email"
    }
    
}
}

function checkDigitsInName(name) {
    if(typeof name!=='string'){
        return "Invalid Input"
    }
    for(let i=0; i<name.length;i++){
        const special= name[i];
        if(special === '@'||special === '!'||special === '#'||special === '$'){
            return false;
        }
    }
    
        for(let i=0;i<name.length;i++){
            
            if(name[i]==='0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'){
             return true;
            } 
            
    } 
    
}
   
    function calculateFinalScore(input){
        if(typeof input!=='object'){
            return "Invalid Input"
        }
        const {name,testScore, schoolGrade, isFFamily} = input;
        if(typeof name==='string' && typeof testScore==='number' && testScore > 0 && testScore<=50 && typeof schoolGrade ==='number' &&schoolGrade>0 && schoolGrade<=30 && typeof isFFamily ==='boolean'){
    let finalScore = testScore + schoolGrade;
    if(isFFamily){
        finalScore += 20;
    }
    return finalScore >=80;
        }
        else{
            return false;
    
    }
    }
    
    
    function waitingTime(waitingTimes,serialNumber){
    
        if(!Array.isArray(waitingTimes) && serialNumber !== 'number'){
    return "Invalid Input";
        }
             let sum=0;
            for(let i=0;i<waitingTimes.length;i++){
                
               sum=sum+waitingTimes[i];
              
            }
            const avg = Math.round(sum/waitingTimes.length);
            const peopleBeforeIsrat = serialNumber -1- waitingTimes.length;
            const waitingTime = peopleBeforeIsrat * avg;
          return waitingTime; 
        }
    
    
    

const teamGenerator = () => {
    const homeNum = Math.floor(Math.random() * 20);
    let awayNum;
    do {
        awayNum = Math.floor(Math.random() * 20);
    } while(homeNum === awayNum);
    const numArr = [homeNum, awayNum];
    const teamArr = [];
    for (element of numArr) {
        switch(element) {
            case 0:
                teamArr.push('Arsenal');
                break;
            case 1:
                teamArr.push('Aston Villa');
                break;
            case 2:
                teamArr.push('Brentford');
                break;
            case 3:
                teamArr.push('Brighton');
                break;
            case 4:
                teamArr.push('Burnley');
                break;
            case 5:
                teamArr.push('Chelsea');
                break;
            case 6:
                teamArr.push('Palace');
                break;
            case 7:
                teamArr.push('Everton');
                break;
            case 8:
                teamArr.push('Leeds Utd');
                break;
            case 9:
                teamArr.push('Leicester City');
                break;
            case 10:
                teamArr.push('Liverpool');
                break;
            case 11:
                teamArr.push('Man City');
                break;
            case 12:
                teamArr.push('Man Utd');
                break;
            case 13:
                teamArr.push('Newcastle');
                break;
            case 14:
                teamArr.push('Norwich City');
                break;
            case 15:
                teamArr.push('Southampton');
                break;
            case 16:
                teamArr.push('Spurs');
                break;
            case 17:
                teamArr.push('Watford');
                break;
            case 18:
                teamArr.push('West Ham Utd')
                break;
            case 19:
                teamArr.push('Wolves');
                break;
            default:
                return 'error';
                break;     
        }
    }
    return teamArr;
};

const results = () => {
    const resultArr = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)];
    return resultArr;
};

//Main Function to be run.
const mainFunction = () => { 
    const teams = teamGenerator();
    const scores = results();
    const finalArr = [teams[0], scores[0], '-',scores[1], teams[1]];
    return finalArr.join(' ');
};

console.log(mainFunction());

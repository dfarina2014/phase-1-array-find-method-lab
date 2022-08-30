function superbowlWin(record){
    const found = record.find((object) => object.result === 'W')
    return found ? found.year : undefined 
} 
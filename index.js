// Code your solution here
function findMatching(drivers, string){
    const result = drivers.filter(name => name.toLowerCase() === string.toLowerCase())
    return result;
}
function fuzzyMatch(drivers, string){
    const result = drivers.filter(name => name.startsWith(string))
    return result
}
function matchName(drivers, name){
    return drivers.filter(function (driver){
        return driver.name === name
    })
}
 
let counter = 1
export default () => {
  setTimeout(()=> {
    return JSON.stringify(counter);
  }, 500)
  
}
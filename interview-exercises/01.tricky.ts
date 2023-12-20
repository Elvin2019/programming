const secondAsyncFunc = async (letter: string) => {
    console.log(letter);
}

async function asyncFunc() {
    console.log('A');
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('B');
    await new Promise<void>(resolve => setTimeout(async ()=>{
        await secondAsyncFunc('T')
        resolve()
    }, 0));
    await secondAsyncFunc('F');
    secondAsyncFunc('E');
 }
 console.log('C');
 asyncFunc();
 console.log('D');
 
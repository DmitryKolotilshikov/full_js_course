// while(true) mock function example
let count = 0;
/* 
тут 
- замыкания (переменная count)
- асинхронные функции (pollNetwork и checkConnection)
- Promise и setTimeout для фейковой задержки
*/
const pollNetwork = async (delay = 1000) => {
    await new Promise(resolve => {
        setTimeout(resolve, delay);
    })

    count++;

    if (count < 5) {
        return { status: "pending" };
    }

    return { status: "connected" };
}

const checkConnection = async () => {
    while (true) {
        const response = await pollNetwork(1500);

        console.log(`STATUS = ${response.status}`);

        if (response.status === "connected") {
            break;
        }
    }
}

// checkConnection();
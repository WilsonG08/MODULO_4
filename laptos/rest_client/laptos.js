//const IP = "192.168.1.5";
const IP = "192.168.1.5";
const PORT = 3001;
const URL = "http://" + IP + ":" + PORT + "/";

export const getAllLaptops = (fnRefreshList) => {
    console.log("getAllLaptops..");
    fetch(
        URL + "laptos"
    ).then(
        (response) => { return response.json() }
    ).then(
        (body) => {
            console.log(body);
            fnRefreshList(body);
        }
    )
}


export const saveLaptopRest = (laptop, fnShowMessage) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco
        })
    }
    fetch(
        URL + "laptos", config
    )
        .then(response => response.json())
        .then(body => {
            fnShowMessage();
            console.log(body)
        })
}
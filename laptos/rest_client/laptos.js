//const IP = "192.168.1.5";
const IP = "192.168.24.49";
const PORT = 3001;
const URL = "http://"+IP+":"+PORT+"/";

export const getAllLaptops=(fnRefreshList)=>{
    console.log("getAllLaptops..");
    fetch(
        URL+"laptos"
    ).then(
        (response)=>{return response.json()}
    ).then(
        (body)=>{
            console.log(body);
            fnRefreshList(body);
        }
    )
}
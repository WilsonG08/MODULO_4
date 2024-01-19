//const IP = "192.168.1.5";
const IP = "192.168.100.147";
const PORT = 3001;
const URL = "http://"+IP+":"+PORT+"/";

export const getAllContacts=(fnRefreshList)=>{
    console.log("getAllContacts..");
    fetch(
        URL+"contactos"
    ).then(
        (response)=>{return response.json()}
    ).then(
        (body)=>{
            console.log(body);
            fnRefreshList(body);
        }
    )
}
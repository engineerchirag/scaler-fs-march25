function fetchUserData1() {
    return fetch('https://609e833333eed80017958b6c.mockapi.io/api/list/user')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            return data;
        })
}

fetchUserData1().then((data) => {
    console.log('Data from fetchUserData1:', data);
});

async function fetchUserData2() {
    const res = await fetch('https://609e833333eed80017958b6c.mockapi.io/api/list/user');
    const data = await res.json();
    console.log(data);
    return data;
}

fetchUserData3();
// const getImagePromesa = () => 
//     new Promise( resolve => resolve('api.giphy.com/v1/stickers/random'));

// getImagePromesa().then(console.log);

const getImagen = async () => {
    try {
        const apiKey = 'OwjeuxqO9JD614Crv5ukDGKgsvqd0D6j';
        const resp = await fetch(`api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json()
        console.log(data)
        const {url} = data.images.original;

        const img = document.createElement(`img`);
        img.src = url;
        document.body.append( img );
        // console.log(img.src)

    }catch(error){
        console.error(error)

    };
}

getImagen()



// const apiKey = 'OwjeuxqO9JD614Crv5ukDGKgsvqd0D6j';

// const request = fetch('https://api.giphy.com/v1/gifs/random?api_key=OwjeuxqO9JD614Crv5ukDGKgsvqd0D6j')


// // request.then( res => {
// //     res.json().then( data => {
// //         console.log(data);
// //     })
// // })
// // .catch(console.warn)

// request
//     .then( (resp) => resp.json())
//     .then( ({data}) => {
//         const {url} = data.images.original.url;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//         console.log(`${img}`);
//     })
//     .catch(console.warn)
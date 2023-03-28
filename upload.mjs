import { NFTStorage, File } from "nft.storage";
import * as fs from 'fs/promises'


const token = "api-key of your nft storage"

const client = new NFTStorage({token})


async function storeImage(filename){
    const content = await fs.readFile(filename)
    const f = new File([content], filename, {type: 'image/png'})

    const cid = await client.storeBlob(f)

    console.log(cid)
}

async function main(){
    const filename = process.argv[2]
    console.log('storing', filename)
    await storeImage(filename)
}

main()

// ipfs.nftstorage.link
// https://bafkreiehcgcfhiob2gqrp7e5t7oojhh365k4e4m2ir5lfvsoesf2eflrgi.ipfs.nftstorage.link/
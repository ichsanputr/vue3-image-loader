export default function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < 7; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomId
}

/*
export default function generateRandomId(){
  const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const rn=[Math.random(),Math.random()].map(r=>Math.floor(r*((256**4)-1)))
  let randomID=''
  for(let i=0; i<rn.length; i++){
    let bs=0
    for(let j=0; j<4; j++){
      randomID+=chars.charAt(Math.abs((rn[i]>>bs)%chars.length))
      bs+=8
    }
  }
  return randomID
}
*/

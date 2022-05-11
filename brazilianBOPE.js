function magNumber(info){
  let mags;
  if (info[0] === 'PT92'){
    mags = (info[1] * 3) / 17
    return Math.ceil(mags)
  }else  if (info[0] === 'M4A1'){
    mags = (info[1] * 3) / 30
    return Math.ceil(mags)
    }else  if (info[0] === 'M16A2'){
    mags = (info[1] * 3) / 30
    return Math.ceil(mags)
      }else  if (info[0] === 'PSG1'){
    mags = (info[1] * 3) / 5
    return Math.ceil(mags)
  }
}

function changeWord(text, selectext, changetext) {
    const changedText = text.replace(selectext, changetext); 
    return changedText; 
}

  let kalimat1 = 'Andini sangat mencintai kamu selamanya';
  let kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamau'
  
  console.log(changeWord(kalimat1, "mencintai", "membenci"));
  console.log(changeWord(kalimat2,'bromo','sumeru'))
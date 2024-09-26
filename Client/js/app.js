let ID_bool = false;
let class_bool = false;

document.getElementById("ID-Switch").addEventListener("change", function () {
  if(this.checked){
    ID_bool = true;
  }else{
    ID_bool = false;
  }
  console.log("ID: " + ID_bool.valueOf());

  updatePreset();
})

document.getElementById('Class-Switch').addEventListener("change", function () {
  if(this.checked){
    class_bool = true;
  }else{
    class_bool = false;
  }
  console.log("Class: " + class_bool.valueOf());

  updatePreset();
})

function updatePreset(){
  // Preset [ID, Class, Title] = true or false

  let preset = [false, false];
  let indices = ["ID_bool","class_bool"];

  for(let i = 0; i < preset.length; i++){
    if(indices[i].valueOf() === true){
      preset[i] = true;
      console.log("Success");
    }
  }

  console.log("ID: " + ID_bool.valueOf());
  console.log("Class: " + class_bool.valueOf());
  console.log("Title: " + title_bool.valueOf());
  console.log("-------------------")
}

function createXpathLineItem(){
  // This function will take the data from the other page
  // it will create a
}

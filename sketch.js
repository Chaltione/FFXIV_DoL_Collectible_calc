function setup() {
  // populateSkillMods();
  basepos = createVector(50, 100);
  blockPadding = 10;
  gatherAttemptsUsed = 0;
  // dummyP = createP("Your Disciple of Land class: ");
  // dummyP.position(basepos.x, basepos.y);
  // selClass = createSelect();
  // selClass.position(basepos.x + 200, basepos.y + 15);

  dummyP = createP("Methodical Appraisal result: ");
  dummyP.position(basepos.x, basepos.y);
  selMAresult = createSelect();
  DOMarray.push(selMAresult);
  selMAresult.position(basepos.x + 200, basepos.y + 15);

  for (var i = 80; i <= 115; i++) {
    selMAresult.option(i);
  }
  selMAresult.value(100);
  
  selMAslider = createSlider(80,115,100,1);
  selMAslider.position(basepos.x + 250,basepos.y+15);
  selMAslider.style('width', '300px');
  selMAslider.input(updateSelMAresult);
  selMAslider.changed(calculateCosts);

  dummyP = createP("Modifier 1");
  dummyP.position(basepos.x + 250, basepos.y + 20 + blockPadding);
  dummyP = createP("Modifier 2");
  dummyP.position(basepos.x + 426, basepos.y + 20 + blockPadding);
  dummyP = createP("Appraisal");
  dummyP.position(basepos.x + 592, basepos.y + 20 + blockPadding);

  labels[0] = createP("First gather attempt: ");
  labels[1] = createP("Second gather attempt: ");
  labels[2] = createP("Third gather attempt: ");
  labels[3] = createP("Fourth gather attempt: ");
  labels[4] = createP("Fifth gather attempt: ");

  // selClass.option("Miner");
  // selClass.option("Botanist");
  // selClass.option("Fisher");

  for (var i = 0; i < 5; i++) {
    selModsA[i] = createSelect();
    selModsB[i] = createSelect();
    selSkills[i] = createSelect();
    DOMarray.push(selModsA[i]);
    DOMarray.push(selModsB[i]);
    DOMarray.push(selSkills[i]);
    selSkills[i].option(NotSelected);
    selSkills[i].option(SkillConstants[0].name);
    selSkills[i].option(SkillConstants[1].name);
    selSkills[i].option(SkillConstants[2].name);
    selModsA[i].option(NotSelected);
    selModsA[i].option(ModConstants[0].name);
    selModsA[i].option(ModConstants[1].name);
    selModsA[i].option(ModConstants[2].name);
    selModsA[i].option(ModConstants[3].name);
    selModsB[i].option(NotSelected);
    selModsB[i].option(ModConstants[0].name);
    selModsB[i].option(ModConstants[1].name);
    selModsB[i].option(ModConstants[2].name);
    selModsB[i].option(ModConstants[3].name);

    labels[i].position(basepos.x, basepos.y + 40 + i * 20 + blockPadding);
    selModsA[i].position(basepos.x + 200, basepos.y + 55 + i * 20 + blockPadding);
    selModsB[i].position(basepos.x + 376, basepos.y + 55 + i * 20 + blockPadding);
    selSkills[i].position(basepos.x + 552, basepos.y + 55 + i * 20 + blockPadding);

    GPCost[i] = 0;
    WearCost[i] = 0;
  }

  dummyP = createP("Impulsive Proc?");
  dummyP.position(basepos.x + 725, basepos.y + 20 + blockPadding);
  for (var i = 0; i < 5; i++) {
    DEprocs[i] = createCheckbox();
    DOMarray.push(DEprocs[i]);
    DEprocs[i].position(basepos.x + 775, basepos.y + 55 + i * 20 + blockPadding);
    DEprocs[i].changed(calculateCosts);
  }

  dummyP = createP("Deep Breath Proc?");
  dummyP.position(basepos.x + 875, basepos.y + 20 + blockPadding);
  for (var i = 0; i < 5; i++) {
    DBprocs[i] = createCheckbox();
    DOMarray.push(DBprocs[i]);
    DBprocs[i].position(basepos.x + 925, basepos.y + 55 + i * 20 + blockPadding);
    DBprocs[i].changed(calculateCosts);
  }


  labelGP = createP("GP cost:");
  labelWear = createP("Wear used:");
  labelMin = createP("Minimum collectability:");
  labelMax = createP("Maximum collectability:");
  labelAverage = createP("Average collectability:");

  labelGatherRemain4 = createP("Remaining collect attempts (4 attempts initially):");
  labelGatherRemain4.style("font-size", "20px");
  labelGatherRemain6 = createP("Remaining collect attempts (6 attempts initially):");
  labelGatherRemain6.style("font-size", "20px");

  resultGP = createP("0");
  resultWear = createP("0");
  resultMin = createP("0");
  resultMax = createP("0");
  resultAverage = createP("0");

  resultGatherRemain4 = createP("0");
  resultGatherRemain4.style("font-size", "20px");
  resultGatherRemain6 = createP("0");
  resultGatherRemain6.style("font-size", "20px");

  var spacing = blockPadding * 18;

  labelGP.position(basepos.x, basepos.y + spacing);
  labelWear.position(basepos.x, basepos.y + spacing + 20);
  labelMin.position(basepos.x, basepos.y + spacing + 40);
  labelMax.position(basepos.x, basepos.y + spacing + 60);
  labelAverage.position(basepos.x, basepos.y + spacing + 80);

  labelGatherRemain4.position(basepos.x, basepos.y + spacing + 120);
  labelGatherRemain6.position(basepos.x, basepos.y + spacing + 140);

  resultGP.position(basepos.x + 200, basepos.y + spacing);
  resultWear.position(basepos.x + 200, basepos.y + spacing + 20);
  resultMin.position(basepos.x + 200, basepos.y + spacing + 40);
  resultMax.position(basepos.x + 200, basepos.y + spacing + 60);
  resultAverage.position(basepos.x + 200, basepos.y + spacing + 80);

  resultGatherRemain4.position(basepos.x + 500, basepos.y + spacing + 120);
  resultGatherRemain6.position(basepos.x + 500, basepos.y + spacing + 140);

  // selClass.changed(calculateCosts);
  selMAresult.changed(calculateCosts);

  for (var i = 0; i < 5; i++) {
    selModsA[i].changed(calculateCosts);
    selModsB[i].changed(calculateCosts);
    selSkills[i].changed(calculateCosts);
  }

  butt = createButton("Reset");
  butt.position(basepos.x, basepos.y + spacing + 210)
  butt.mousePressed(doReset);

  giveDOMnames();
  getParams();
  calculateCosts();
} // setup

function updateSelMAresult() {
  selMAresult.value(selMAslider.value());
}

function giveDOMnames() {
  DOMarray[0].name = "mr";
  DOMarray[1].name = "m1a";
  DOMarray[2].name = "m1b";
  DOMarray[3].name = "s1";
  DOMarray[4].name = "m2a";
  DOMarray[5].name = "m2b";
  DOMarray[6].name = "s2";
  DOMarray[7].name = "m3a";
  DOMarray[8].name = "m3b";
  DOMarray[9].name = "s3";
  DOMarray[10].name = "m4a";
  DOMarray[11].name = "m4b";
  DOMarray[12].name = "s4";
  DOMarray[13].name = "m5a";
  DOMarray[14].name = "m5b";
  DOMarray[15].name = "s5";
  DOMarray[16].name = "de1";
  DOMarray[17].name = "de2";
  DOMarray[18].name = "de3";
  DOMarray[19].name = "de4";
  DOMarray[20].name = "de5";
  DOMarray[21].name = "db1";
  DOMarray[22].name = "db2";
  DOMarray[23].name = "db3";
  DOMarray[24].name = "db4";
  DOMarray[25].name = "db5";
}

function getParams() {
  var paramList = window.location.search.split('?')[1];
  if (paramList) {
    var paramArray = paramList.split('&');
    // var i = 0
    for (var p in paramArray) {
      var tempSplit = paramArray[p].split('=');
      for (var j = 0; j < DOMarray.length; j++) {
        if (tempSplit[0] == DOMarray[j].name) {
          if (tempSplit[1] == 'n') {
            DOMarray[j].value(NotSelected);
          } else if (tempSplit[1] == -999) {
            DOMarray[j].checked(true);
          } else if (tempSplit[1] > 0) {
            DOMarray[j].value(tempSplit[1]);
          } else if (tempSplit[1] <= -100) {
            tempSplit[1] = 100 + Number(tempSplit[1]);
            DOMarray[j].value(SkillConstants[abs(tempSplit[1])].name);
          } else if (tempSplit[1] <= 0) {
            DOMarray[j].value(ModConstants[abs(tempSplit[1])].name);
          }
        }
      }
    }
  }
}

function setParams() {
  var paramstring = "";
  for (var d in DOMarray) {
    if (DOMarray[d].name[1] == 'r') {
      paramstring += "?" + DOMarray[d].name + "=" + DOMarray[d].value();
    } else if (DOMarray[d].name[0] == 'm' && DOMarray[d].value() != NotSelected) {
      var tempValue = "";

      if (DOMarray[d].value() == ModConstants[0].name) {
        tempValue = 0;
      } else if (DOMarray[d].value() == ModConstants[1].name) {
        tempValue = 1;
      } else if (DOMarray[d].value() == ModConstants[2].name) {
        tempValue = 2;
      } else if (DOMarray[d].value() == ModConstants[3].name) {
        tempValue = 3;
      }
      paramstring += "&" + DOMarray[d].name + "=" + -tempValue;
    } else if (DOMarray[d].name[0] == 's' && DOMarray[d].value() != NotSelected) {
      var tempValue = "";

      if (DOMarray[d].value() == SkillConstants[0].name) {
        tempValue = 100;
      } else if (DOMarray[d].value() == SkillConstants[1].name) {
        tempValue = 101;
      } else if (DOMarray[d].value() == SkillConstants[2].name) {
        tempValue = 102;
      }
      paramstring += "&" + DOMarray[d].name + "=" + -tempValue;
    } else if (DOMarray[d].name[0] == 'd' && DOMarray[d].checked()) {
      paramstring += "&" + DOMarray[d].name + "=-999";
    } else {
      // paramstring += "&" + DOMarray[d].name + "=n";
    }
  }
  println(paramstring)
  
  if (history.pushState) {
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + paramstring;
    window.history.pushState({
      path: newurl
    }, '', newurl);
  }
  
}

function calculateCosts() {
  var sumMinCollectability = 0;
  var sumMaxCollectability = 0;
  var sumAvgCollectability = 0;
  var MAval = selMAresult.value();

  gatherAttemptsUsed = 0;

  // Reset costs
  for (var j = 0; j < 5; j++) {
    GPCost[j] = 0;
    WearCost[j] = 0;
    DEprocs[j].hide();
    DBprocs[j].hide();
    if (DBprocs[j].checked()) {
      DBprocs[j].elt.disabled = false;
    } else {
      DBprocs[j].elt.disabled = true;

    }
  }

  // loop through all the attempt rows
  for (var i = 0; i < 5; i++) {
    // Get values
    var modA = selModsA[i].value();
    var modB = selModsB[i].value();
    var skill = selSkills[i].value();

    // Reset all colors
    selModsA[i].style("background", "");
    selModsB[i].style("background", "");

    // Check for duplicate mod selections
    if (modA != NotSelected && modB != NotSelected && modA == modB) {
      selModsA[i].style("background", "red");
      selModsB[i].style("background", "red");
    }

    // Get costs and collectability
    for (var j = 0; j < 4; j++) {
      if (modA == ModConstants[j].name) {
        // GP cost
        GPCost[i] += ModConstants[j].GPCost;
        // Subtract cost when Utmost Caution is used
        WearCost[i] += ModConstants[j].WearCost;
      }
      if (modB == ModConstants[j].name) {
        // GP cost
        GPCost[i] += ModConstants[j].GPCost;
        // Subtract cost when Utmost Caution is used
        WearCost[i] += ModConstants[j].WearCost;
      }
    }
    for (var j = 0; j < 3; j++) {
      if (skill == SkillConstants[j].name) {
        GPCost[i] += SkillConstants[j].GPCost;

        // Do something clever when Deep Breath is used
        if (!DBprocs[i].checked()) {
          WearCost[i] += SkillConstants[j].WearCost;
        }

        var DEmulti = 1;
        if (modA == ModConstants[0].name || modB == ModConstants[0].name) {
          DEmulti = 1.5;
        } else if (i > 0 && DEprocs[i - 1].checked()) {
          DEmulti = 1.5;
        }

        sumMinCollectability += SkillConstants[j].minCollectability * DEmulti;
        sumMaxCollectability += SkillConstants[j].maxCollectability * DEmulti;
      }
    }

    // Show/Hide checkboxes
    if (skill == SkillConstants[2].name) {
      DEprocs[i].show();
    }

    if ((i < 4 && modA == ModConstants[2].name) || (i < 4 && modB == ModConstants[2].name)) {
      DBprocs[min(i + 0, 4)].show();
      // DBprocs[min(i + 1, 4)].elt.disabled = false;
      DBprocs[min(i + 1, 4)].show();
      // DBprocs[min(i + 2, 4)].elt.disabled = false;
      DBprocs[min(i + 2, 4)].show();
      // DBprocs[min(i + 3, 4)].elt.disabled = false;
    }
    // Show/Hide checkboxes //

    // Use a gather attempt
    if (skill != NotSelected) {
      gatherAttemptsUsed++;
    }

    // But not when Single Minded is used
    if ((i < 4 && modA == ModConstants[3].name) || (i < 4 && modB == ModConstants[3].name)) {
      println(gatherAttemptsUsed);
      gatherAttemptsUsed--;
      gatherAttemptsUsed = max(gatherAttemptsUsed, 0);
      println(gatherAttemptsUsed);
    }
  }

  ClearDBprocsCheckmarks();

  var sumGP = 0;
  var sumWear = 0;

  for (var j = 0; j < 5; j++) {
    sumGP += GPCost[j];
    sumWear += WearCost[j];
  }

  // Update .html()  
  resultMin.html(round(sumMinCollectability * MAval));
  resultMax.html(round(sumMaxCollectability * MAval));
  resultAverage.html(round(round((sumMinCollectability + sumMaxCollectability) * 50 * MAval) / 100));

  resultGP.html(sumGP);
  resultWear.html(sumWear);

  resultGatherRemain4.html(4 - gatherAttemptsUsed);
  resultGatherRemain6.html(6 - gatherAttemptsUsed);

  setParams();
} // calculateCosts

function ClearDBprocsCheckmarks() {
  var DBarray = [];
  for (var i = 4; i >= 0; i--) {
    DBarray[i] = false;
    var modA = selModsA[i].value();
    var modB = selModsB[i].value();
    if ((modA == ModConstants[2].name) || (modB == ModConstants[2].name)) {
      DBarray[i + 0] = true;
      DBarray[i + 1] = true;
      DBarray[i + 2] = true;
    }
  }
  for (var i = 0; i < 5; i++) {
    DBprocs[i].checked(DBarray[i] && DBprocs[i].elt.disabled != true);
    DBprocs[i].elt.disabled = false;
  }
}

function doReset() {
  selMAresult.value(100);
  selMAslider.value(100);
  for (var i = 0; i < 5; i++) {
    selModsA[i].value(NotSelected);
    selModsB[i].value(NotSelected);
    selSkills[i].value(NotSelected);
    DEprocs[i].checked(false);
    DEprocs[i].hide();
    DBprocs[i].checked(false);
    DBprocs[i].hide();
  }
  resultGP.html(0);
  resultWear.html(0);
  resultMin.html(0);
  resultMax.html(0);
  resultAverage.html(0);
  resultGatherRemain4.html(4);
  resultGatherRemain6.html(6);
  // gatherAttemptsUsed = 0;
  
  setParams();
}

function draw() {}
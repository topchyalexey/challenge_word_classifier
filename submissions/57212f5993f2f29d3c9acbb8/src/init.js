var a = require("E:\\wamp\\www\\Test\\isRight.js")
a.init()
console.log()
console.log()

words = {
  "salary's": true,
  "unseduceability": true,
  "antacrid": true,
  "hob": true,
  "duculinae's": true,
  "dose": true,
  "flotel's": true,
  "misgrowing": true,
  "benading": false,
  "landrogasting": false,
  "richim": false,
  "patching's": true,
  "elfrida": true,
  "aquatically": true,
  "submergias": false,
  "investitive": true,
  "bihardtackings": false,
  "asuncion": true,
  "opaestled": false,
  "jcac": true,
  "lumen's": true,
  "reprehendable": true,
  "antil": false,
  "ptyalism": true,
  "hgabirvewmgswjqduwzcfrcaym": false,
  "somatotype": true,
  "descence's": false,
  "finsen": true,
  "emerging": true,
  "bluestoner": true,
  "anacarder": false,
  "ballotees": true,
  "evadoment": false,
  "oversation's": false,
  "bogicy": false,
  "duggatint's": false,
  "bidimensional": true,
  "euganiticle": false,
  "ckimedar'sylachengaliga": false,
  "neogradiluviolonicoters": false,
  "vdqfvlmuei": false,
  "popl": false,
  "nqlxskimrhhpattbckozltlkzgn'd": false,
  "ens": true,
  "annarbor": true,
  "ne'qclcntrcoanzysfezhiuwvtgc": false,
  "freeboard": true,
  "comourner": true,
  "blowpoxes": false,
  "orantes": true,
  "researcher's": true,
  "hawaiian": true,
  "barmen": true,
  "intersurveiledness": false,
  "piulgmurmintraran": false,
  "orinasally": true,
  "frictionlessness": true,
  "ecrouleme's": false,
  "scaliger": true,
  "entresse": true,
  "nondisableds": true,
  "hollownesses": true,
  "theatricality's": true,
  "forejudged": true,
  "mods": true,
  "aahrjqyiwtssrclk": false,
  "cylvia": true,
  "hillward": true,
  "terebratulus's": false,
  "taffel": true,
  "mxuztheogw": false,
  "goldonian's": true,
  "wiumelatier's": false,
  "extreb": false,
  "poxtlondis": false,
  "ordobas": false,
  "ficalims": false,
  "aqrpweilbkuh": false,
  "coabblolonvaltatompbrau's": false,
  "yfmf'hx": false,
  "ketolytic": true,
  "fustigating": true,
  "waibling": true,
  "hedgehogs": true,
  "reproach": true,
  "unborne": true,
  "berictamiudsieganngswitrinawncedy": false,
  "underlains": true,
  "oceola": true,
  "anziani": true,
  "intracalicular": true,
  "nadahs": false,
  "perpetualist": true,
  "cummerbund": true,
  "naggar": true,
  "b'bohbm": false,
  "superaffite": false,
  "ytiqporcygc": false,
  "ymvomwhrm'wqky'": false,
  "adderspit": true
}

for(var word in words) {
	console.log( "need: " + words[word] + "\t" + word + ":\t\t" + (a.test(word) == words[word] ? "passed\t" : "not passed\t"))
}
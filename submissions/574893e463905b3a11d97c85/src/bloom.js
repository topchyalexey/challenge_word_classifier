var size = 64000;
var filter = {
  data: new Uint8Array(64000),
  add: (word) => {
    var index = filter.hash(word);
    if([251211, 217658, 135622, 265811, 418157, 329796, 315971, 364366, 103048, 9721, 60258, 49347, 240096, 26520, 198696,
      377322, 421482, 394563, 276254, 164953, 22346, 58644, 118690, 97714, 372384, 456738, 79346, 199230, 469375, 129229,
      81234, 124419, 39194, 455762, 478896, 342738, 391283, 341226, 66524, 486424, 302301, 62228, 385430, 273606, 291992,
      89674, 507719, 355367, 173485, 328726, 344357, 324124, 143879, 406850, 241191, 120111, 60822, 465181, 416737, 337381,
      169987, 44514, 240316, 440191, 114232, 295850, 418157, 505372, 496970, 107768, 83584, 254121, 349386, 158469, 488016,
      354424, 352445, 172670, 67279, 264303, 111762, 82345, 385634, 377055, 381812, 3620, 325441, 197021, 474574, 179975,
      158455, 91444, 168691, 311469, 285537, 264657, 384834, 240024, 177203, 80315, 434368, 413376, 280182, 26834, 292999,
      290331, 273972, 232613, 482298, 376782, 365420, 281321, 280153, 263596, 496617, 446449, 440677, 60456, 251735, 83082,
      396579, 295968, 225976, 507182, 21904, 79758, 507256, 499595, 360190, 10097, 469428, 4500, 235496, 17831, 149921,
      144321, 370051, 346522, 251442, 183267, 423907, 242122, 234144, 20662, 162000, 223501, 159451, 59176, 361165, 31444,
      298613, 128328, 298905, 292270, 221302, 197379, 185578, 17248, 106754, 47814, 461599, 404392, 398563, 389519, 291892,
      276308, 26071, 202458, 55835, 159047, 95967, 382695, 206920, 475425, 176851, 171159, 73293, 62094, 263850, 126920,
      507913, 461753, 450694, 437171, 424050, 327453, 311956, 271255, 59089, 375755, 369431, 300084, 276361, 243981, 147223,
      138763, 53156, 398302, 388675, 298359, 288106, 236461, 235004, 229438, 187163, 142430, 78758, 493597, 379258, 377303,
      323661, 270825, 135040, 86204, 71012, 471684, 45645, 320287, 282434, 155951, 97424, 420276, 404786, 386154, 274942,
      132004, 59469, 52218, 434285, 323354, 177220, 149179, 130245, 117581, 74211, 336385, 331042, 326510, 296138, 283016,
      268409, 217251, 207494, 201906, 180424, 164083, 69119, 402500, 331373, 27826, 246798, 22830, 212735, 173807, 30844,
      297270, 26642, 223910, 220357, 209403, 180609, 167516, 88526, 87536, 65375, 462199, 380200, 307393, 290900, 28481,
      281795, 21698, 206769, 177871, 165968, 111841, 480906, 476393, 474775, 385165, 301127, 277229, 273382, 271921, 235223,
      18970, 169450, 140522, 131630, 7509, 55349, 510665, 506707, 346592, 321726, 298381, 226378, 181767, 164649, 131473,
      123980, 112831, 54660, 506113, 428006, 422668, 408422, 401665, 369662, 337694, 261541, 261455, 259880, 154116, 14567,
      142594, 117954, 99559, 61317, 490152, 414709, 3402, 310986, 246557, 164243, 132148, 127492, 7325, 459751, 447641,
      445076, 428758, 428462, 417789, 355685, 34131, 322595, 265121, 208524, 114084, 101219, 63855, 498935, 49221, 46229,
      41458, 403388, 390577, 362283, 296334, 283606, 194458, 137528, 90315, 501258, 496400, 466071, 407456, 353974, 331073,
      323785, 322238, 321492, 316784, 275528, 240357, 207060, 167610, 138810, 55230, 483980, 469852, 431135, 410035, 371902,
      335963, 3262, 251945, 239744, 238813, 231464, 22534, 191360, 151629, 498903, 488926, 48189, 476719, 461334, 437488,
      432937, 421934, 418712, 364918, 321716, 303316, 253849, 249207, 204410, 197020, 146100, 140727, 120115, 11173, 78785,
      49773, 491638, 464463, 400595, 393765, 342081, 335375, 276182, 207779, 196524, 176569, 145789, 135468, 126203, 125834,
      480459, 439155, 410660, 403032, 351166, 328774, 243150, 237211, 227013, 212877, 199230, 190547, 181579, 151805,
      121935, 119528, 114534, 110484, 106142, 96040, 89871, 88786, 60263, 59030, 498423, 491750, 471070, 462136, 458929,
      454490, 44741, 408626, 403824, 400046, 37210, 360515, 347683, 338846, 314589, 300516, 299743, 277508, 272666, 271870,
      251260, 237367, 146895, 104913, 101881, 97068, 88556, 55155, 51982, 499952, 488139, 483802, 477631, 384925, 362339,
      356088, 354568, 320870, 303539, 299088, 286809, 25848, 255843, 23556, 210384, 192618, 182767, 179785, 147792, 135530,
      131037, 79361, 6456, 62593, 484160, 481027, 463281, 445896, 437238, 396488, 380435, 377852, 366434, 363443, 334429,
      302502, 294069, 291866, 274112, 273171, 268514, 245922, 241620, 24161, 240825, 214555, 198525, 184755, 15537, 143052,
      131510, 125669, 124700, 123986, 109889, 85481, 71920, 57642, 481341, 472259, 456830, 432820, 40733, 390342, 387001,
      380917, 3678, 362108, 353437, 312359, 298781, 295952, 293896, 284172, 283498, 27863, 277428, 232255, 217237, 207358,
      20696, 199815, 180317, 179195, 169623, 159409, 158434, 156698, 153185, 15183, 116960, 99506, 95697, 90891, 86508,
      80904, 76100, 59103, 53569, 507733, 459315, 455341, 450541, 450513, 417184, 415085, 38329, 378693, 375112, 353996,
      326944, 32481, 320545, 312518, 301067, 296620, 295064, 277200, 273699, 26744, 250954, 205404, 196245, 161408, 152350,
      109554, 1088, 107246, 106781, 74171, 71663, 5973, 506702, 484614, 468877, 440731, 434940, 434110, 431531, 423098,
      415590, 413445, 41084, 396803, 396416, 339901, 337891, 334428, 323980, 304780, 289039, 286039, 265711, 260656, 253033,
      232067, 226591, 223608, 213064, 206912, 205503, 20378, 203395, 201759, 200789, 17166, 149053, 120846, 100727, 511218,
      509358, 506384, 500651, 496287, 490030, 485080, 473959, 455693, 452685, 448498, 441913, 436527, 435634, 425833,
      400192, 397734, 397001, 383434, 381202, 378895, 369862, 362143, 356576, 341958, 328329, 326582, 324745, 309, 308018,
      266184, 262858, 250708, 250072, 224054, 220617, 216700, 210426, 210194, 20073, 16873, 168584, 159258, 151604, 146812,
      142234, 140783, 137922, 136904, 134601, 125337, 122405, 121813, 115446, 108673, 85190, 72017, 61737, 495303, 493468,
      491285, 489530, 479562, 468642, 466938, 458928, 454207, 448646, 435980, 430872, 411846, 399394, 371771, 368716,
      368374, 364953, 330755, 328479, 314293, 274052, 269667, 269542, 26383, 250456, 243547, 240466, 238548, 232008, 213379,
      210052, 208020, 202718, 176015, 171537, 162895, 157112, 153627, 136409, 117685, 115126, 105183, 96351, 91485, 79926,
      59567, 54555, 5229, 50768, 507629, 495420, 48952, 489282, 485532, 484077, 482312, 480524, 473810, 460006, 451254,
      449201, 421725, 398083, 389797, 380085, 37681, 350409, 347907, 328157, 325278, 320140, 308020, 302834, 301873, 299369,
      295953, 292479, 277563, 273237, 272398, 271608, 249722, 248954, 247831, 247418, 243697, 23881, 238590, 232481, 216117,
      195438, 171462, 153954, 140807, 116853, 114205, 105888, 100699, 82164, 70690, 6963, 64547, 53159, 511462, 497811,
      489062, 459810, 446383, 416287, 406385, 403070, 389112, 379253, 369683, 320774, 312808, 300439, 298209, 285573,
      276664, 235657, 221761, 221170, 208643, 206862, 196265, 193343, 191927, 184023, 176112, 172783, 172083, 165754,
      150839, 143853, 141646, 134216, 122759, 116534, 115044, 101199, 90611, 69482, 56141, 504579, 47961, 477762, 445855,
      440420, 409561, 408921, 399390, 397508, 380291, 379786, 377826, 376173, 375878, 371984, 361995, 360404, 360351, 35541,
      343530, 33027, 326614, 323351, 322021, 301662, 299756, 285331, 271932, 269715, 242800, 236934, 233003, 232903, 231090,
      227130, 217229, 2164, 21483, 205371, 196446, 196112, 187185, 184130, 179883, 171986, 170201, 166879, 158740, 156599,
      142491, 100880, 86319, 71088, 62213, 60114, 57981, 56660, 488969, 471898, 461305, 459503, 455898, 437113, 435497,
      435358, 434937, 430288, 427828, 426401, 421576, 414231, 405822, 388904, 378256, 375105, 368272, 367867, 359615,
      355945, 346128, 344500, 341961, 336248, 317153, 31410, 300391, 299132, 297563, 297358, 29100, 277884, 273392, 273009,
      272933, 250850, 215197, 211154, 209285, 207666, 205502, 203813, 201200, 191433, 191184, 184641, 182268, 179169,
      177267, 165088, 164071, 160152, 143045, 139780, 128018, 124095, 117744, 101259, 88093, 85762, 78458, 72933, 70915,
      66812, 61924, 61013, 53840, 52659, 511366, 509268, 508629, 507697, 49813, 497836, 495772, 494564, 494239, 490272,
      484923, 483277, 481836, 463107, 461129, 456205, 446069, 444721, 438511, 430880, 430754, 430740, 427386, 418155,
      410688, 409331, 404660, 400148, 397051, 386095, 380465, 375756, 368488, 361862, 339380, 334940, 332242, 331180,
      316976, 315540, 307225, 303747, 301183, 297998, 295900, 292738, 282002, 279342, 278371, 264810, 242690, 23667, 228256,
      227435, 218601, 217707, 21381, 203072, 20145, 186782, 184402, 183053, 182900, 178111, 174516, 166281, 163713, 161772,
      161137, 154842, 14721, 139309, 13851, 127181, 122496, 111131, 11082, 102742, 99699, 87531, 82069, 81592, 8046, 79820,
      59947, 53300, 51519, 505373, 493486, 492779, 490286, 481097, 47645, 471219, 469024, 459588, 457257, 455172, 454888,
      452830, 44902, 446312, 427358, 414299, 41294, 41161, 404837, 395553, 386683, 381302, 376539, 369338, 355429, 354294,
      353453, 349311, 337089, 335065, 334388, 332857, 331861, 328721, 327902, 325623, 32268, 310390, 297007, 292387, 284577,
      283125, 271935, 266478, 259011, 249587, 246331, 246004, 243233, 241941, 237926, 233448, 219262, 219084, 205135,
      201167, 199148, 19762, 197181, 196131, 195941, 191239, 164380, 164344, 162817, 156405, 156138, 149634, 141411, 136024,
      129931, 127560, 118469, 11126, 110359, 92576, 91049, 88810, 74204, 70646, 69605, 65472, 62646, 62143, 5361, 52919,
      507240, 501274, 492360, 476542, 474596, 473619, 473237, 471899, 463333, 455207, 453627, 451852, 449541, 448558,
      445668, 438933, 43543, 428459, 420688, 419716, 418781, 409803, 406606, 403322, 402704, 399101, 395307, 390709, 383652,
      380332, 377768, 3766, 374724, 372140, 366570, 364076, 352843, 351315, 34758, 344550, 335685, 332958, 332058, 324045,
      316305, 295383, 292111, 291672, 28842, 287622, 285735, 28539, 279253, 277749, 267529, 263010, 262254, 261433, 258941,
      255051, 246939, 241821, 239522, 234728, 230334, 218548, 2104, 20360, 201254, 200390, 19228, 190896, 185258, 178416,
      167843, 163005, 162193, 156192, 153031, 152470, 147886, 140499, 133868, 131719, 12971, 128557, 126286, 125884, 124980,
      11971, 11529, 107045, 106946, 9813, 97421, 95340, 9091, 86328, 85907, 85212, 76272, 74149, 72962, 70324, 65596, 62664,
      62365, 6038, 59746, 58320, 5530, 51962, 50028, 498656, 496310, 489486, 484194, 483595, 481455, 480849, 467861, 467226,
      465181, 457072, 454739, 452651, 452039, 451634, 440089, 43980, 437195, 436784, 43639, 425606, 425152, 41971, 417662,
      416179, 415759, 414146, 412147, 409170, 407636, 406896, 406419, 399796, 395904, 394405, 391779, 387259, 377130,
      375503, 373166, 37269, 365500, 352053, 348427, 345394, 345247, 341759, 33969, 337382, 336274, 329793, 324120, 322786,
      317542, 317146, 315280, 31386, 309207, 3058, 299, 298200, 295090, 288651, 282452, 279306, 276561, 265313, 260114,
      259178, 254365, 247039, 243135, 230791, 230294, 223294, 221036, 219947, 206989, 206603, 203564, 198087, 191829,
      190276, 184887, 181411, 156169, 156009, 155159, 152230, 148286, 146276, 145199, 132515, 131100, 123671, 116639,
      114100, 113065, 111456, 111227, 105411, 10313, 103078, 100021, 9673, 96382, 90658, 87609, 84337, 80120, 77254, 75699,
      69749, 66371, 58881, 55028, 53350, 53231, 52099, 507659, 505464, 49182, 491617, 488494, 483724, 47346, 472617, 47127,
      460417, 458508, 45384, 452847, 450665, 442402, 442334, 440582, 440362, 431747, 431080, 428298, 428183, 427446, 426413,
      422554, 419230, 418257, 403544, 40200, 401550, 401157, 400221, 391184, 387298, 382275, 378219, 375282, 365247, 364109,
      360406, 358482, 356622, 356182, 353832, 348557, 346574, 345180, 342825, 341516, 336321, 334873, 333759, 329723,
      326945, 324039, 322149, 317568, 316700, 316543, 31289, 3126, 312572, 304287, 303897, 294666, 287734, 285809, 285185,
      281211, 277710, 271473, 264807, 264570, 260296, 255213, 254931, 25257, 250107, 243787, 239145, 224357, 222149, 221512,
      21450, 212397, 211749, 206825, 206485, 203975, 203648, 201832, 20168, 196091, 195986, 192185, 190618, 189856, 182310,
      178511, 167666, 163284, 160351, 159474, 158568, 156737, 152125, 152113, 149626, 148851, 148749, 141257, 14088, 138319,
      133903, 1311, 128586, 128088, 122694, 119262, 118791, 111243, 108708, 102781, 102274].indexOf(index)>=0){
        //console.log(word);
      return;
    }
    filter.data[index >> 3] |= (1 << (7 & index));
  },
  hash: (str) => {
    var hval = 9544;
    for ( var i = 0; i < str.length; ++i )
    {
      hval ^= str.charCodeAt(i);
      hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    return (hval >>> 0)%(size*8);
  }
};
module.exports = filter;

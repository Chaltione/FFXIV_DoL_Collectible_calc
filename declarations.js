var SkillConstants = [];
var ModConstants = [];

SkillConstants[0] = new SkillMod("Methodical Appraisal", 0, 10);
SkillConstants[0].minCollectability = 1;
SkillConstants[0].maxCollectability = 1;
SkillConstants[1] = new SkillMod("Instinctual Appraisal", 0, 15);
SkillConstants[1].minCollectability = 0.8;
SkillConstants[1].maxCollectability = 1.5;
SkillConstants[2] = new SkillMod("Impulsive Appraisal", 0, 10);
SkillConstants[2].minCollectability = 0.9;
SkillConstants[2].maxCollectability = 0.9;
ModConstants[0] = new SkillMod("Discerning Eye (200 GP)", 200, 0);
ModConstants[1] = new SkillMod("Utmost Caution (100 GP)", 100, -5);
ModConstants[2] = new SkillMod("Deep Breath (300 GP)", 300, 0);
ModConstants[3] = new SkillMod("Single Mind (200 GP)", 200, 0);

var NotSelected = "None";

var dummyP;
var selClass;
var selMAresult;
var selSkills = [];
var selModsA = [];
var selModsB = [];
var labels = [];
var butt;

var DEprocs = [];
var DBprocs = [];

var labelGP;
var labelWear;
var labelMin;
var labelMax;
var labelAverage;

var labelGatherRemain4;
var labelGatherRemain6;

var resultGP;
var resultWear;
var resultMin;
var resultMax;
var resultAverage;

var resultGatherRemain4;
var resultGatherRemain6;

var basepos;
var blockPadding;

var GPCost = [];
var WearCost = [];

var gatherAttemptsUsed;
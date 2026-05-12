// const { tryGetPreviewData } = require("next/dist/server/api-utils");

// All blurbs are from 2024; put in to reflect accurate data
// Correlation data depends on data being entered into the CSVs So wont work until andres done
// TODO update blurbs to match in slack ones
sota.sotaConfig.sections = [
  {
    slug: "general",
    name: "General",
    colors: [
      "#235085",
      "#1065a1",
      "#0b88c0",
      "#22a7d3",
      "#4ac2e5",
      "#8dd1e9",
      "#c6e6f3",
      "#e3f4fb",
      "#f0ffff",
    ],
    // blurb:
    //   "859 students responded - 74.4% of the student body participated in the survey. 35% of respondents have at least one immediate family member who is currently attending or has previously attended Andover.",
  },
  {
    slug: "politics",
    name: "Politics & Worldview",
    colors: [
      "#2C3278",
      "#5D5797",
      "#7D78AD",
      "#948EB9",
      "#A8A3C6",
      "#BFBDD5",
      "#ACA0C0",
      "#DFDBE7",
      "#CBC3E3",
    ],
    blurb:
      "Of respondents, 67.4% consider themselves feminists and 96.3% support the equality of the sexes. When correlated with gender identity, 45.4% of men and 83.1% of women consider themselves feminists. 55.6% believe that white people can experience racism, colloquially known as reverse racism. 85.9% believe Andover has a political leaning to the left. 46.0% said they have felt the need to censor themselves due to their political leaning. 68.0% believe people should always have the right to an abortion. 37.9% support legacy admissions at academic institutions.",
  },

  {
    slug: "school",
    name: "Education",
    colors: ["#812F54", "#AA7281", "#BF97A0", "#BF97A0", "#DCC5C3", "#EEE2E1", "#F5EDEC", "#FBF6F5"],
    blurb:
      "Of respondents, 58.7% currently hold student leadership positions at Andover. On average, respondents spend 3.54 hours on coursework daily. 30.2% of respondents think attending Andover negatively affects their chances of getting into a selective college. 76.9% said they participate in extracurriculars at least partially to increase their chances of getting into a selective college. 40.0% said they considered leaving Andover before graduating. 28.9% said Andover adequately accommodates students with disabilities, disorders, or impairments that affect their learning.",
  },
  {
    slug: "wellness",
    name: "Wellness",
    colors: [
      "#69B645",
      "#99CB89",
      "#98C970",
      "#B1D281",
      "#CEDFA6",
      "#E3EFCE",
      "#BAE5AE",
      "#84d9a9",
      "#88d1a8"
    ],
    blurb:
      "On average, respondents get 6.96 hours of sleep per night at Andover. 83.2% of respondents consider themselves happy at Andover, while 67.3% think that Andover students are generally happy. Respondents spend an average of 2.28 hours per day on social media. 83.5% of respondents believe faculty members care about their mental health and well-being. Only 7.2% of respondents said they always have enough time in their day-to-day life at Andover to adequately take care of themselves. 20.6% consider themselves neurodivergent, and 10.8% reported being diagnosed with ADD/ADHD."
  },

  {
    slug: "drugs",
    name: "Drugs & Alcohol",
    colors: [
      "#E77929",
      "#EB8D44",
      "#EFA15B",
      "#F1AB67",
      "#F3B572",
      "#F5BF88",
      "#F6C99E",
      "#F8D6B1",
      "#FADCBD",
      "#FBE2C8",
      "#FDEEDE",
      "#F8EADB",
      "#F3E6D7",
      "#E9DDD0",
    ],
    blurb:
      "Of respondents, 41.8% have consumed alcohol on and/or off campus. 13.2% consume drugs or alcohol at least several times a year on campus. 58.0% of respondents think that the recreational use of drugs or alcohol is normalized at Andover. 73.8% of respondents that have consumed alcohol think that the recreational use of drugs and alcohol is normalized at Andover. 8.0% of respondents said they have felt pressured by peers to consume drugs or alcohol on campus.",
  },
  {
    slug: "sex",
    name: "Sex",
    colors: [
      "#D5127D",
      "#DF5694",
      "#E680A9",
      "#ECA8C1",
      "#F5BAD1",
      "#F8D3DD",
      "#fbe7ec",
    ],
    blurb:
      "31.4% of respondents said they have engaged in some form of sexual activity — defined as digital, oral, anal, online, and vaginal sex. 50.1% of students feel comfortable consulting the Sykes Wellness Center for sex-related resources and care, an increase from 2025's 37.0%. Of the 31.4% of respondents who have engaged in sexual activity, 29.9% have done so while under the influence of drugs or alcohol.",
  },
  {
    slug: "campus",
    name: "Campus Culture",
    colors: ["#762670", "#945E98", "#A77FAD", "#BC98B9", "#D9C6D8"],
    blurb:
      "In Raynard Kington’s sixth year as Head of School (HOS), 27.4% of respondents believe that he connects with the student body. 84.2% of respondents think students should have greater input in the search for the next HOS. Of all respondents, 30.1% said that Andover’s anti-racism work is entirely sufficient. 63.4% of students think that Andover promotes ideological diversity in its selection of speakers for mandatory events.",
  },
  {
    slug: "diversity",
    name: "Community Diversity",
    colors: ["#279680", "#29AD97", "#78C4B1", "#AEDCCA", "#C8E7DD"],
    blurb:
      "At Andover, 24.5% of students believe that the Empathy, Balance, and Inclusion (EBI) curriculum is effective in helping students become better community members, an increase from 2025’s 11.2%. 52.5% of Black respondents said their race has affected their level of comfort in a classroom, compared to 32.1% of Latine/Hispanic respondents, 18.1% of Asian respondents, and 10.6% of White respondents. 66.1% of respondents think that day students are able to adequately integrate with boarding students.",
  },
  {
    slug: "discipline",
    name: "Discipline",
    colors: ["#B53432", "#C74F50", "#D47173", "#E4A8A6", "#F0D1CA"],
    blurb:
      "Of respondents, 10.8% said they use AI daily for academic assignments without explicit instructor permission. Only 8.7% of students completely understand the Pathways disciplinary system. 31.6% have cheated or plagiarized on an Andover assignment, test, quiz, or assessment. 46.9% of those who have received disciplinary consequences believe that the disciplinary system should be more lenient. When correlated with income, 82.4% of students whose net family income is less than $35,000 believe that the disciplinary system favors students from privileged backgrounds.",
  },

  // {
  //   slug: "senior",
  //   name: "Senior Sota",
  //   colors: [
  //     "#235085",
  //     "#1065a1",
  //     "#0b88c0",
  //     "#22a7d3",
  //     "#4ac2e5",
  //     "#7CB7D1",
  //     "#8dd1e9",
  //     "#c6e6f3",
  //     "#e3f4fb",
  //   ],
  // },
];

sota.setColors(sota.sotaConfig);
sota.setStyles(sota.sotaConfig);

// required only if you want to generate default layout containers. Can also specify directly through HTML and useselectors for graphs
sota.createSections(sota.sotaConfig);

// optional, render navbar based on sotaConfig.sections
// make sure you call createSections first!
sota.sotaNavbar(
  sota.sotaConfig,
  "",
  "assets/graphics/nameplate.png",
  false,
  "#intro"
);

// ONLINE
window.onload = () => {
  // -- GENERAL!! ---

  var margin = {
    top: 20,
    left: 30,
    bottom: 40,
    right: 10,
  };

  var largemargin = {
    top: 20,
    left: 50,
    bottom: 40,
    right: 15,
  }
  sota.bigNumber({
    section: "general",
    number: "889",
    title: "",
    subtitle: "total students responded.",
    // 2025
  });

  sota.bigNumber({
    section: "general",
    number: "76.0%",
    title: "",
    subtitle: "of the student body participated in this survey.",
    // 2025
  });

  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/3-boarding",
    title: "Boarding vs. Day Students",
    subtitle: "What are you enrolled as?",
    // 2025!
  });

  sota.bigNumber({
    section: "general",
    number: "180",
    title: "",
    subtitle: "students responded from the Class of 2029.",
    // 2025
  });
  sota.bigNumber({
    section: "general",
    number: "217",
    title: "",
    subtitle: "students responded from the Class of 2028.",
    // 2025
  });
  sota.bigNumber({
    section: "general",
    number: "216",
    title: "",
    subtitle: "students responded from the Class of 2027.",
    // 2025
  });

  sota.bigNumber({
    section: "general",
    number: "191",
    title: "",
    subtitle: "students responded from the Class of 2026.",
    // 2025
  });


  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/1-class",
    totalResp: 865,
    displayPercentage: true,
    sorted: false,
    // shapeFile: "assets/svgs/graduationcap",
    // shapeFile: "assets/svgs/graduationcap",
    // shapeHeight: 100,
    title: "WHAT CLASS ARE YOU IN?",
    subtitle: "Editor’s note: Seven students did not select a class year.",
    // 2025!!
  });

  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/cluster",
    sorted: false,
    title: "Student Clusters",
    subtitle: "Which cluster are you affiliated with?",
    margin: margin,
    // 2025
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/time-at-andover-general",
    totalResp: 851,
    displayPercentage: true,
    title: "Time at Andover",
    subtitle:
      "How long have you attended Andover? (e.g. if you are currently a two-year lower, answer “2 years”) If at any point you took a leave of absence, round to the nearest whole year.",
    // 2025!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/3-repeat-grade",
    totalResp: 865,
    displayPercentage: true,
    title: "Repeat Grade",
    subtitle: "Have you repeated a grade at Andover?",
    // 2025!
  });

  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/region",
    sorted: false,
    title: "Geographical Distribution",
    subtitle: "What region are you from?",
    // 2025
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/7-international-continent",
    sorted: false,
    title: "Continents",
    subtitle:
      "If you are an international student, what continent are you from?",
    // 2025
  });

  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/6-community_type",
    sorted: false,
    title: "Urban vs. Rural",
    subtitle: "What type of community do you live in?",
    // 2025!!
  });

  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/US-residential",
    sorted: false,
    title: "U.S. Residence",
    subtitle:
      "If you live in the United States of America, are you a citizen and/or permanent resident of the U.S.?",
    // 2025!!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/9-guardian-residence",
    totalResp: 850,
    displayPercentage: true,
    title: "Parent and Guardian Residence",
    subtitle:
      "If you live in the United States of America, how many of your guardian(s) are citizens and/or permanent residents of the U.S.?",
    // 2025!!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/9-parents_college",
    totalResp: 873,
    displayPercentage: true,
    title: "HOW MANY OF YOUR PARENTS GRADUATED FROM COLLEGE?",
    // 2025!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/11-familialsituation",
    totalResp: 867,
    displayPercentage: true,
    title: "Which of these describe your familial situation?",
    // 2025!
  });

  sota.bigNumber({
    section: "general",
    dataFile: "assets/data/general/12-legacy",
    number: "30.0%",
    title: "Legacy",
    subtitle:
      "of respondents have at least one family member who is currently attending or has previously attended Andover.",
    // 2025!!
  });

  sota.stackedColumnChart({
    section: "general",
    dataFile: "assets/data/general/legacyXincome",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    showLegend: false,
    title: "Legacy and Income",
    subtitle:
      "Whether or not respondents had at least one immediate family member who was attending or has previously attended Andover, and their income.",
    // 2025
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/13-sex",
    totalResp: 865,
    displayPercentage: true,
    title: "What is your assigned sex at birth?",
    // 2025!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/14-gender",
    totalResp: 866,
    displayPercentage: true,
    title: "WHAT IS YOUR GENDER IDENTITY?",
    // 2025!!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/15-pronoun",
    totalResp: 895,
    displayPercentage: true,
    title: "What are your preferred gender pronouns?",
    subtitle:
      "Editor’s note: Respondents were able to select multiple responses.",
    // 2025!!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/16-sexual_orientation",
    totalResp: 895,
    displayPercentage: true,
    title: "What is your sexual orientation?",
    // 2025!!
  });

  sota.stackedBarChart({
    section: "general",
    dataFile: "assets/data/general/identityXorientation",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    showLegend: false,
    title: "Sexual Orientation & Gender Identity",
    subtitle:
      "The respondents' sexual orientation compared to their gender identity. Editor’s Note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary,” and “Other” gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2025
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/17-romantic_orientation",
    totalResp: 905,
    displayPercentage: true,
    title: "What is your romantic orientation?",
    // 2025!
  });

  sota.columnChart({
    section: "general",
    dataFile: "assets/data/general/18-race",
    totalResp: 847,
    title: "What is your race?",
    subtitle:
      "Editor’s Note: Respondents were given the option to select more than one answer if applicable.",
    // 2025!!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/19-ethnicity",
    totalResp: 847,
    title: "What is your ethnicity?",
    subtitle:
      "Editor’s Note: Respondents were given the option to select more than one answer if applicable.",
    // 2025!!
  });

  // sota.stackedBarChart({
  //     section: "general",
  //     dataFile: "assets/data/general/sexual_orientationXgender",
  //     labelStyle: "onBar",
  //     groupLabelStyle: "onBar",
  //     showLegend: true,
  //     title: "GENDER IDENTITY AND SEXUAL ORIENTATION",
  //     subtitle: "Editor’s Note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, nonbinary, and other gender identities have been removed in an effort to protect the complete anonymity of these respondents."
  // })

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/20-religion",
    totalResp: 859,
    displayPercentage: true,
    title: "With which religion/faith system do you currently identify with?",
    subtitle:
      "Editor's Note: Respondents were given the option to select more than one answer if applicable.",
    // 2025!!
  });

  sota.barChart({
    section: "general",
    dataFile: "assets/data/general/21-perceived-socioeconomic",
    totalResp: 859,
    displayPercentage: true,
    title: "Socioeconomic Status",
    subtitle: "What is your perceived socioeconomic status?",
    // 2025
  });

  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/22-income",
    totalResp: 859,
    sorted: false,
    title: "Net Income",
    subtitle: "What is your net family income?",
    margin: margin,
    // 2025
  });

  sota.stackedColumnChart({
    section: "general",
    dataFile: "assets/data/general/socioeconomicXincome0",
    labelStyle: "onBar",
    inputIsPercentage: true,
    groupLabelStyle: "onBar",
    showLegend: false,
    title: "Perceived SEC & Income",
    subtitle:
      "Perceived socioeconomic class compared to income of respondents.",
    // 2025!!
  }); //better if 2 pie charts

  // sota.stackedBarChart({
  //   section: "general",
  //   dataFile: "assets/data/general/socioeconomicXgrade",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   showLegend: false,
  //   title: "Income & Repeating Grade",
  //   subtitle: "Net income compared to respondents who have repeated grades.",
  //   not 2025
  // }); //better if 2 pie charts

  // sota.stackedBarChart({
  //   section: "general",
  //   dataFile: "assets/data/general/socioeconomicXgrade",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   showLegend: false,
  //   title: "Income & Repeating Grade",
  //   subtitle: "Net income compared to respondents who have repeated grades.",
  //   // 2024!!
  // }); //better if 2 pie charts

  sota.columnChart({
    section: "general",
    dataFile: "assets/data/general/23-financial_aid",
    totalResp: 877,
    title: "Financial Aid",
    subtitle: "Are you on any form of financial aid?",
    // 2025
  });

  sota.bigNumber({
    section: "general",
    number: "43.4%",
    title: "Financial aid",
    subtitle: "of respondents are on financial aid provided by Andover.",
    // 2025
  });

  sota.pieChart({
    section: "general",
    dataFile: "assets/data/general/varsity",
    // shapeFile: "assets/svgs/varsityjacket",
    title: "Varsity Athletics",
    subtitle: "Are you a varsity athlete?",
    // 2025 
  });

  sota.stackedBarChart({
    section: "general",
    dataFile: "assets/data/general/incomeXvarsity",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: false,
    title: "Income & Varsity",
    subtitle: "Net income compared to respondents who are varsity athletes.",
    // 2025!!
  }); //better if 2 pie charts

  sota.stackedBarChart({
    section: "general",
    dataFile: "assets/data/general/varsityXrace",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    showLegend: false,
    title: "Varsity & Race",
    subtitle:
      "Races of respondents who are Varsity Athletes. Editor's Note: Not all races were included due to the small number of responses in those categories.",
    // 2025!
  });

  //  sota.pieChart({
  //    section: "general",
  //    dataFile: "assets/data/politics/incarcerated",
  //    totalResp: 882,
  //    title: "INCARCERATION",
  //    subtitle: "Do you personally know someone who has been incarcerated?",
  //    shapeFile: "assets/svgs/handcuff",
  // 2023!!
  // });

  // --- POLITICS!! --

  sota.barChart({
    section: "politics",
    dataFile: "assets/data/politics/40-dei",
    totalResp: 821,
    // shapeFile: "assets/svgs/pill-politics",
    sorted: false,
    title: "DEI Support",
    subtitle: "Do you support Diversity, Equity and Inclusion (DEI) programs in the workplace and educational institutions — “a set of values and related policies and practices focused on establishing a group culture of equitable and inclusive treatment and on attracting and retaining a diverse group of participants, including people who have historically been excluded or discriminated against” (Merriam-Webster Dictionary)?"
    // 2025
  })

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/24-political_affiliation",
    totalResp: 821,
    sorted: false,
    title: "Political Affiliation",
    subtitle: "What is your political leaning?",
    // 2025
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/politicalparty",
    totalResp: 821,
    sorted: false,
    title: "Political Party",
    subtitle: "Do you identify with a United States political party?",
    // 2025
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/affiliationXgender",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Gender & Affiliation",
    subtitle:
      "Gender makeup of respondents correlated with their political affliliation. Editor’s Note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary,” and “Other” gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2025
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/leadershipXaffiliation",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Leadership & Affiliation",
    subtitle:
      "Respondents who are a student leader correlated with their political affliliation.",
    // 2025 
  });
  // sota.stackedBarChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/affiliationXvarsity",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   displayPercentage: true,
  //   inputIsPercentage: false,
  //   sorted: false,
  //   showLegend: false,
  //   title: "Varsity & Affiliation",
  //   subtitle:
  //     "Respondents who are varsity athletes correlated with their political affliliation.",
  //   // 2023!
  // });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/25-changingbeliefs",
    totalResp: 818,
    sorted: false,
    title: "Changing Beliefs",
    subtitle: "Have your political beliefs changed in the past year?",
    // 2025
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/affiliationXchange",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Affiliation & Change",
    subtitle:
      "Whether respondents did or did not change beliefs by their political affiliations.",
    // 2025
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/affiliationXcurrent",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Affiliation & Current Event",
    subtitle:
      "Respondents knowledge of current events correlated with their political affiliation",
    // 2025
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/andover-leaning",
    totalResp: 820,
    sorted: false,
    title: "Andover's Politics",
    subtitle: "Do you think the Andover community has a political leaning?",
    margin: margin,
    // 2025
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/27-censorship",
    title: "Self-Censorship",
    // shapeFile: "assets/svgs/pill-politics",
    totalResp: 819,
    subtitle:
      "While at Andover, have you ever felt the need to censor yourself due to your political leaning?",
    // 2025!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/affiliationXcensorship",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Affiliation & Censorship",
    subtitle:
      "Whether respondents felt the need to censor themselves due to their political affiliations.",
    // 2025!
  });

  sota.barChart({
    section: "politics",
    dataFile: "assets/data/politics/28-informed",
    sorted: false,
    title:
      "How informed do you believe you are about politics and/or current events?",
    // 2025!
  });

  sota.barChart({
    section: "politics",
    dataFile: "assets/data/politics/30-news_sources",
    totalResp: 850,
    displayPercentage: true,
    title: "Staying Informed",
    subtitle: "How do you get your news?",
    // 2023!!
  });

  sota.barChart({
    section: "politics",
    dataFile: "assets/data/politics/29-news",
    totalResp: 850,
    displayPercentage: true,
    title: "Getting Information",
    subtitle: "Where do you get your news?",
    // 2025!
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/31-affirmative_action",
    title: "Affirmative Action",
    subtitle: "Do you support affirmative action in academic institutions?",
    //2025
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/affirmative_actionXclass",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Affirmative Action & Class Year",
    subtitle:
      "Whether respondents support affirmative action in institutions compared to class year.",
    // 2024!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/affirmative_actionXrace",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Affirmative Action & Race",
    subtitle:
      "Whether respondents support affirmative action in institutions compared to their race. Editor’s Note: Correlated statistics from respondents whose races are “Indigenous Peoples of the Americas” and “Native Hawaiian or Pacific Islander” have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2024!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/affirmative_actionXsec",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Affirmative Action & Socioeconomic Status",
    subtitle:
      "Whether respondents support affirmative action in institutions compared to their Socioeconomic Status.",
    // 2024!
  });

  sota.bigNumber({
    section: "politics",
    number: "55.6%",
    title: '"Reverse Racism"',
    subtitle:
      "of respondents believe that white people can experience racism, an increase from 2025's 53.0%.",
    // 2025
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/32-reverse_racism",
    title: '"Reverse Racism"',
    subtitle:
      'Do you believe that white people can experience racism (colloquially known as "reverse racism")? ',
    // 2025
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/reverse_racismXrace",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Reverse Racism & Race",
    subtitle:
      "Whether respondents believe in reverse racism compared to their race. Editor’s Note: Correlated statistics from respondents whose races are “Indigenous Peoples of the Americas” and “Native Hawaiian or Pacific Islander” have been removed in an effort to protect the complete anonymity of these respondents",
    // 2024!
  });

    sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/reverse_racismXyear",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Reverse Racism & Class Year",
    subtitle:
      "Whether respondents believe in reverse racism based on their class year.",
    // 2025 TODO
  });

    sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/legacysuppXlegacyandover",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Legacy at Andover & Support for Legacy Admissions",
    subtitle:
      "Whether students have legacy status at Andover correlated with support for legacy admissions.",
    // 2025!
  });

    sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/DEIXrace",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Support for DEI Correlated with Race",
    subtitle:
      "Percentage of students of each race that support DEI initiatives",
    // 2025!
  });

    sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/DEIXyear",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Support for DEI Correlated with Class Year",
    subtitle:
      "Percentage of students of each grade that support DEI initiatives",
    // 2025!
  });

      sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/DEIXAA",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Support for DEI Correlated with Support for Affirmative Action",
    subtitle:
      "Percentage of students who support affirmative action that support DEI initiatives",
    // 2025!
  });

  sota.columnChart({
    section: "politics",
    dataFile: "assets/data/politics/33-blm",
    showPercentage: true,
    title: "Black Lives Matter",
    subtitle:
      'Do you support the Black Lives Matter movement — "Black Lives Matter (BLM) is an international activist movement, originating in the African-American community, that campaigns against violence and systemic racism toward black people” (Black Lives Matter, 2015).',
    // 2023!!
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/equal-sexes",
    title: "Equality of the Sexes",
    subtitle:
      "Do you support “advocacy of equality of the sexes and the establishment of the political, social, and economic rights of the female sex” (Oxford English Dictionary)?",
    margin: margin,
    // 2023!!
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/advocacy-women",
    title: "Women's Rights",
    subtitle:
      "Do you support “the advocacy of women’s rights on the grounds of the equality of the sexes” (Oxford English Dictionary)?",
    margin: margin,
    // 2023!!
  });

  sota.bigNumber({
    section: "politics",
    number: "67.4%",
    title: "Feminism",
    subtitle: "of respondents consider themselves feminists. ",
    // 2025
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/35-feminist",
    labelStyle: "onBar",
    showLegend: true,
    title: "Feminism",
    subtitle: "Do you consider yourself a feminist?",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/feministXgender",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: false,
    sorted: false,
    showLegend: false,
    title: "Feminism & Gender Identity",
    subtitle:
      "Whether respondents identify as feminists compared to their gender identity. Editor’s Note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary,” and “Other” gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2024!
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/36-immigration",
    title: "Immigration & Border Security",
    subtitle:
      "Do you believe that the United States of America should increase border security?",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/37-abortion",
    labelStyle: "onBar",
    showLegend: true,
    title: "Abortion",
    subtitle:
      "Do you think that people should have the right to have an abortion?",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/abortionXgender",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: true,
    showLegend: true,
    title: "Abortion & Gender",
    subtitle:
      "Whether respondents believe people should have the right to have an abortion correlated to their gender identity. Editor’s Note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary,” and “Other” gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2024!!
  }); 

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/prison_reformXincarceration",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    showLegend: true,
    title: "Prison System",
    subtitle:
      "Do you believe that the current prison system in the United States of America should be altered?",
    // 2023!!
  });

  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/israel-palestine",
    showLegend: true,
    title: "Israel-Palestine Education",
    subtitle:
      "In October 2023, The Phillipian published an editorial calling for increased education on Israel and Palestine. Do you feel the school has provided adequate education on Israel and Palestine?",
    // 2023!!
  });

  sota.barChart({
    section: "politics",
    dataFile: "assets/data/politics/ceasefire",
    showLegend: true,
    groupLabelStyle:"aboveBar",
    labelStyle:"aboveBar",
    // margin: largemargin,
    title: "Israel-Palestine Ceasefire",
    subtitle:
      "Regarding an Israel and Gaza ceasefire, which of the following statements do you most agree with?",
    // 2025
  });

  sota.barChart({
    section: "politics",
    dataFile: "assets/data/politics/drug-decriminalization",
    // shapeFile: "assets/svgs/pill-politics",
    title: "Decriminalization of Drugs",
    subtitle:
      "Do you believe that drugs should be decriminalized in the United States of America?",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/drugsXincarceration",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: true,
    showLegend: true,
    title: "Decriminalization of Drugs & Incarceration",
    subtitle:
      "Whether respondents believe drugs should be decriminalized compared to whether they know an incarcerated person.",
    // 2025!
  });

  // sota.stackedBarChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/firearmXnet",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   displayPercentage: true,
  //   inputIsPercentage: true,
  //   showLegend: true,
  //   title: "Firearm ownership X net family income",
  //   subtitle:
  //     "Whether respondents own firearms correlated to net family income",
  //   // 2024!!
  // });

  // sota.stackedBarChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/firearmXaffiliation",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   displayPercentage: true,
  //   inputIsPercentage: true,
  //   showLegend: true,
  //   title: "Firearm ownership X Political Affiliation",
  //   subtitle:
  //     "Whether respondents own firearms correlated to political affiliation",
  //   // 2024!!
  // });

  // sota.stackedBarChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/firearmsXcommunity",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   displayPercentage: true,
  //   inputIsPercentage: true,
  //   showLegend: true,
  //   title: "Firearm ownership X Community Type",
  //   subtitle: "Whether respondents own firearms correlated to Community Type",
  //   // 2024!!
  // });

  sota.customBarChart({
    section: "politics",
    dataFile: "assets/data/politics/42-firearms",
    title: "Firearm Ownership",
    subtitle: "Does your family own firearms?",
    shapeFile: "assets/svgs/gun",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "politics",
    dataFile: "assets/data/politics/affiliationXguns",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: true,
    showLegend: true,
    title: "Firearms & Political Affiliation",
    subtitle:
      "Respondents who own firearms correlated with their political affiliation.",
    // 2023!!
  });

  // sota.bigNumber({
  //   section: "politics",
  //   number: "92.7%",
  //   title: "Gun Control",
  //   subtitle:
  //     "of respondents believe that gun control laws in the United States should be stricter.",
  //     // 2022!!
  // });

  sota.customBarChart({
    section: "politics",
    dataFile: "assets/data/politics/police",
    shapeFile: "assets/svgs/handcuff",
    title: "Police Reform",
    subtitle:
      "Do you believe that the current police system in the U.S. should be altered? ",
    // 2025; here so svg works
  });


  sota.pieChart({
    section: "politics",
    dataFile: "assets/data/politics/gun-reform",
    title: "Gun Reform",
    margin: margin,
    subtitle:
      "Do you think that gun control laws in the United States should change?",
    // 2023!!
  });

  // sota.stackedBarChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/politicsXgender",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   title: "Political Affiliation & Gender Identity",
  //   subtitle:
  //     "Editor’s Note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, nonbinary, and other gender identities have been removed in an effort to protect the complete anonymity of these respondents",
  //     // 2022!!
  // });

  // sota.stackedBarChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/censorshipXpolitics",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   showLegend: true,
  //   title: "Self-Censorship & Political Affiliation",
  //   subtitle:
  //     "Percentage of respondents who answered “Yes” to self-censorship question sorted by political affiliation.",
  //     // 2022!!
  // });

  // sota.stackedBarChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/feministXgender",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   showLegend: true,
  //   title: "Feminism By Gender Identity",
  //   subtitle:
  //     "Editor’s Note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, nonbinary, and other gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
  //     // 2022!!
  // });

  // sota.columnChart({
  //     section: "politics",
  //     dataFile: "assets/data/politics/top_5_news_sources",
  //     totalResp: 930,
  //     title: "Top 5 News Sources"

  // });

  // sota.stackedColumnChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/affirmative_actionXclass",
  //   title: "Do you support affirmative action in academic institutions?",
  //   subtitle: "Percentage by Class Year",
  //   // 2024!!
  // });

  // sota.stackedColumnChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/affirmative_actionXrace",
  //   title: "Do you support affirmative action in academic institutions?",
  //   subtitle: "Percentage by Race",
  //   // 2022!!
  // });

  // sota.stackedBarChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/affirmativeXgender",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   showLegend: true,
  //   title: "Affirmative Action Support By Gender Identity",
  //   subtitle:
  //     "Editor’s Note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, nonbinary, and other gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
  //     // 2022!!
  // });

  // sota.stackedColumnChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/abortionXgender",
  //   title:
  //     "Do you think that people should have the right to have an abortion?",
  //   subtitle: "By Gender Identity",
  //   // 2022!!
  // });

  // sota.pieChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/41-drug_regulation",
  //   title: "Drug Regulation",
  //   subtitle: "Do you support the legalization of marijuana?",
  //   // 2022!!
  // });

  // sota.bigNumber({
  //   section: "politics",
  //   number: "72.0%",
  //   subtitle:
  //     "of respondents who know someone who has been incarcerated believe drug use should be decriminalized.",
  //   // shapeFile:"assets/svgs/pill-politics"
  //   // 2022!!
  // });

  // sota.bigNumber({
  //   section: "politics",
  //   number: "5.91%",
  //   subtitle:
  //     "of respondents who do not know someone who has been incarcerated believe drug use should be decriminalized.",
  //   // 2022!!
  // });

  // sota.barChart({
  //   section: "politics",
  //   dataFile: "assets/data/politics/40-capital_punishment",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   showLegend: true,
  //   title: "Capital Punishment",
  //   subtitle: "Do you support the death penalty?",
  //   // 2022!!
  // });



  // --- CAMPUS CULTURE!! ----

  sota.bigNumber({
    section: "campus",
    number: "84.0%",
    title: "Cell Phone Policy",
    subtitle: "of respondents believe the cell-phone policy should be altered.",
    // 2026
  });

  sota.bigNumber({
    section: "campus",
    number: "16.8%",
    title: "Task Forces",
    subtitle: "of respondents said task forces are an effective way to incorporate student perspectives into school decision-making.",
    // 2026
  });

  sota.bigNumber({
    section: "campus",
    number: "84.2%",
    title: "HOS Search Student Input",
    subtitle: "of respondents think students should have greater input in the search for the next Head of School.",
    // 2026
  });

  sota.bigNumber({
    section: "campus",
    number: "70.9%",
    title: "School Spirit",
    subtitle: "of respondents believe that Andover students have school spirit.",
    // 2026
  });

  sota.bigNumber({
    section: "campus",
    number: "30.1%",
    title: "Anti-Racism",
    subtitle: "of respondents said Andover's anti-racism work is entirely sufficient.",
    // 2026
  });

  sota.bigNumber({
    section: "campus",
    number: "63.4%",
    title: "Ideological Diversity",
    subtitle: "of respondents think that Andover promotes ideological diversity in its selection of speakers for mandatory events.",
    // 2026
  });

  sota.barChart({
    section: "campus",
    dataFile: "assets/data/campus/128-ideologicaldiversity",
    title: "Ideological Diversity",
    subtitle:
      "Do you think the school promotes ideological diversity in its selection of speakers?",
    // 2026
  });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/ideologyXaffiliation",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Ideological Diversity & Political Affiliation",
    subtitle:
      "Respondents' opinions on whether Andover's speakers are diverse in ideologies correlated with their political affiliation.",
    // 2024!!
  });

  sota.pieChart({
    section: "campus",
    dataFile: "assets/data/campus/129-antiracismwork",
    title: "Anti-racist work",
    subtitle: "Do you think Andover’s anti-racist work is sufficient?",
    // 2024!!
  });

  // sota.stackedBarChart({
  //   section: "campus",
  //   dataFile: "assets/data/campus/antiracismXyear",
  //   sorted: false,
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   displayPercentage: true,
  //   title: "Anti-Racism & Class Year",
  //   subtitle:
  //     "Respondents' opinions on whether Andover's anti-racism work is sufficient correlated with their class year.",
  //   // 2023!!
  // });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/antiracismXaffiliation",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Anti-Racism & Political Affiliation",
    subtitle:
      "Respondents' opinions on whether Andover's anti-racism work is sufficient correlated with their political affiliation.",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/antiracismXrace",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Anti-Racism & Race",
    subtitle:
      "Respondents' opinions on whether Andover's anti-racism work is sufficient correlated with their race. Edtior's Note: Not all races were included due to the small number of responses in those categories.",
    // 2023!!
  });

  // sota.pieChart({
  //   section: "campus",
  //   dataFile: "assets/data/campus/130-indigenousday",
  //   title:
  //     'Do you think that Andover should have a "day on" for Indigenous People\'s Day?',
  //   // 2023!!
  // });

  // sota.pieChart({
  //   section: "campus",
  //   dataFile: "assets/data/campus/earthday",

  //   title: 'Do you think that Andover should have a "day on" for Earth Day?',
  //   // 2023!!
  // });


  sota.columnChart({
    section: "campus",
    dataFile: "assets/data/campus/125-dayson",
    showPercentage: true,
    title: "Days \"On\"",
    subtitle: "Which of the following days do you think Andover should have a “day on” for similar to MLK day)? Editor's note: Respondents were given the option to select more than one answer if applicable."
    // 2025!!
  })

  sota.pieChart({
    section: "campus",
    dataFile: "assets/data/campus/132-glorifyathletics",
    sorted: false,
    title:
      "Do you think that Andover prioritizes athletics (compared to music, art, robotics, etc.)?",
    // 2025!!
  });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/glorifyathleticsXvarsity",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Glorifying Athletics & Varisity Athletes",
    subtitle:
      "Respondents' opinions on whether Andover glorifies athletics correlated with whether they are a varsity athlete.",
    // 2023!!
  });

  sota.bigNumber({
    section: "campus",
    number: "46.3%",
    title: "Head of School Approval",
    subtitle:
      "of respondents approve of the work the Head of School is doing for students, a decrease from 2025's 55.6%.",
    // 2026
  });

  sota.pieChart({
    section: "campus",
    dataFile: "assets/data/campus/hos-approval",
    sorted: false,
    title: "Head of School Approval",
    subtitle:
      "Do you approve of the work the Head of School is doing for the students?",
    // 2025
  });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/hosXclassyear",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Head of School Approval & Class Year",
    subtitle:
      "Respondents' opinions on whether they support the work the Head of School is doing for the students correlated with their class year.",
    // 2023!!
  });
  
  sota.pieChart({
    section: "campus",
    dataFile: "assets/data/campus/hos-policy",
    sorted: false,
    title: "Head of School Policy",
    subtitle:
      "Do you support the Head of School’s new statement policy — “For Andover to issue a statement, the societal event must directly impact our education mission, and our voice should add value to public discourse” (From Raynard Kington’s email to the Andover community on February 27, 2024)?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/hospolicyXhosapproval",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Head of School Approval & Class Year",
    subtitle:
      "Respondents' opinions on whether they support the statement made by the Head of School correlated with whether they support the work the Head of School is doing for students.",
    // 2023!!
  });



  sota.pieChart({
    section: "campus",
    dataFile: "assets/data/campus/hos-connection",
    sorted: false,
    title: "HOS Student Connection",
    subtitle: "Do you think the Head of School connects with the student body?",
    // 2023!!
  });

  sota.barChart({
    section: "campus",
    dataFile: "assets/data/campus/taskforces",
    displayPercentage: true,
    title: "Task Forces",
    subtitle: "Do you think task forces are an effective way to incorporate student perspectives into school decision-making?",
    // 2026
  });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/hos-searchXyear",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    inputIsPercentage: true,
    displayPercentage: true,
    title: "HOS Search Student Input & Class Year",
    subtitle: "Whether respondents think students should have greater input in the search for the next Head of School correlated with their class year.",
    // 2026
  });

  sota.barChart({
    section: "campus",
    dataFile: "assets/data/campus/130-cellphoneReg",
    displayPercentage: true,
    title: "Cell Phone Policy",
    subtitle: "Do you believe Andover's Cell-Phone Policy should be altered?",
    // 2026
  });

  sota.barChart({
    section: "campus",
    dataFile: "assets/data/campus/129-school_spirit",
    totalResp: 865,
    displayPercentage: true,
    title: "School Spirit",
    subtitle: "Do you believe that Andover students have school spirit?",
    // 2026
  });

    sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/spiritXalchohol",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    inputIsPercentage: false,
    displayPercentage: true,
    title: "School Spirit & Alcohol",
    subtitle:
      "Respondents' opinions on whether Andover students have school spirit correlated with their drinking habits.",
    // 2025!!
  });

    sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/spiritXyear",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    inputIsPercentage: false,
    displayPercentage: true,
    title: "School Spirit & Class Year",
    subtitle:
      "Respondents' opinions on whether Andover students have school spirit correlated with their class year.",
    // 2025!!
  });
    sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/spiritXcluster",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    inputIsPercentage: false,
    displayPercentage: true,
    title: "School Spirit & Cluster",
    subtitle:
      "Respondents' opinions on whether Andover students have school spirit correlated with their cluster.",
    // 2025!!
  });
    sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/phonesXsocialmedia",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    inputIsPercentage: false,
    displayPercentage: true,
    title: "Opinions On Cell Phone Policy & Social Media Usage",
    subtitle:
      "Respondents' opinions on whether or not the school should enforce a cell phone policy correlated with their daily social media usage in hours.",
    // 2025!!
  });

  // sota.pieChart({
  //   section: "campus",
  //   dataFile: "assets/data/campus/134-environment_impact",
  //   sorted: false,
  //   title: "climate education",
  //   // pieRad: 100,
  //   margin: margin,
  //   subtitle:
  //     "Do you feel that environmental issues (global warming, water, and air pollution, etc.) directly impact your life?",
  //   // 2024!!
  // });

  sota.pieChart({
    section: "campus",
    dataFile: "assets/data/campus/135-combat_climate_change",
    sorted: false,
    title: "Climate change",
    subtitle:
      "Do you feel like Andover is doing enough to combat climate change?",
    // 2024!!
  });

  // sota.pieChart({
  //   section: "campus",
  //   dataFile: "assets/data/campus/136-divestfossilfuel",
  //   sorted: false,
  //   title:
  //     "Do you believe that Andover should divest from fossil fuel companies?",
  //   subtitle:
  //     'Divestment is the act of "taking money away from where you have invested it" (Oxford Dictionaries).',
  //   // 2024!!
  // });

  sota.stackedBarChart({
    section: "campus",
    dataFile: "assets/data/campus/divestXaffiliation",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Divestment & Political Affiliation",
    subtitle:
      "Respondents' opinions on Andover divesting from fossil fuels correlated with their political affiliation.",
    // 2023!!
  });

  //   sota.stackedColumnChart({
  //     section: "campus",
  //     dataFile: "assets/data/politics/reverse_racismXrace",
  //     showLegend: true,
  //     groupLabelStyle: "onBar",
  //     labelStyle: "onBar",
  //     title: "Reverse racism by race",
  //     subtitle: "Whether or not respondents believe that white people can experience racism (colloquially known as reverse racism) by race.",
  //   });

  // //   sota.barChart({
  // //     section: "campus",
  // //     dataFile: "assets/data/campus/carbon_footprint",
  // //     displayPercentage: true,
  // //     title: "carbon footprints",
  // //     subtitle:
  // //       "How often do you make conscious decisions to decrease your carbon footprint? A carbon footprint is “a measure of the carbon emissions of a particular individual, organization, or community” (Oxford Dictionary).",
  // //   });

  //   sota.pieChart({
  //     section: "campus",
  //     dataFile: "assets/data/campus/134-environment_impact",
  //     title:
  //       "Do you feel that environmental issues (global warming, water, and air pollution, etc.) directly impact your life?",
  //       // 2022!!
  //   });

  //   sota.stackedBarChart({
  //     section: "campus",
  //     dataFile: "assets/data/campus/divestXpolitical",
  //     showLegend: true,
  //     groupLabelStyle: "onBar",
  //     labelStyle: "onBar",
  //     title: "Fossil Fuels",
  //     subtitle:
  //       "Do you believe that Andover should divest from fossil fuel companies?",
  //       // 2022!!
  //   });

  //   sota.stackedBarChart({
  //     section: "campus",
  //     dataFile: "assets/data/campus/idea_diversityXpolitical",
  //     showLegend: true,
  //     groupLabelStyle: "onBar",
  //     labelStyle: "onBar",
  //     title: "ideological diversity by political affiliation",
  //     subtitle:
  //       "Do you think the school promotes ideological diversity in its selection of speakers?",
  //       // 2022!!
  //   });

  //   sota.stackedBarChart({
  //     section: "campus",
  //     dataFile: "assets/data/campus/antiracismXrace",
  //     showLegend: true,
  //     groupLabelStyle: "onBar",
  //     labelStyle: "onBar",
  //     title: "anti-racist work by race",
  //     subtitle: "Do you think Andover’s anti-racist work is sufficient?",
  //     // 2022!!
  //   });

  //   sota.stackedColumnChart({
  //     section: "campus",
  //     dataFile: "assets/data/campus/antiracismXclass",
  //     showLegend: true,
  //     groupLabelStyle: "onBar",
  //     labelStyle: "onBar",
  //     title: "anti-racist work by class year",
  //     subtitle: "Do you think Andover’s anti-racist work is sufficient?",
  //     // 2022!!
  //   });

  // //   sota.stackedBarChart({
  // //     section: "campus",
  // //     dataFile: "assets/data/campus/antiracismtaskforce",
  // //     showLegend: true,
  // //     labelStyle: "onBar",
  // //     title: "Anti-racism task force",
  // //     subtitle:
  // //       "Do you feel the creation of the Anti-Racism Task Force was a productive choice in making Andover a more racially equitable, inclusive, and just community?",
  // //   });

  //   sota.pieChart({
  //     section: "campus",
  //     dataFile: "assets/data/campus/133-shuman",
  //     title:
  //       "Do you think that the Shuman Office of Admissions accurately presents the school?",
  //       // 2022!!
  //   });

  //   sota.pieChart({
  //     section: "campus",
  //     dataFile: "assets/data/campus/139-supportive",
  //     title: "Support from faculty",
  //     subtitle:
  //       "Which of the faculty/staff members in your life do you feel are supportive of a diverse range of students? Check all that apply.",
  //       // 2022!!

  //   });

  //   // sota.pieChart({
  //   //     section: "campus",
  //   //     dataFile: "assets/data/campus/combat_climate",
  //   //     title: "Do you feel like Andover is doing enough to combat climate change?"
  //   // });

  //   // sota.stackedBarChart({
  //   //     section: "campus",
  //   //     dataFile: "assets/data/campus/antiracismXclass",
  //   //     showLegend: true,
  //   //     groupLabelStyle: "onBar",
  //   //     labelStyle: "onBar",
  //   //     title: "Do you feel the creation of the Anti-Racism Task Force was a productive choice in making Andover a more racially equitable, inclusive, and just community? x class "
  //   //     });

  //   sota.stackedBarChart({
  //     section: "campus",
  //     dataFile: "assets/data/campus/prioritizeXvarsity",
  //     showLegend: true,
  //     groupLabelStyle: "onBar",
  //     labelStyle: "onBar",
  //     title:
  //       "Do you think that Andover prioritizes athletics(compared to music, art, robotics, etc.)?",
  //       // 2022!!
  //   });

  // --- SCHOOL!! ---
  sota.bigNumber({
    section: "school",
    number: "5.35",
    title: "Overall Average GPA",
    subtitle:
      "average rounded Winter Term GPA, a 0.05 decrease from 2025 (last year).",
    // 2023!!
  });

  sota.lineGraph({
    section: "school",
    dataFile: "assets/data/school/111-gpa",
    maxVal: 156,
    title: "GPA",
    subtitle: "What was your rounded Winter 2025-2026 GPA?",
    // 2023!!
  });

  sota.lineGraph({
    section: "school",
    dataFile: "assets/data/school/GPA2018",
    maxVal: 6.0,
    minVal: 5.0,
    title: "Average GPA Since 2018",
    subtitle:
      "Editor's note: All GPA values above are from previous State of the Academy surveys.",
    // 2023!!
  });

  // GPA by gender bigNumber removed — 2026 PDF does not report specific averages by gender

 sota.stackedBarChart({
    section: "school",
    dataFile: "assets/data/school/gpaXgender",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "GPA and Gender",
    subtitle: "GPA distribution for Man and Woman respondents. Editor’s Note: Only data from the GPA range of 5.0 - 6.0 is used. Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary,” and “Other” gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "school",
    dataFile: "assets/data/school/GPAxsleep",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "GPA and Sleep",
    // 2023!! TODO correlation
  });

    sota.stackedBarChart({
    section: "school",
    dataFile: "assets/data/school/GPAXrace",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "GPA and Race",

    // 2025!! 
  });

  sota.multiLineGraph({
    section: "school",
    dataFile: "assets/data/school/GPAxvarsity",
    displayPercentage: true,
    maxVal: 24,
    minWal: 0,
    title: "GPA and Varsity Athlete",
    // 2023!!
  });

  sota.barChart({
    section: "school",
    dataFile: "assets/data/school/112-4_good",
    // totalResp: 854,
    title: "Grading Scale",
    subtitle: 'Do you think a "4" is a good grade?',
    // 2025!!
  });

  sota.stackedColumnChart({
    section: "school",
    dataFile: "assets/data/school/collegexclassyear",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Andover and College",
    subtitle:
      "Do you think attending Andover affects your chances of attending a selective college?",
    // 2023!!
  });

  sota.bigNumber({
    section: "school",
    number: "3.54",
    title: "Time Spent on Coursework",
    subtitle:
      "average hours spent on coursework daily, a decrease from 2025 (last year).",
    // 2025
  });

  sota.lineGraph({
    section: "school",
    dataFile: "assets/data/school/113-hours_on_coursework",
    minVal: 2,
    maxVal: 259,
    title: "Hours on coursework",
    subtitle:
      "How many hours do you spend on coursework outside of class each day?",
    // 2023! todo check
  });

  sota.barChart({
    section: "school",
    dataFile: "assets/data/school/114-department_disparity",
    title: "Disparity between teachers",
    subtitle:
      "In which department(s), if any, is/are there an unreasonable grading disparity between teachers?",
    // 2023!!
  });

  sota.pieChart({
    section: "school",
    dataFile: "assets/data/school/115-switch_teacher",
    sorted: false,
    title: "Switching Teachers",
    subtitle:
      "Have you ever switched or attempted to switch teachers within the same course in order to attain a better grade?",
    // 2023!!
  });

  sota.pieChart({
    section: "school",
    dataFile: "assets/data/school/117-student_leader",
    sorted: false,
    title: "Student Leadership",
    subtitle:
      "Are you currently a student leader (prefect, proctor, DSM, EBI Senior, Cluster or School Co-President) on campus?",
    // 2023!!
  });

  sota.pieChart({
    section: "school",
    dataFile: "assets/data/school/leadership-positions",
    sorted: false,
    title: "Leadership Positions",
    subtitle: "How many leadership positions do you hold on campus?",
    margin: margin,
    // 2023!!
  });

  sota.barChart({
    section: "school",
    dataFile: "assets/data/school/119-extracurriculars",
    showLegend: true,
    title: "Extracurriculars",
    subtitle:
      "Do you participate in any extracurriculars because you think they will increase your chances of getting into a selective college?",
    // 2023!!
  });

  sota.barChart({
    section: "school",
    dataFile: "assets/data/school/120-leaving",
    showLegend: true,
    title: "Leaving Andover",
    subtitle:
      "Have you ever considered leaving Andover permanently or temporarily?",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "school",
    dataFile: "assets/data/school/leavingxclassyear",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Leaving Andover by Class Year",
    subtitle:
      "Have you ever considered leaving Andover permanently or temporarily?",
    // 2023!!
  });

  sota.pieChart({
    section: "school",
    dataFile: "assets/data/school/121-teacher_care",
    totalResp: 763,
    sorted: false,
    title: "Teacher Support",
    subtitle:
      "Do you think that the majority of your teachers care about your health and well-being?",
    // 2025
  });

  sota.pieChart({
    section: "school",
    dataFile: "assets/data/school/122-children",
    sorted: false,
    showLegend: true,
    title: "Would you want your children to attend andover?",
    // 2023!!
  });

  sota.barChart({
    section: "school",
    dataFile: "assets/data/school/123-come_to_andover",
    title:
      "In retrospect, would you still make the decision to come to andover?",
    // 2023!!
  });

  sota.pieChart({
    section: "school",
    dataFile: "assets/data/school/124-family_relationship",
    sorted: false,
    showLegend: true,
    title: "Andover and family",
    subtitle:
      "Has attending Andover affected your relationship with your family?",
    // 2023!!
  });

  // sota.pieChart({
  //   section: "school",
  //   dataFile: "assets/data/school/disability",
  //   sorted: false,
  //   showLegend: true,
  //   title: "Learning Disabilities",
  //   subtitle: "Do you have a disability that affects your learning?",
  //   margin: margin,
  //   // 2023!!
  // });

  // sota.bigNumber({
  //   section: "school",
  //   number: "10.7%",
  //   title: "Learning Disability",
  //   subtitle:
  //     "of respondents have a disability/disorder/impairment that affects their learning.",
  //   // 2025 not
  // });

  sota.pieChart({
    section: "school",
    dataFile: "assets/data/school/accomodations",
    sorted: false,
    showLegend: true,
    title: "Learning Accomodations",
    margin: margin,
    subtitle: "Do you currently have learning accommodations at Andover?",
    // 2023!!
  });

  // sota.pieChart({
  //   section: "school",
  //   dataFile: "assets/data/school/andover-accomodations",
  //   sorted: false,
  //   showLegend: true,
  //   title: "Learning Accomodations",
  //   subtitle:
  //     "Do you think Andover adequately accommodates students with disabilities that affect their learning?",
  //   // 2025 see correlation below
  // });

  sota.stackedBarChart({
    section: "school",
    dataFile: "assets/data/school/learning_disabilityXaccomodation",
    labelStyle: "onBar",
    displayPercentage: true,
    groupLabelStyle: "onBar",
    showLegend: false,
    title:
      "Do you think Andover adequately accommodates students with disabilities that affect their learning?",
      // 2025!
  });

  // sota.multiLineGraph({
  //   section: "school",
  //   dataFile: "assets/data/school/gpaXgender",
  //   displayPercentage: true,
  //   maxVal: 24,
  //   minVal: 0,
  //   title: "G.P.A. and Gender",
  //   // 2022!!
  // });

  // sota.lineGraph({
  //   section: "school",
  //   dataFile: "assets/data/school/gpa2017",
  //   maxVal: 6.0,
  //   minVal: 5.0,
  //   title: "Average G.P.A Since 2017",
  //   subtitle:
  //     "Editor's note: this question uses data from the 2017 to 2022 State of the Academy surveys.",
  //     // 2022!!
  // });

  // sota.stackedColumnChart({
  //   section: "school",
  //   dataFile: "assets/data/school/collegeXclass",
  //   title: "Andover College",
  //   subtitle:
  //     "Do you think attending Andover affets your chances of attending a selective college?",
  //     // 2022!!
  // });

  // sota.bigNumber({
  //   section: "school",
  //   number: "26.2%",
  //   title: "Teacher Care",
  //   subtitle: "of respondents do not think the majority of their teachers care about their health and well-being.",
  //   // 2022!!
  // });

  // sota.pieChart({
  //   section: "school",
  //   dataFile: "assets/data/school/board_member",
  //   sorted: false,
  //   title: "Are you a board member of a club on campus?",
  // });

  // sota.pieChart({
  //   section: "school",
  //   dataFile: "assets/data/school/character",
  //   sorted: false,
  //   title: "Andover and Self",
  //   subtitle:
  //     "Generally speaking, has attending Andover significantly affected your character?",
  // });

  // --- DISCIPLINE!! ---

  sota.bigNumber({
    section: "discipline",
    number: "15.2%",
    title: "Major Discipline Violation",
    subtitle:
      "of respondents have committed a major disciplinary violation without being caught.",
    margin: margin,
    // 2026
  });

  sota.bigNumber({
    section: "discipline",
    number: "10.8%",
    title: "AI Daily Usage",
    subtitle:
      "of respondents said they use AI daily for academic assignments without explicit instructor permission.",
    // 2026
  });

  // sota.pieChart({
  //   section: "discipline",
  //   dataFile: "assets/data/discipline/148-CCCDC",
  //   sorted: false,
  //   title: "Have you ever sat before a ccc or a dc?",
  //   // 2022!!
  // });

  sota.columnChart({
    section: "discipline",
    dataFile: "assets/data/discipline/149-consequences",
    totalResp: 733,
    margin: margin,
    title:
      "Which of the following disciplinary consequences have you recieved?",
    // 2024!!
  });
  
  sota.stackedBarChart({
    section: "discipline",
    dataFile: "assets/data/discipline/residentialXrecipients",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Discipline System & Residential Status",
    subtitle:
      "Respondents' residential statuses correlated with any received disciplinary action.",
    // 2025
  });

  sota.stackedBarChart({
    section: "discipline",
    dataFile: "assets/data/discipline/systemXrecipients",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Discipline System & Recipients",
    subtitle:
      "Whether respondents believe the disciplinary system is effective correlated what disciplinary responses they have received.",
    // 2025
  });



  sota.barChart({
    section: "discipline",
    dataFile: "assets/data/discipline/effectiveXconsequences",
    totalResp: 735,
    displayPercentage: true,
    title: "Disciplinary System Effectiveness",
    subtitle:
      "Do you think that the new disciplinary system effectively responds to students who are caught breaking school rules?",
    // 2024!!
  });

  sota.pieChart({
    section: "discipline",
    dataFile: "assets/data/discipline/159-privilege-background",
    sorted: false,
    title: "Privilege",
    subtitle:
      "Do you think that the school's disciplinary system favors students of privileged backgrounds?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "discipline",
    dataFile: "assets/data/discipline/privilegeXdiscipline",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Privilege & Discipline",
    subtitle:
      "Whether respondents believe the disciplinary process favors those from privileged backgrounds correlated with their income.",
    // 2025!
  });

  // sota.stackedBarChart({
  //   section: "discipline",
  //   dataFile: "assets/data/discipline/major_offensesXboarding",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   title: "Boarding vs. day students and major offenses",
  //   subtitle: "Have you ever committed a major offense without being caught?",
  // });

  // sota.bigNumber({
  //   section: "discipline",
  //   number: "33.0%",
  //   title: "Concerning Contraband",
  //   subtitle:
  //     "of respondents think that the administration should have the right to search an entire dorm for contraband material.",
  //     // 2022!!
  // });

  sota.pieChart({
    section: "discipline",
    dataFile: "assets/data/discipline/152-cheated",
    sorted: false,
    title: "Cheating",
    subtitle:
      "Have you ever cheated on any tests, quizzes, or in-class assessments while at Andover?",
    // 2024!!
  });

  // sota.bigNumber({
  //   section: "discipline",
  //   number: "60.5%",
  //   title: "Room Visits—Have you ever had an illegal room visit: \"visiting the dormitory room of or inviting an individual from outside your dormitory to your dorm room?\"",
  //   subtitle:
  //     "of respondents had illegal visitations to their dorms.",
  //   // 2022!!
  // });

  // sota.bigNumber({
  //   section: "discipline",
  //   number: "68.3%",
  //   title: "Room Visits",
  //   subtitle:
  //     "of respondents do not agree with this year's changes.",
  //   // 2022!!
  // });

  // sota.stackedColumnChart({
  //   section: "discipline",
  //   dataFile: "assets/data/discipline/cheatedXclass",
  //   title: "Cheating by Class",
  //   subtitle:
  //     "Have you ever cheated on any tests, quizzes, or in-class assessments while at Andover?",
  //   // 2023!!
  // });

  sota.stackedColumnChart({
    section: "discipline",
    dataFile: "assets/data/discipline/integrityXclassyear",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Academic Integrity & Class Year",
    subtitle:
      "Whether respondents have committed academic integrity violations correlated with their class year.",
    // 2025!!
  });

  sota.barChart({
    section: "discipline",
    dataFile: "assets/data/discipline/147-understand_processes",
    totalResp: 736,
    displayPercentage: true,
    title: "Student Understanding",
    subtitle: "Do you understand the new disciplinary system, Pathways?",
    // 2025!!
  });

  

  sota.stackedBarChart({
    section: "discipline",
    dataFile: "assets/data/discipline/understandXclassyear",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Understanding the Process & Residential Status",
    subtitle:
      "Whether respondents understand the new disciplinary process correlated with their class year.",
    // 2025
  });


  sota.stackedBarChart({
    section: "discipline",
    dataFile: "assets/data/discipline/understandXresidential",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Understanding the Process & Residential Status",
    subtitle:
      "Whether respondents understand the new disciplinary process correlated with their residential status.",
    // 2023!! TODO
  });

  // sota.stackedBarChart({
  //   section: "discipline",
  //   dataFile: "assets/data/discipline/understandXclassyear",
  //   sorted: false,
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   displayPercentage: true,
  //   title: "Understanding the Process & Class Year",
  //   subtitle:
  //     "Whether respondents understand the new disciplinary process correlated with their class year.",
  //   // 2023!!
  // });
  // sota.pieChart({
  //   section: "discipline",
  //   dataFile: "assets/data/discipline/160-Level3-caught",
  //   sorted: false,
  //   title: "Level 3 Violation",
  //   margin: margin,
  //   subtitle:
  //     "Have you ever committed a Level 3 violation without being caught? (Level 3 violations include, but are not limited to: selling or providing drugs/alcohol/nicotine, bullying, hazing, major destruction of property, sexual misconduct)",
  //   // 2024!!
  // });

  sota.pieChart({
    section: "discipline",
    dataFile: "assets/data/discipline/161-Roomvisit",
    sorted: false,
    title: "Room Visit",
    margin: margin,
    subtitle:
      "Have you ever had a room visit? — Visiting the dormitory room of or inviting an individual from outside your dormitory to your dorm room.",
    // 2024!!
  });

  sota.barChart({
    section: "discipline",
    dataFile: "assets/data/discipline/162-artificialintelligence",
    showPercentage: false,
    title: "Artificial Intelligence",
    margin: margin,
    subtitle:
      "How often do you use AI for an academic assignment without explicit permission from the instructor?",
    // 2025!!
  });

  sota.stackedBarChart({
    section: "discipline",
    dataFile: "assets/data/discipline/AIXclassyear",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Use of Artificial Intelligence & Class Year",
    subtitle:
      "How often respondents have ever used Artificial Intelligence without permission correlated with their class year.",
    // 2025!!
  });

  sota.stackedBarChart({
    section: "discipline",
    dataFile: "assets/data/discipline/AIXGPA",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Use of Artificial Intelligence & GPA",
    subtitle:
      "How often respondents use Artificial Intelligence correlated with their Winter 2024-2025 GPA.",
    // 2025!
  });

  // sota.stackedBarChart({
  //   section: "discipline",
  //   dataFile: "assets/data/discipline/153-plagiarized",
  //   sorted: false,
  //   title: "Plagiarizing",
  //   subtitle: "Have you ever plagiarized while at Andover?",
  //   // 2022!!
  // });

  // sota.stackedBarChart({
  //   section: "discipline",
  //   dataFile: "assets/data/discipline/favors_privilegedXincome",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   showLegend: false,
  //   title: "The dc system, privilege, and net family income",
  //   subtitle:
  //     "Do you think that the school's disciplinary system favors students of privileged backgrounds?",
  // });

  // --- CAMPUS DIVERSITY!! ---

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/138-faculty_diversity",
    totalResp: 714,
    displayPercentage: true,
    title: "Faculty Diversity",
    subtitle: "Do you think the faculty is lacking in diversity in...?",
    // 2024!!
  });

  // sota.stackedBarChart({
  //   section: "diversity",
  //   dataFile: "assets/data/diversity/faculty_diversityXgender",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   showLegend: true,
  //   title: "Faculty Diversity By Gender",
  //   subtitle: "Do you think the faculty is lacking in diversity of gender?",
  //   // 2022!!
  // });

    sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/faculty_diversityXrace",
    totalResp: 207,
    displayPercentage: true,
    title: "Faculty Diversity by Race",
    subtitle: "Respondents who believe that the faculty of Andover is lacking diversity in race.",
    // 2024!!
  });

    sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/faculty_diversityXrace",
    totalResp: 207,
    displayPercentage: true,
    title: "Faculty Diversity by Race",
    subtitle: "Respondents who believe that the faculty of Andover is lacking diversity in race.",
    // 2024!!
  });

  // sota.stackedBarChart({
  //   section: "diversity",
  //   dataFile: "assets/data/diversity/faculty_diversityXsocioeconomic",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   showLegend: true,
  //   title: "Faculty Diversity By Perceived Socioeconomic Class",
  //   subtitle:
  //     "Do you think the faculty is lacking in diversity of socioeconomic status?",
  // });

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/140-social_divide",
    totalResp: 726,
    displayPercentage: true,
    title: "Social Divide",
    subtitle:
      "Do you feel like there is a social divide at Andover between students of different...?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "diversity",
    dataFile: "assets/data/diversity/secdivideXsec",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Social Divide Due to Socioeconomic Status & Socioeconomic Status",
    subtitle:
      "Respondents' opinions on whether there is a social divide at Andover due to socioeconomic status correlated with their socioeconomic status.",
    // 2024!!
  });

  // sota.stackedBarChart({
  //   section: "diversity",
  //   dataFile: "assets/data/diversity/divideXrace",
  //   sorted: false,
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   displayPercentage: true,
  //   title: "Social Divide & Race",
  //   subtitle: "Respondents' opinions on whether there is a social divide at Andover correlated with their race.",
  //       // 2023!!
  // });

  // sota.stackedBarChart({
  //   section: "diversity",
  //   dataFile: "assets/data/diversity/social_divideXrace",
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   showLegend: false,
  //   title: "Social Divide by Racial Group",
  //   subtitle: "Whether or not students believe there is a social divide on campus compared to their racial group.",
  //   // 2022!!
  // });

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/143-discrimination",
    totalResp: 722,
    displayPercentage: true,
    title: "Discrimination",
    subtitle:
      "Have you ever felt discriminated against at Andover due to your...?",
    // 2024!!
  });

  // sota.barChart({
  //   section: "diversity",
  //   dataFile: "assets/data/diversity/139-faculty_support",
  //   totalResp: 745,
  //   displayPercentage: true,
  //   title: "Faculty Support",
  //   subtitle:
  //     "Which of the faculty/staff members in your life do you feel are supportive of a diverse range of students?",
  //   // 2023!!
  // });

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/144-identity_discussion",
    totalResp: 718,
    displayPercentage: true,
    title: "Talking the Talk",
    subtitle:
      "Do you think that there are facets of identity that are not discussed enough at Andover?",
    // 2024!!
  });

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/142-classroom_comfort",
    totalResp: 723,
    displayPercentage: true,
    title: "Classroom",
    subtitle:
      "While at Andover, have any of the following aspects of your identity significantly and consistently affected your level of comfort in a classroom setting?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "diversity",
    dataFile: "assets/data/diversity/comfortXrace",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Classroom Comfort & Race",
    subtitle:
      "Editor’s Note: Correlated statistics from respondents whose races are “Indigenous People of the Americas” and “Native Hawaiian or Pacific Islander” have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "diversity",
    dataFile: "assets/data/diversity/comfortXgender",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Classroom Comfort & Gender Identity",
    subtitle:
      "Whether respondents feel gender identity is a factor in whether they are comfortable in a classroom correlated with their gender identity. Editor’s Note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary,” and “Other” gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2024!!
  });

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/145-ebi",
    sorted: false,
    title: "EBI Curriculum",
    subtitle:
      "Do you think the EBI curriculum at Andover is effective in helping students become better community members?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "diversity",
    dataFile: "assets/data/diversity/ebiXclass",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "EBI Curriculum Effectiveness for each class",
    subtitle:
      "Do you think the EBI curriculum at Andover is effective in helping students become better community members?",
    // 2024!!
  });

  sota.barChart({
    section: "diversity",
    dataFile: "assets/data/diversity/141-leadership",
    totalResp: 720,
    displayPercentage: true,
    title: "Leadership Positions",
    subtitle:
      "Do you think your capability to attain leadership positions at Andover is affected by your...?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "diversity",
    dataFile: "assets/data/diversity/leadershipXgender",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Leadership & Gender",
    subtitle:
      "Respondents' opinions on whether gender limits their capacity to obtain leadership positions correlated with their gender. Editor’s note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary.” and “Other” have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "diversity",
    dataFile: "assets/data/diversity/leadershipXrace",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Leadership & Race",
    subtitle:
      "Respondents' opinions on whether race limits their capacity to obtain leadership positions correlated with their race. Editor’s Note: Correlated statistics from respondents whose races are “Indigenous People of the Americas” and “Native Hawaiian or Pacific Islander” have been removed in an effort to protect the complete anonymity of these respondents. ",
    // 2024!!
  });

  sota.pieChart({
    section: "diversity",
    dataFile: "assets/data/diversity/146-day_student",
    title: "Day Students",
    subtitle:
      "Do you think day students are able to integrate enough with boarding students at Andover?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "diversity",
    dataFile: "assets/data/diversity/residentialXday",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Residential Status & Day Student Integration",
    subtitle:
      "Respondents' opinions on whether day students integrate into campus correlated with their residential status.",
    // 2024!!
  });

  // sota.stackedBarChart({
  //   section: "diversity",
  //   dataFile: "assets/data/diversity/day_supportXboarding",
  //   sorted: false,
  //   showLegend: true,
  //   labelStyle: "onBarx",
  //   groupLabelStyle: "onBar",
  //   displayPercentage: true,
  //   title: "Day Student Integration by student status",
  //   subtitle:
  //     "Do you think day students are able to integrate enough with boarding students at Andover this year?",
  //   // 2023!!
  // });

  // ------ SEX -------

  sota.barChart({
    section: "sex",
    dataFile: "assets/data/sex/70-sexual_activity",
    displayPercentage: true,
    title: "Have you ever engaged in sexual activity?",
    // 2024!!
  });

  sota.groupedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/sexualactivityXgrade",
    totalResp: {2029: 180, 2028: 217, 2027: 216, 2026: 191, },
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Sexual Activity by Grade",
    subtitle:
      "Respondents who have participated in sexual activity sorted by grade.",
    // TODO for 2025
  });

  sota.barChart({
    section: "sex",
    dataFile: "assets/data/sex/72-number_of_partners",
    displayPercentage: true,
    title: "How many people have you engaged in sexual activity with?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/71-sex_frequency",
    showLegend: true,
    labelStyle: "onBar",
    title: "How frequently, on average, do you engage in sexual activity?",
    // 2024!!
  });

  // sota.pieChart({
  //   section: "sex",
  //   dataFile: "assets/data/sex/73-hookup_culture",
  //   displayPercentage: true,
  //   title: "hook-up culture",
  //   subtitle: "Do you believe that there is a hook-up culture at Andover?",
  //   // 2023!!
  // });

  // sota.stackedBarChart({
  //   section: "sex",
  //   dataFile: "assets/data/sex/hookupXgender",
  //   sorted: false,
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   displayPercentage: true,
  //   title: "Hook-Up Culture & Gender Identity",
  //   subtitle:
  //     "Whether respondents believe there is a hook-up culture at Andover by their gender identity. Editor’s note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary.” and “Other” have been removed in an effort to protect the complete anonymity of these respondents.",
  //   // 2023!!
  // });

  sota.bigNumber({
    section: "sex",
    number: "20.1%",
    title: "Peer pressure & hook-up culture",
    subtitle:
      "of respondents that believe Andover has a hook-up culture have felt pressured by peers to participate in it.",
    // 2024!!
  });
  // sota.pieChart({
  //   section: "sex",
  //   dataFile: "assets/data/sex/74-participate_hookup",
  //   displayPercentage: true,
  //   sorted: false,
  //   title:
  //     "Have you ever felt pressured by your peers to participate in Andover's hook-up culture?",
  //   // 2024!!
  // });

  // sota.bigNumber({
  //   section: "sex",
  //   number: "34.6%",
  //   title: '"Hooking-up"',
  //   subtitle:
  //     'of respondents have "hooked-up" with someone they were not in a committed relationship with',
  //   // 2023!!
  // });

  sota.pieChart({
    section: "sex",
    dataFile: "assets/data/sex/74-participate_hookup",
    displayPercentage: true,
    title: '"Hooking-up"',
    subtitle:
      "Have you ever felt pressured by your peers to participate in Andover's hook-up culture",
    // 2025!!
  });

  sota.bigNumber({
    section: "sex",
    number: "9.0%",
    title: "Partner Pressure",
    subtitle:
      "of respondents have felt pressured by their partners to engage in sexual activity.",
    // 2026
  });

  sota.pieChart({
    section: "sex",
    dataFile: "assets/data/sex/76-partner_pressure",
    displayPercentage: true,
    title: "partner pressure",
    subtitle:
      "Have you ever felt pressured by a partner to engage in sexual activity?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/77-rape_culture",
    displayPercentage: true,
    title: "Do you believe that there is rape culture at Andover?",
    subtitle:
      "Rape culture: “a society or environment whose prevailing social attitudes have the effect of normalizing or trivializing sexual assault and abuse.” (Oxford Dictionaries)",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/rapecultureXgender",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Rape Culture & Gender Identity",
    subtitle:
      "Whether respondents believe there is a rape culture at Andover by their gender identity. Editor’s note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary.” and “Other” have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2024!!
  });

  sota.pieChart({
    section: "sex",
    dataFile: "assets/data/sex/78-verbalconsent",
    displayPercentage: true,
    title: "consent",
    subtitle: "Do you consistently ask your partner for verbal consent?",
    // 2024!!
  });

  sota.barChart({
    section: "sex",
    dataFile: "assets/data/sex/79-use_protection",
    displayPercentage: true,
    title: "Do you use protection while engaging in sexual activity?",
    // 2024!!
  });

  sota.barChart({
    section: "sex",
    dataFile: "assets/data/sex/80-committed_relationship",
    showLegend: true,
    title: "Have you ever been in a committed relationship?",
    // 2024!!
  });

  // sota.stackedBarChart({
  //   section: "sex",
  //   dataFile: "assets/data/sex/inter-class_relationship",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   title: "inter-class relationships",
  //   subtitle:
  //     "If you are currently in a committed relationship, what class is your partner in?",
  //   // 2023!!
  // });

  sota.lineGraph({
    section: "sex",
    dataFile: "assets/data/sex/sex_ed",
    title: "Sexual Education",
    subtitle:
      "Percentage of students who thought that their sexual education at Andover has been/is adequate.",
    inputIsPercentage: true,
    // 2025
  });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/sex_edXsexuality",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Sexual Education & Sexuality",
    subtitle: "Whether respondents think their sexual education at Andover is/has been adequate correlated with their sexuality.",
    // 2025
  });

  

  // sota.stackedBarChart({
  //   section: "sex",
  //   dataFile: "assets/data/sex/83-masturbation",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   title: "masturbation",
  //   subtitle: "How frequently do you masturbate?",
  //   // 2023!!
  // });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/84-telling_friends_masturbate",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title:
      "Would you feel comfortable telling your friends that you masturbate?",
    subtitle:
      "Editor’s note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary.” and “Other” have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/masturbateXgender",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Talking about Masturbation & Gender Identity",
    subtitle:
      "Whether respondents feel comfortable telling their friends they masturbate by their gender identity. Editor’s note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary.” and “Other” have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2024!!
  });

  sota.barChart({
    section: "sex",
    dataFile: "assets/data/sex/85-porn",
    displayPercentage: true,
    title: "Porn",
    subtitle:
      "If you watch pornography/read pornographic materials, how frequently, on average, do you do so?",
    // 2025
  });

  sota.bigNumber({
    section: "sex",
    number: "17.1%",
    title: "sexting",
    subtitle:
      "of respondents have sent a sexually explicit photo of themselves.",
    // 2025!
  });

  sota.pieChart({
    section: "sex",
    dataFile: "assets/data/sex/sexted",
    displayPercentage: true,
    title: "Have you ever received a sexually explicit photo?",
    // 2025
  });

  sota.bigNumber({
    section: "sex",
    number: "22.7%",
    title: "Sexual Harassment",
    subtitle: "of respondents have been sexually harassed (unwelcome sexual advances, requests for sexual favors, and other verbal or physical harassment of a sexual nature).",
    // 2026
  });

  sota.columnChart({
    section: "sex",
    dataFile: "assets/data/sex/89-harassed",
    displayPercentage: true,
    totalResp: 695,
    title: "Have you ever been sexually harassed?",
    // 2024!!
  });

  sota.pieChart({
    section: "sex",
    dataFile: "assets/data/sex/90-sex_racial",
    showLegend: true,
    sorted: false,
    title: "Sexual racism",
    subtitle:
      "Have you ever been sexualized (including being fetishized and hypersexualized) or desexualized (including being defeminized and emasculated) due to your racial-ethnic identity?",
    // 2024!!
  });

  sota.bigNumber({
    section: "sex",
    number: "9.5%",
    title: "Sexual Assault",
    subtitle: "of respondents have been sexually assaulted.",
    // 2026
  });

  sota.columnChart({
    section: "sex",
    dataFile: "assets/data/sex/91-assaulted",
    displayPercentage: true,
    totalResp: 694,
    title: "Have you ever been sexually assaulted?",
    // 2026
  });

  sota.barChart({
    section: "sex",
    dataFile: "assets/data/sex/92-sti",
    displayPercentage: true,
    title: "Sexual health",
    subtitle:
      "Have you ever contracted a Sexually Transmitted Infection (STI) or Sexually Transmitted Disease (STD)?",
    // 2024!!
  });

  sota.pieChart({
    section: "sex",
    dataFile: "assets/data/sex/88-sex-sykes",
    showLegend: true,
    title: "Sykes Support",
    subtitle:
      "Do you feel comfortable consulting Rebecca M. Sykes Wellness Center for sex-related resources and care?",
    // 2025
  });

  // sota.bigNumber({
  //   section: "sex",
  //   number: "18.8%",
  //   title: "Sex, Drugs, and Alcohol",
  //   subtitle:
  //     "of respondents who have consumed drugs or alcohol have had sex under the influence.",
  //   // 2023!!
  // });

  // sota.stackedBarChart({
  //   section: "sex",
  //   dataFile: "assets/data/sex/sex-influence",
  //   sorted: false,
  //   showLegend: true,
  //   displayPercentage: true,
  //   groupLabelStyle: "onBar",
  //   labelStyle: "onBar",
  //   title: "Sex Under the Influence",
  //   subtitle:
  //     "Have you ever engaged in sexual activity while under the influence of drugs or alcohol?",
  //   // 2024
  // });

  sota.stackedBarChart({
    section: "sex",
    dataFile: "assets/data/sex/influenceXconsumption",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Sex Under the Influence & Substance Consumption",
    subtitle:
      "Whether respondents have had sex under the influence correlated with substance consumption.",
    // 2024!!
  });

  // sota.groupedBarChart({
  //   section: "sex",
  //   dataFile: "assets/data/sex/sexXclass",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   title: "Sexual Activity by class year",
  //   totalResp: { 2025: 183, 2024: 333, 2023: 377, 2022: 445 },
  //   subtitle: "What form(s) of sexual activity have you engaged in?",
  //   // 2022!!
  // });

  // sota.stackedColumnChart({
  //   section: "sex",
  //   dataFile: "assets/data/sex/sexfreqXgender",
  //   showLegend: false,
  //   // labelStyle: "onBar",
  //   // groupLabelStyle: "onBar",
  //   // totalResp: {"Not applicable": 90, 2: 87, 3: 74, 4: 71, 5: 48, 6: 14},
  //   title: "Sexual Frequency by Gender Identity",
  //   subtitle: "How frequently various gender identities have sex.",
  //   // 2022!!
  // });

  // sota.stackedBarChart({
  //   section: "sex",
  //   dataFile: "assets/data/sex/rapecultureXgenderid",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   title: "Rape culture and gender identity",
  //   // 2022!!
  // });

  // sota.bigNumber({
  //   section: "sex",
  //   number: "7.8%",
  //   title: "Porn",
  //   subtitle:
  //     "of respondents watch porn daily.",
  //   // 2022!!
  // });

  // sota.bigNumber({
  //   section: "sex",
  //   number: "3.7%",
  //   title: "Sexual Activity",
  //   subtitle:
  //     "of respondents have sex daily.",
  //   // 2022!!
  // });

  // --- DRUGS AND ALCOHOL!!! ---

  sota.barChart({
    section: "drugs",
    dataFile: "assets/data/drugs/95-alcohol",
    displayPercentage: true,
    groupLabelStyle: "onBar",
    title: "Alcohol",
    subtitle: "Have you ever consumed alcohol recreationally?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/normalizationXuse",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    inputIsPercentage: true,
    title: "Normalization of Drug Culture & Substance Use",
    subtitle:
      "Whether respondents believe drug culture has been normalized at Andover correlated with substance use.",
    // 2024!!
  });

    sota.stackedBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/drugnormXpressure",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Normalization of Drug Culture & Pressure to Take Drugs",
    subtitle:
      "Whether respondents believe drug culture has been normalized at Andover correlated with whether or not they have felt pressured to take drugs.",
    // 2025!!
  });

  sota.pieChart({
    section: "drugs",
    dataFile: "assets/data/drugs/112-nicotine-product",
    displayPercentage: true,
    sorted: false,
    title: "e-cigarette",
    subtitle:
      "Have you ever used an e-cigarette or vaped a nicotine-based product?",
    // 2024!!
  });

  sota.pieChart({
    section: "drugs",
    dataFile: "assets/data/drugs/oralnicotine-product",
    displayPercentage: true,
    sorted: false,
    title: "Zyn Usage",
    subtitle:
      "Have you ever used an oral nicotine packet (commonly referred to as a Zyn)?",
    // 2025
  });

  sota.barChart({
    section: "drugs",
    dataFile: "assets/data/drugs/98-marijuana",
    displayPercentage: true,
    groupLabelStyle: "onBar",
    title: "Marijuana",
    subtitle: "Have you ever used any form of marijuana?",
    // 2025
  });

  sota.columnChart({
    section: "drugs",
    dataFile: "assets/data/drugs/96-tobacco",
    displayPercentage: true,
    groupLabelStyle: "onBar",
    title: "tobacco",
    subtitle:
      "Have you ever used any tobacco products (e.g. dipping and chewing tobacco, cigarettes, etc.)?",
    // 2024!!
  });

  // sota.stackedBarChart({
  //   section: "drugs",
  //   dataFile: "assets/data/drugs/juulXclass",
  //   displayPercentage: true,
  //   groupLabelStyle: "onBar",
  //   title: " vaping ",
  //   subtitle:
  //     'Have you ever "juuled" or used a similar e-cigarette/pod vape nicotine-based product?',
  // });

  sota.barChart({
    section: "drugs",
    dataFile: "assets/data/drugs/99-drug_frequency",
    displayPercentage: true,
    totalResp: 765,
    title: "Drug habits",
    subtitle:
      "How often do you consume recreational drugs or alcohol on campus?",
    // 2025
  });

  // sota.bigNumber({
  //   section: "drugs",
  //   number: "30.8%",
  //   title: "Drugs vs. student leadership",
  //   subtitle:
  //     "of student leaders have consumed drugs or alchohol on and off campus",
  // }); // 2023!!

  // sota.stackedBarChart({
  //   section: "drugs",
  //   dataFile: "assets/data/drugs/studentleaderXalcohol",
  //   sorted: false,
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   inputIsPercentage: true,
  //   displayPercentage: true,
  //   title: "Student Leadership & Alcohol Use",
  //   subtitle:
  //     "How respondents who are student leaders are correlated with alcohol use.",
  //   // 2023!!
  // });

  sota.stackedBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/alcoholXcluster",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    inputIsPercentage: true,
    displayPercentage: true,
    title: "Cluster & Alcohol Use",
    subtitle: "Alcohol use by students by cluster.",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/alcoholXincome",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    displayPercentage: true,
    title: "Income & Alcohol Use",
    subtitle: "Alcohol use by students correlated with their household income.",
    // 2024!!
  });

  sota.bigNumber({
    section: "drugs",
    number: "58.0%",
    title: "normalization of drugs and alcohol",
    subtitle:
      "of respondents believe that the use of recreational drugs or alcohol is normalized at Andover.",
  }); // 2025

  sota.customBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/normalized",
    shapeFile: "assets/svgs/pill-politics",
    displayPercentage: true,
    title:
      "Do you think that the use of recreational drugs or alcohol is normalized at Andover?",
  });

  sota.pieChart({
    section: "drugs",
    dataFile: "assets/data/drugs/107-influence_friends",
    displayPercentage: true,
    title: "drugs and friendships",
    title:
      "Do you think that recreational drug or alcohol use significantly influences your friendships at Andover?",
    // 2024!!
  });

  // sota.pieChart({
  //   section: "drugs",
  //   dataFile: "assets/data/drugs/102-dorm_drug",
  //   displayPercentage: true,
  //   title: "dorm culture",
  //   subtitle:
  //     "Do you think your dorm significantly influences how you think about/use drugs and alcohol?",
  //     // 2022!!
  // });

  sota.pieChart({
    section: "drugs",
    dataFile: "assets/data/drugs/104-study_drugs",
    displayPercentage: true,
    title: "study drugs",
    margin: margin,
    subtitle:
      "Have you ever used pharmaceutical drugs in the hopes of enhancing academic performance (i.e. “study drugs”) during your time at Andover?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/studydrugsXgpa",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    inputIsPercentage: true,
    displayPercentage: true,
    title: "Use of Study Drugs & GPA",
    subtitle:
      "Whether respondents use study drugs correlated with their GPA. Editor's Note: Only data from the GPA range of 5.0 - 6.0 is used.",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/studentleaderXstudydrug",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    inputIsPercentage: true,
    displayPercentage: true,
    title: "Student Leadership & Study Drug Use",
    subtitle:
      "How respondents who are student leaders are correlated with Study Drug use.",
    // 2024!!
  });

  sota.barChart({
    section: "drugs",
    dataFile: "assets/data/drugs/103-hard_drugs",
    displayPercentage: true,
    totalResp: 819,
    title: "Hallucinogens & hard drugs",
    subtitle: "Have you ever used hallucinogens or hard drugs?",
    // 2024!!
  });

  // sota.stackedBarChart({
  //   section: "drugs",
  //   dataFile: "assets/data/drugs/drugs_for_stress",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   title: "stress relief",
  //   subtitle:
  //     "If you consume recreational drugs or alcohol on campus, do you do so primarily to relieve stress?",
  // });
  sota.stackedBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/105-peer_pressure",
    showLegend: true,
    labelStyle: "onBar",
    title: "peer pressure",
    subtitle:
      "Have you ever felt pressured by peers to consume recreational drugs or alcohol on campus?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/pressureXalc",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    inputIsPercentage: true,
    displayPercentage: true,
    title: "Pressure & Alchohol Use",
    subtitle:
      "Whether respondents feel pressured to participate in drug use correlated with alchohol use.",
    // 2024!!
  });

  sota.barChart({
    section: "drugs",
    dataFile: "assets/data/drugs/106-sold_drugs",
    displayPercentage: true,
    title: "sales",
    margin: margin,

    subtitle:
      "Have you ever sold someone recreational drugs, alcohol, or your prescription medication?",
    // 2024!!
  });

  sota.barChart({
    section: "drugs",
    dataFile: "assets/data/drugs/107-druglocation",
    displayPercentage: true,
    totalResp: 820,
    title: "location",
    subtitle:
      "In which of the following settings at Andover have you been under the influence of recreational drugs or alcohol?",
    // 2024!!
  });

  sota.pieChart({
    section: "drugs",
    dataFile: "assets/data/drugs/leavingcampus",
    displayPercentage: true,
    sorted: false,
    title: "leaving campus",
    subtitle:
      "Have you ever intentionally left campus to consume recreational drugs or alcohol (off campus homes, downtown Andover, Boston)?",
    // 2024!!
  });

  sota.pieChart({
    section: "drugs",
    dataFile: "assets/data/drugs/111-fakeid",
    displayPercentage: true,
    title: "Fake I.D.",
    margin: margin,
    subtitle: "Have you ever purchased or do you own a fake ID?",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/zynXvarsity",
    sorted: false,
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    inputIsPercentage: true,
    displayPercentage: true,
    title: "Zyn & Varsity",
    subtitle: "Usage of Zyn by respondents who are Varsity Athletes. ",
    // 2024!!
  });

  sota.pieChart({
    section: "drugs",
    dataFile: "assets/data/drugs/109-been_sancted",
    displayPercentage: true,
    title: "Have you ever been sanctuaried?",
    margin: margin,
    subtitle:
      "Sanctuary: provided with a means of accessing support in situations where alcohol, drugs, tobacco, and/or nicotine are involved WITHOUT disciplinary consequences (The Blue Book)",
    // 2024!!
  });

  sota.stackedBarChart({
    section: "drugs",
    dataFile: "assets/data/drugs/110-sanctuaried-other",
    showLegend: true,
    labelStyle: "onBar",
    title: "Santuary Policy",
    subtitle: "Have you ever sanctuaried someone else?",
    // 2024!!
  });

  // ----- WELLNESS!! <3 ------

  sota.bigNumber({
    section: "wellness",
    number: "83.2%",
    title: "Happiness",
    subtitle: "of respondents generally consider themselves happy at Andover.",
    // 2026
  });

  sota.bigNumber({
    section: "wellness",
    number: "67.3%",
    title: "Perceived Happiness",
    subtitle: "of respondents think that Andover students are generally happy.",
    // 2026
  });

  sota.bigNumber({
    section: "wellness",
    number: "83.5%",
    title: "Teachers Care",
    subtitle: "of respondents think the majority of their teachers care about their health and well-being.",
    // 2026
  });

  sota.bigNumber({
    section: "wellness",
    number: "22.0%",
    title: "Depression",
    subtitle: "of respondents have been diagnosed with, or would like to seek an evaluation for, depression.",
    // 2026
  });

  sota.bigNumber({
    section: "wellness",
    number: "33.6%",
    title: "Anxiety",
    subtitle: "of respondents have been diagnosed with, or would like to seek an evaluation for, anxiety.",
    // 2026
  });

  sota.bigNumber({
    section: "wellness",
    title: "sleep",
    number: "6.96",
    subtitle: "average hours of sleep per night of an Andover student.",
    // 2026
  });

  sota.columnChart({
    section: "wellness",
    dataFile: "assets/data/wellness/44-sleep",
    displayPercentage: true,
    subtitle: "On average, how many hours of sleep do you get per night?",
    title: "sleep",
    // 2023!!
  });

  sota.columnChart({
    section: "wellness",
    dataFile: "assets/data/wellness/45-hours_social",
    sorted: false,
    title: "social media usage",
    subtitle:
      "Approximately how many hours a day do you spend on social media?",
    // 2023!!
  });

  sota.barChart({
    section: "wellness",
    dataFile: "assets/data/wellness/46-social_media",
    displayPercentage: true,
    totalResp: 779,
    title: "What social media platforms do you use at Andover?",
    // 2023!!
  });


  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/socialmediaXgrade",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Social Media & Grade",
    subtitle:
      "Platforms that respondents use by their class year.",
    // 2023!!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/47-social_media_impact",
    showLegend: true,
    labelStyle: "onBar",
    title: "social media and mental health",
    subtitle: "How does social media impact your life?",
    // 2023!!
  });


  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/47-caffeine",
    title: "Caffeine Usage",
    // shapeFile: "assets/svgs/coffee",
    displayPercentage: true,
    subtitle: "If you consume caffeine (coffee, energy drinks, soda, tea, etc.) during the school year, on average, how frequently do you do so?",
    //2025
  })

  sota.stackedColumnChart({
    section: "wellness",
    dataFile: "assets/data/wellness/caffeineXyear",
    title: "Caffeine Usage by Class Year",
    displayPercentage: true,
    subtitle: "Frequency of caffeine consumption by class year.",
    // 2025
  })

    sota.stackedColumnChart({
    section: "wellness",
    dataFile: "assets/data/wellness/lonelinessXsykeswillingness",
    title: "Loneliness & Sykes",
    displayPercentage: true,
    subtitle: "Loneliness by willingness to consult Sykes Mental Health Services.",
    //2025
  })

    sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/socialmediaXGPA",
    title: "Social Media & GPA",
    displayPercentage: true,
    subtitle: "Daily social media usage correlated with GPA.",
    //2025
  })

  sota.bigNumber({
    section: "wellness",
    title: "Neurodivergence",
    number: "20.6%",
    subtitle: "of respondents consider themselves neurodivergent.",
    // 2025
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/neurodivergence",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "neurodiversity",
    subtitle:
      "Do you consider yourself neurodivergent? — “Having or relating to a type of brain that is often considered as different from what is usual” (Cambridge English Dictionary)",
    // 2023!!
  });

  sota.bigNumber({
    section: "wellness",
    title: "bullying & hazing",
    number: "11.2%",
    subtitle: "of respondents have been bullied or hazed while at Andover.",
    // 2025!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/52-hazed",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    sorted: false,
    title: "bullying & hazing",
    subtitle: "Have you ever been bullied or hazed while at Andover?",
    // 2023!!
  });

  sota.customColumnChart({
    section: "wellness",
    dataFile: "assets/data/wellness/53-insecure_academic",
    title: "academic insecurity",
    subtitle:
      "Do you feel insecure about your academic ability and/or intelligence?",
    shapeFile: "assets/svgs/lightbulb",
    shapeHeight: 250,
    // 2023!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/insecurityXgpa",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    labelStyle: "onBar",
    title: "GPA & Intellectual Insecurity",
    subtitle:
      "Correspondents who feel insecure about their academic ability and/or intelligence correlated with their GPA. Editor's Note: Only data from the GPA range of 5.0 - 6.0 is used.",
    // 2023!!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/54-insecure_body",
    sorted: false,
    title: "body insecurity",
    subtitle:
      "Do you feel insecure about your body, physical health, and/or appearance?",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/insecurityXgender",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    labelStyle: "onBar",
    title: "Body Insecurity & Gender",
    subtitle:
      "Correspondents who feel insecure about their body, physical health, and/or appearance correlated with their gender. Editor’s Note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary,” and “Other” gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/insecureXvarsity",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    labelStyle: "onBar",
    title: "Body Insecurity & Gender",
    subtitle:
      "Correspondents who feel insecure about their body, physical health, and/or appearance correlated with whether they are varisty athletes. Editor’s Note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary,” and “Other” gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/insecurityXsocial-media",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    labelStyle: "onBar",
    title: "Body Insecurity & Social Media",
    subtitle:
      "Correspondents who feel insecure about their body, physical health, and/or appearance correlated with the hours they spend on social media.",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/56-eating_disorder",
    showLegend: true,
    labelStyle: "onBar",
    title: "eating disorders",
    subtitle:
      "Have you ever had, or do you currently have, an eating disorder?",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/57-self_harm",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    sorted: false,
    title: "Self Harm",
    subtitle:
      "Have you ever engaged, or do you currently engage, in self-harm?",
    // 2023!!
  });

  sota.bigNumber({
    section: "wellness",
    title: "Sykes Counseling",
    number: "34.7%",
    subtitle:
      "of students said yes to using Sykes mental health support services.",
    // 2026
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/58-see_counselor",
    sorted: false,
    subtitle:
      "Have you ever been to the Rebecca M. Sykes Wellness Center to see a counselor?",
    title: "Sykes counseling",
    // 2025
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/counselorXsufficient",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    labelStyle: "onBar",
    title: "Sufficient Support & Counseling",
    subtitle:
      "Correlation between respondents who believe Sykes mental health support is sufficient and whether they have seen a counselor.",
    // 2023!!
  });

  // sota.bigNumber({
  //   section: "wellness",
  //   title: "Adequate Recources",
  //   number: "27.5%",
  //   subtitle:
  //     "less respondents believe that the resources provided by the Rebecca M. Sykes Wellness Center are sufficient compared to last year (2022).",
  //   // 2023!!
  // });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/sykesmentalXseencounselor",
    groupLabelStyle: "onBar",
    showLegend: true,
    labelStyle: "onBar",
    title: "sykes counseling resources",
    subtitle:
      "Do you think that the mental health and counseling resources provided by the Rebecca M. Sykes Wellness Center are sufficient?",
    // 2022!!
  });



  sota.customBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/60-sykes_physical",
    subtitle:
      "Do you think that the physical health resources provided by the Rebecca M. Sykes Wellness Center are sufficient?",
    title: "physical health resources",
    shapeFile: "assets/svgs/pregnancy",
    // 2023!!
  });

  sota.bigNumber({
    section: "wellness",
    title: "ADD/ADHD",
    number: "10.8%",
    subtitle:
      "of respondents have been diagnosed with ADD/ADHD.",
    // 2025
  });

  sota.stackedColumnChart({
    section: "wellness",
    dataFile: "assets/data/wellness/6123-diagnosed",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "mental health",
    subtitle: "Have you ever been diagnosed with...?",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/anxietyXgender",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Anxiety & Gender",
    subtitle:
      "Respondents who have anxiety correlated with their gender identity. Editor’s Note: Correlated statistics from respondents who identify as “Agender,” “Genderfluid,” “Genderqueer,” “Nonbinary,” and “Other” gender identities have been removed in an effort to protect the complete anonymity of these respondents.",
    // 2023!!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/treatment",
    sorted: false,
    subtitle:
      "Are you currently receiving treatment for any mental health diagnosis (ie. therapy, medication, etc.)?",
    title: "Treatment",
    // 2023!!
  });

  // sota.stackedBarChart({
  //   section: "wellness",
  //   dataFile: "assets/data/wellness/mentalhealthXsykes",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   title: "Mental health diagnosis & sykes",
  //   subtitle:
  //     "Whether respondents who have had a mental health diagnosis correlated with whether the resources at Sykes Wellness Center are sufficient.",
  //   // 2023!!
  // });

  //   sota.stackedBarChart({
  //   section: "wellness",
  //   dataFile: "assets/data/wellness/sykesmentalXcounselor",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   title: "Counselor Usage & Sykes Mental Health Resources",
  //   subtitle:
  //     "Whether respondents have seen a counselor correlated with whether the resources at Sykes Wellness Center are sufficient.",
  //   // 2025!!
  // });

    sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/sykeswillingnessXyear",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Willingness to Use Sykes Resources & Class Year",
    subtitle:
      "Whether respondents are willing to use the mental health resources at Sykes Wellness Center by Class Year.",
    // 2025!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/65-happiness",
    showLegend: true,
    labelStyle: "onBar",
    title: "HAPPINESS",
    subtitle: "Generally speaking, do you consider yourself happy at Andover?",
    // 2025
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/66-others_happiness",
    showLegend: true,
    labelStyle: "onBar",
    title: "Perceived Happiness",
    subtitle:
      "Generally speaking, do you think that Andover students are happy?",
    // 2025
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/happyXsec",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Happiness & SEC",
    subtitle:
      "Whether respondents are happy at Andover correlated with their perceived socioeconomic status.",
    // 2023!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/happyXgpa",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Happiness & GPA",
    subtitle:
      "Whether respondents are happy at Andover correlated with their GPA. Editor's Note: Only data from the GPA range of 5.0 - 6.0 is used.",
    // 2023!!
  });

  //   sota.stackedBarChart({
  //   section: "wellness",
  //   dataFile: "assets/data/wellness/GPAXrelationship",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   title: "Happiness & GPA",
  //   subtitle:
  //     "Whether respondents are in a relationship correlated with their GPA. Editor's Note: Only data from the GPA range of 4.0 - 6.0 is used.",
  //   // 2025!!
  // });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/happyXgrade",
    showLegend: true,
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    title: "Happiness & Class Year",
    subtitle:
      "Whether respondents are happy at Andover correlated with their class year.",
    // 2023!!
  });
  

  sota.barChart({
    section: "wellness",
    dataFile: "assets/data/wellness/67-support_system",
    displayPercentage: true,
    totalResp: 765,
    title: "support systems",
    subtitle: "What is your mental and/or emotional support system on campus?",
    // 2025!!
  });

  // sota.pieChart({
  //   section: "wellness",
  //   dataFile: "assets/data/wellness/59-adequate_support",
  //   title: "Adequate Resources",
  //   sorted: false,
  //   subtitle:
  //     "Do you feel as though you have an adequate mental and/or emotional support system on campus?",
  //   // 2023!!
  // });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/isolation",
    title: "Lonely & Isolated",
    sorted: false,
    subtitle: "How often do you feel lonely or isolated?",
    margin: margin,
    // 2023!!
  });

  sota.stackedBarChart({
    section: "wellness",
    dataFile: "assets/data/wellness/lonelyXsocial-media",
    labelStyle: "onBar",
    groupLabelStyle: "onBar",
    showLegend: true,
    labelStyle: "onBar",
    title: "Loneliness & Social Media",
    subtitle:
      "Correspondents who feel lonely or isolated correlated with the hours they spend on social media.",
    // 2023!!
  });

  sota.pieChart({
    section: "wellness",
    dataFile: "assets/data/wellness/69-take_care",
    sorted: false,
    title: "self-care",
    subtitle:
      "Do you have enough time in your day-to-day life as an Andover student to adequately take care of yourself?",
    // 2023!!
  });



  // sota.bigNumber({
  //   section: "wellness",
  //   title: "Percentage of students who have tested positive for Covid-19",
  //   number: "32.4%",
  //   subtitle:
  //     "Editor's Note: This number reflects the number of students who have tested for Covid-19 when the survey was completed, or between April 8, 2022 and April 20, 2022",
  //   // 2022!!
  // });

  // sota.stackedBarChart({
  //   section: "wellness",
  //   dataFile: "assets/data/wellness/insecureXgender",
  //   showLegend: true,
  //   groupLabelStyle: "onBar",
  //   labelStyle: "onBar",
  //   title: "body insecurity by gender identity",
  //   subtitle:
  //     "Do you feel insecure about your body, physical health, and/or appearance?",
  //   // 2022!!
  // });

  // sota.stackedBarChart({
  //   section: "wellness",
  //   dataFile: "assets/data/wellness/insecureXvarsity",
  //   showLegend: true,
  //   groupLabelStyle: "onBar",
  //   labelStyle: "onBar",
  //   title: "body insecurity in athletes",
  //   subtitle:
  //     "Do you feel insecure about your body, physical health, and/or appearance?",
  //   // 2022!!
  // });

  // sota.stackedBarChart({
  //   section: "wellness",
  //   dataFile: "assets/data/wellness/happyXgpa",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   groupLabelStyle: "onBar",
  //   title: "Happiness by G.P.A.",
  //   subtitle: "Happiness of students and their G.P.A.",
  //   // 2022!!
  // });

  // sota.bigNumber({
  //   section: "wellness",
  //   title: "Support Systems",
  //   number: "66.9%",
  //   subtitle:
  //     "of students feel as though they have an adequate mental and/or emotional support system on campus.",
  //   // 2022!!
  // });

  // sota.barChart({
  //   section: "wellness",
  //   dataFile: "assets/data/wellness/50-dietary_restrict",
  //   displayPercentage: true,
  //   totalResp: 949,
  //   subtitle: "What are your dietary restrictions?",
  //   title: "Dietary restrictions",
  //   // 2022!!
  // });

  // sota.stackedBarChart({
  //   section: "wellness",
  //   dataFile: "assets/data/wellness/happyXperceivedsec",
  //   groupLabelStyle: "onBar",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   title: "Happiness vs. Perceived Socioeconomic Class",
  //   subtitle: "Respondents' happiness and their perceived socioeconomic class.",
  //   // 2022!!
  // });

  // sota.pieChart({
  //   section: "wellness",
  //   dataFile: "assets/data/wellness/51-skip_meals",
  //   sorted: false,
  //   subtitle:
  //     "Do you skip meals in order to get more sleep and/or do school work?",
  //   title: "skipping meals",
  //   // 2022!!
  // });

  // // ---- SENIOR!!! -----

  // // sota.stackedBarChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/college",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   title: "Andover and college",
  // //   subtitle:
  // //     "Do you think attending Andover affects your chances of attending a selective college?",
  // // });

  // sota.bigNumber({
  //   section: "senior",
  //   title: "Respondents",
  //   number: "238",
  //   subtitle:
  //     "students in the Class of 2022 have completed the survey.",
  //   // 2022!!
  // });

  // sota.barChart({
  //   section: "senior",
  //   dataFile: "assets/data/senior/time-at-andover",
  //   totalResp: 862,
  //   displayPercentage: true,
  //   title: "Time at Andover",
  //   subtitle:
  //     "How long have you attended Andover? (e.g. if you are currently a two-year lower, answer “2 years”) If at any point you took a leave of absence, round to the nearest whole year.",
  //     // 2022!!
  // });

  // sota.pieChart({
  //   section: "senior",
  //   dataFile: "assets/data/senior/residence-status",
  //   displayPercentage: true,
  //   title: "Residence Status",
  //   subtitle:
  //     "Whether or not Class of 2022 respondents are boarding or day students.",
  //     // 2022!!
  // })

  // sota.barChart({
  //   section: "senior",
  //   dataFile: "assets/data/senior/region",
  //   showLegend: true,
  //   labelStyle: "onBar",
  //   title:"Region",
  //   subtitle:"What region are you from?"
  // })

  // sota.multiLineGraph({
  //   section: "senior",
  //   dataFile: "assets/data/senior/gender",
  //   showLegend: true,
  //   inputIsPercentage: false,
  //   displayPercentage: true,
  //   title: "Gender Identity",
  //   subtitle:"What is your gender identity?"
  // })

  // // sota.stackedBarChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/happiness",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   title: "Happiness",
  // //   subtitle: "Generally speaking, do you consider yourself happy at Andover?",
  // // });

  // // sota.groupedBarChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/sexual_activity",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   totalResp: { 2018: 230, 2019: 361, 2020: 524, 2021: 519 },
  // //   title: "Sexual Activity",
  // //   subtitle: "What form(s) of sexual activity have you engaged in?",
  // // });

  // // sota.stackedColumnChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/alcohol",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   title: "Have you ever consumed alcohol?",
  // // });

  // // sota.stackedColumnChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/marijuana",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   title: "Have you ever consumed marijuana?",
  // // });

  // // sota.stackedColumnChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/rape_culture",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   title: "Do you believe there is rape culture at Andover?",
  // //   subtitle:
  // //     "Rape culture: “a society or environment whose prevailing social attitudes have the effect of normalizing or trivializing sexual assault and abuse” (Oxford Dictionaries).",
  // // });

  // // sota.stackedColumnChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/sexual_orientation",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   title: "sexuality over the years",
  // //   subtitle: "What is your sexual orientation?",
  // // });

  // // sota.stackedColumnChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/feminist",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   title: "Do you consider yourself a feminist?",
  // // });

  // // sota.stackedColumnChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/relationships",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   title: "Committed relationships",
  // //   subtitle: "Have you ever been in a committed relationship?",
  // // });

  // // sota.stackedBarChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/family",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   title: "Andover and Family",
  // //   subtitle:
  // //     "Has attending Andover affected your relationship ith your family?",
  // // });

  // // sota.stackedColumnChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/come_to_andover",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   title:
  // //     "IN RETROSPECT, WOULD YOU STILL MAKE THE DECISION TO COME TO ANDOVER?",
  // //   // subtitle: "Have you ever been in a committed relationship?"
  // // });

  // // sota.stackedColumnChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/children",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   title: "WOULD YOU WANT YOUR CHILDREN TO ATTEND ANDOVER?",
  // //   // subtitle: "Have you ever been in a committed relationship?"
  // // });

  // // sota.stackedBarChart({
  // //   section: "senior",
  // //   dataFile: "assets/data/senior/political_affiliation",
  // //   showLegend: true,
  // //   labelStyle: "onBar",
  // //   groupLabelStyle: "onBar",
  // //   title: "Political Affiliation",
  // //   subtitle: "What is your political affiliation?",
  // // });

  sota.sotaMasonry();

  const _refreshMasonry = () => {
    document.querySelectorAll(".sota-section-inner").forEach(section => {
      if (!section.classList.contains("sota-content-section")) {
        new Masonry(section, { itemSelector: ".sota-module", columnWidth: ".sota-module", gutter: 48 });
      }
    });
  };
  setTimeout(_refreshMasonry, 2000);
  setTimeout(_refreshMasonry, 5000);
  setTimeout(_refreshMasonry, 10000);
};

// Add a resize event listener to ensure charts scale properly when the window size changes.
window.addEventListener("resize", () => {
  sota.sotaMasonry(); // Recalculate layout on window resize
});

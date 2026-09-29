/**
 * Plain-language notes for items whose wording is slang, ambiguous or has a
 * scope question ("does X count?"). Search Console queries about individual
 * items ("kissed for more than two hours consecutively meaning", MPS, the
 * question mark) and the long-standing confusing phrases come first.
 *
 * Rules: keep them short, clinical and non-graphic. A note says what a phrase
 * means or what counts; it never describes an act. Items that are already
 * plain are left without a note.
 */
export const QUESTION_NOTES: Record<number, { term: string; note: string }> = {
  1: {
    term: 'Held hands romantically',
    note: 'Holding hands as a couple or on a date. Holding a friend’s or a relative’s hand doesn’t count.',
  },
  2: {
    term: 'Been on a date',
    note: 'Any outing you both understood to be a date, even a single one that went nowhere.',
  },
  3: {
    term: 'Been in a relationship',
    note: 'A romantic relationship you both agreed on. How long it lasted doesn’t matter.',
  },
  4: {
    term: 'Danced without leaving room for Jesus',
    note: 'A joke from church-school dances, where chaperones told couples to leave space between them “for Jesus”. Check it if you have slow-danced pressed close to someone.',
  },
  5: {
    term: 'Kissed a non-family member',
    note: 'Any kiss with someone who is not a relative, including a peck on the cheek.',
  },
  7: {
    term: 'French kissed',
    note: 'Kissing with tongues, often called making out.',
  },
  10: {
    term: 'Kissed horizontally',
    note: 'Kissing while lying down together, on a bed, couch or the floor, rather than standing or sitting.',
  },
  11: {
    term: 'Had a hickey',
    note: 'A bruise-like mark left by kissing or sucking on the skin, usually on the neck. Giving or getting one both count.',
  },
  13: {
    term: 'Kissed someone below the belt',
    note: 'Kissing a partner anywhere below the waistline. It is a separate, milder item from the oral sex questions later on.',
  },
  14: {
    term: 'Kissed for more than two hours consecutively',
    note: 'A single make-out session that lasted over two hours with only short breaks.',
  },
  15: {
    term: 'Played a game involving stripping',
    note: 'A game where losing a round means taking off a piece of clothing, such as strip poker. Playing counts, however many layers you kept on.',
  },
  16: {
    term: 'Seen or been seen in a sensual context',
    note: 'Being naked or partly undressed in front of someone, or seeing them that way, in a romantic or sexual situation. Changing rooms and doctor visits do not count.',
  },
  22: {
    term: 'Seen or read pornographic material',
    note: 'Any sexually explicit pictures, video or writing, seen at least once.',
  },
  23: {
    term: 'Massaged or been massaged sensually',
    note: 'A massage meant to be romantic or arousing. A professional, sports or medical massage doesn’t count.',
  },
  24: {
    term: 'Gone through the motions of intercourse while fully dressed',
    note: 'Often called dry humping: moving together as if having sex while both people keep their clothes on.',
  },
  25: {
    term: 'Undressed or been undressed by a non-family member',
    note: 'Someone else took off your clothes, or you took off theirs. The original Rice wording is “by a MPS” (see “What does MPS mean” below); items 26 and 41 were adapted the same way.',
  },
  26: {
    term: 'Showered with a non-family member',
    note: 'Sharing a shower with a partner. Separate stalls in a gym or dorm don’t count.',
  },
  27: {
    term: 'Fondled',
    note: 'Touching or caressing a part of someone’s body in a sexual way, or having it done to you. Items 27 to 29 differ only by body part.',
  },
  30: {
    term: 'Had or given “blue balls”',
    note: 'Slang for the discomfort some people feel after prolonged arousal without release. Check it if it happened to you or to a partner because of you.',
  },
  31: {
    term: 'Someone else’s manipulation',
    note: '“Manipulation” here means physical touch by another person, not emotional manipulation.',
  },
  32: {
    term: 'Sent a sexually explicit text',
    note: 'Only sending counts for this item. Photos are covered by the next question.',
  },
  33: {
    term: 'Sent or received explicit photographs',
    note: 'Either direction counts, including a photo you received without asking for it.',
  },
  35: {
    term: 'Cheated on a significant other',
    note: 'Doing something romantic or sexual with someone else while in a relationship you both understood to be exclusive.',
  },
  36: {
    term: 'Purchased contraceptives',
    note: 'Buying any form of birth control, such as condoms or the pill, for yourself or a partner.',
  },
  41: {
    term: 'Spent the night with someone you were attracted to',
    note: 'Sleeping over in the same bed or room as someone you were attracted to. Nothing else has to happen.',
  },
  43: {
    term: 'Kicked a roommate out',
    note: 'Asking a roommate to leave, or to stay out for a while, so you could have privacy with a partner.',
  },
  44: {
    term: 'Ingested alcohol in a non-religious context',
    note: 'Any drink outside of a religious ceremony. Communion wine does not count; a sip at a party does.',
  },
  45: {
    term: 'Played a drinking game',
    note: 'Any game where drinking alcohol is part of the rules, such as beer pong or flip cup.',
  },
  46: {
    term: 'Been drunk',
    note: 'More than feeling a drink or two. Check it if you would honestly describe yourself as having been drunk.',
  },
  47: {
    term: 'Faked sobriety',
    note: 'Pretending to be sober in front of parents, teachers or other adults while you had been drinking or using.',
  },
  48: {
    term: 'Severe memory loss due to alcohol',
    note: 'A blackout: being unable to remember a stretch of time because of drinking, not just being fuzzy on details.',
  },
  49: {
    term: 'Used tobacco',
    note: 'Cigarettes, cigars, pipes, hookah or chewing tobacco. The wording doesn’t mention vapes; count a nicotine vape if you think of it as tobacco use.',
  },
  50: {
    term: 'Used marijuana',
    note: 'Any form (smoked, vaped or eaten), whether or not it was legal where you were.',
  },
  51: {
    term: 'A drug stronger than marijuana',
    note: 'Any other recreational drug, or a prescription drug taken to get high rather than as prescribed.',
  },
  53: {
    term: 'Judicial affairs representative',
    note: 'Many US colleges call the office that handles student conduct cases “judicial affairs”. Being sent to a principal, a dean or that office for breaking the rules counts.',
  },
  54: {
    term: 'Disciplinary probation or suspension',
    note: 'A formal penalty from a school or college, not just a warning.',
  },
  55: {
    term: 'Had the police called on you',
    note: 'Someone called the police because of something you did, whether or not officers came.',
  },
  57: {
    term: 'Had the police question you',
    note: 'Being questioned about something you were suspected of or involved in. Giving a statement as a witness usually isn’t what the item means.',
  },
  60: {
    term: 'Convicted of a crime',
    note: 'A court found you guilty, or you pleaded guilty. In the US most traffic tickets are infractions, not criminal convictions.',
  },
  61: {
    term: 'Convicted of a felony',
    note: 'In the US, a felony is the more serious category of crime, generally one punishable by more than a year in prison.',
  },
  62: {
    term: 'Committed an act of vandalism',
    note: 'Deliberately damaging or defacing property that isn’t yours, such as graffiti.',
  },
  72: {
    term: 'A bed not belonging to you or your partner',
    note: 'For example a friend’s, a relative’s or a hotel bed.',
  },
  74: {
    term: 'Non-participating third party in the same room',
    note: 'Someone else was in the room, for example a sleeping roommate, but was not involved.',
  },
  75: {
    term: 'Joined the mile high club',
    note: 'Slang for having sex on a plane in flight.',
  },
  76: {
    term: 'Booty call',
    note: 'Meeting up with someone just for sex, usually arranged late at night, when you were not in a relationship with them.',
  },
  77: {
    term: 'Traveled 100 or more miles',
    note: 'The main reason for the trip was to see someone for sex. 100 miles is about 160 km.',
  },
  81: {
    term: 'With a virgin',
    note: 'It was your partner’s first time.',
  },
  83: {
    term: 'Had a pregnancy scare',
    note: 'A time you or a partner worried about an unplanned pregnancy, whatever the outcome.',
  },
  86: {
    term: 'Committed an act of voyeurism',
    note: 'Deliberately watching someone undress or have sex without their knowledge. This is a crime in most places.',
  },
  87: {
    term: 'Snuck out of the house at night',
    note: 'Leaving home at night without the knowledge of the people you lived with.',
  },
  90: {
    term: 'Had a sexually transmitted infection',
    note: 'Any diagnosed STI, including one that was treated and cleared.',
  },
  94: {
    term: 'Two or more distinct acts within 24 hours',
    note: 'A stricter version of item 91: separate occasions with at least two different people within one day.',
  },
  95: {
    term: 'Five or more partners',
    note: 'Counted over your whole life, not at the same time.',
  },
  99: {
    term: 'STI test due to reasonable suspicion',
    note: 'A test because of symptoms or a possible exposure, such as a partner’s positive result. A routine check-up doesn’t count.',
  },
  100: {
    term: 'Been involved in BDSM',
    note: 'An umbrella term for consensual activities involving bondage and discipline, dominance and submission, or sadism and masochism. Any involvement counts.',
  },
};

/** The original Rice University wording used "MPS". Explained on the questions page. */
export const MPS_NOTE =
  'MPS stands for "member of the preferred sex": the gender you are attracted to. The version on this site uses gender-neutral wording such as "non-family member" or "someone" instead, so the meaning is the same whoever you are attracted to.';

/**
 * Items people most often ask about, linked from the top of the questions page.
 * Item 14 is the one with Search Console impressions; the rest are the phrases
 * readers most often misread.
 */
export const MOST_ASKED: { id: number; label: string }[] = [
  { id: 4, label: 'Room for Jesus' },
  { id: 10, label: 'Kissed horizontally' },
  { id: 14, label: 'Two hours of kissing' },
  { id: 16, label: 'Sensual context' },
  { id: 24, label: 'Motions while dressed' },
  { id: 30, label: 'Blue balls' },
  { id: 31, label: '“Manipulation”' },
  { id: 53, label: 'Judicial affairs' },
  { id: 75, label: 'Mile high club' },
  { id: 76, label: 'Booty call' },
];

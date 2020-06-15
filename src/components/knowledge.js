
// Goal: Quick onboarding
// Reduce friction
// Provide Familiarity
// Faciliter recherche indice/découverte infos
export const hardToNavigateRefactors = [
  {
    smell: "All in one", // junk drawer
    consequence: "Impossible to modify, brain toll, meaningless failures",
    refactor: "Use naming to scope",
    funfact: "Way better ci infos",
  },
  {
    // unfocused
    smell: "Mixed steps",
    consequence: "Hard to navigate",
    refactor: "Arrange,Act, assert",
    funfact: "if applying structure breaks some assertions, you have discovered another AAA structure",
  },
  {
    smell: "Unicorn",
    consequence: "Relearn everytime, long time to onboarding",
    refactor: "Standardize",
    funfact: "",
  },
];

// Goal: Understand quickly what makes a test pass/fail
// what matters
// How it works/the steps
// Reduce debug area
// drowning in details, low level imperative, info dump
export const unclearRefactors = [
  {
    // smell: "Lost in details", // meaningless recipe . Miromanagement -> drill sergeatn -> detail oriented -> imperative recipe
    smell: "Imperative recipe",
    consequence: "Can't understand what happens",
    refactor: "Extract domain helpers", // no clue what you're trying to do
  },
  {
    smell: "Lost in details", // tt au mm niveau de détail, plus rien ne ressort -> lost in details ?
    consequence: "Impossible to know what makes the test pass/fail",
    refactor: "Highlight POI",
  },
  {
    smell: "Suspicious values",
    consequence: "Programming by superstition, debug time loste",
    refactor: "Use placeholder",
  },
  {
    smell: "Duplicate naming",
    consequence: "Harder comprehension, meaning opportunity lost",
    refactor: "Use role as name",
  },
];


// Goal: Give as much clues as possible on what the problem is. You should not have to open the test to understand the problem
export const uselessFailureRefactors = [
  {
    smell: "Meaningless values", // meaningless values, no clue, random values
    consequence: "No clue what or where the problem is, have to open test",
    refactor: "Provide context", // use better matcher, improve failure message,
  },
  {
    smell: "Giant diff", // Manual diff, giant diff
    consequence: "Up to you to find what the  problem is and what it means",
    refactor: "Pluck indentifier value", // pluck identifier
  },
  {
    smell: "Trace fail", // No id, random dump, can't id owner, no owner id, missing id
    consequence: "Can't tell why it's wrong, don't know what i was expecting, then can't tell why what i received is wrong",
    refactor: "Tag objects",
  },
];

// Goal: Test should break only for the right reason.
// behavior change, not refactor
// logic broken, not collab broken
export const brokenButWorkingRefactors = [
  {
    smell: "Implementation aware", // fails on refactor, works but fails
    consequence: "Breaks on refactor",
    refactor: "Test via public api",
  },
  {
    // mystery guest
    smell: "Environment dependant", // random  failures, can't trace failure, environment dependant/aware
    consequence: "Breaks on unrelated untreacable changes",
    refactor: "Control your data",
  },
  {
    // Overspecified
    // refactor: "Only assert on what matters",
    smell: "Interlinked", // depends on other spec, linked, fails for unrelated details, too specific
    consequence: "Fails if other part of the spec fails",
    refactor: "Relax assertion",
  },
  {
    smell: "Redundant coverage", // depends on collab, fails when other part fail, works but fails
    consequence: "Breaks on collaborator rule change",
    refactor: "Controlled collaborators",
  },
];

export const sections = [
  {
    emoji: "🗺😤",
    title: "Hard to navigate",
  },
  {
    emoji: "🧐🤯",
    title: "Unclear",
  },
  {
    emoji: "📝🤷‍♂️",
    title: "Useless failure",
  },
  {
    emoji: "😵🤠",
    title: "Broken but working",
  },
];

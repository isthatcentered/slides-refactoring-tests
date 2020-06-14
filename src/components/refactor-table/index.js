import * as React from "react";
import theme from "../../theme";
import makeStyleComponent from "../../make-style-component";

const Emoji = makeStyleComponent(
  { fontSize: 72, display: "block", marginRight: ".25em" },
  "span"
);

const FakeTable = makeStyleComponent({
  border: `8px solid ${theme.colors.primaryDark}`,
  background: "white",
});

const Head = makeStyleComponent({
  background: theme.colors.primaryDark,
});

const HeadCell = makeStyleComponent({
  padding: 32,
  fontSize: 72,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  color: "rgba(255,255,255, .9)",
  fontWeight: "bold",
  width: "50%",
});

const Body = makeStyleComponent({
  background: "rgba(106, 36, 147, .05)",
});

const BodyCell = makeStyleComponent({
  padding: 32,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  fontWeight: "bold",
  fontSize: 65,
  width: "50%",
  position: "relative",
});
const Row = makeStyleComponent({
  display: "flex",
  position: "relative",
});

const RefactorArrow = makeStyleComponent(
  {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    height: "100%",
    opacity: 0.75,
    fontSize: 60,
    color: theme.colors.primaryDark,
  },
  "span"
);

const RefactorTableRow = ({
  smell,
  refactor,
  active = false,
}) => (
  <Row
    style={{
      opacity: active ? 1 : 0.3,
      background: active ? "white" : "transparent",
      color: theme.colors.primaryDark,
    }}
  >
    <BodyCell>{smell}</BodyCell>
    <RefactorArrow aria-hidden={true}>→</RefactorArrow>
    <BodyCell>{refactor}</BodyCell>
  </Row>
);

const RefactorTable = ({ children, ...props }) => (
  <div
    {...props}
    style={{
      padding: "2em",
      width: "100%",
      ...props.style,
    }}
  >
    <FakeTable>
      <Head>
        <Row>
          <HeadCell>
            <Emoji>👃</Emoji> Smell
          </HeadCell>
          <HeadCell>
            <Emoji>👷‍♂️</Emoji> Refactor
          </HeadCell>
        </Row>
      </Head>
      <Body>{children}</Body>
    </FakeTable>
  </div>
);

// Goal: Quick onboarding
// Reduce friction
// Provide Familiarity
// Faciliter recherche indice/découverte infos
const structureRefactors = [
  {
    // unfocused
    smell: "Mixed steps",
    consequence: "Hard to navigate",
    refactor: "Arrange,Act, assert",
    funfact: "if applying structure breaks some assertions, you have discovered another AAA structure"
  },
  {
    smell: "Brain dump",
    consequence: "Impossible to modify, brain toll, meaningless failures",
    refactor: "Use naming to scope",
    funfact: "Way better ci infos"
  },
  {
    smell: "Unicorn",
    consequence: "Relearn everytime, logn time to onboarding",
    refactor: "Standardize",
    funfact: ""
  },
];

// Goal: Understand quickly what makes a test pass/fail
// what matters
// How it works/the steps
// Reduce debug area
const expressivenessRefactors = [
  {
    // smell: "Lost in details", // meaningless recipe . Miromanagement -> drill sergeatn -> detail oriented -> imperative recipe
    smell:"Imperative recipe",
    consequence: "Can't understand what happens",
    refactor: "Extract domain helpers", // no clue what you're trying to do
  },
  {
    smell: "Suspicious values",
    consequence: "Programming by superstition, debug time loste",
    refactor: "Use placeholder value",
  },
  {
    smell: "Everything bold", // tt au mm niveau de détail, plus rien ne ressort -> lost in details ?
    consequence: "Impossible to know what makes the test pass/fail",
    refactor: "Highlight POI",
  },
  {
    smell: "Duplicate naming",
    consequence: "Harder comprehension, meaning opportunity lost",
    refactor: "Put naming to work",
  },
];

// Goal: Give as much clues as possible on what the problem is. You should not have to open the test to understand the problem
const feedbackRefactors = [
  {
    smell: "Meaningless values", // meaningless values, no clue, random values
    consequence: "No clue what or where the problem is, have to open test",
    refactor: "Provide context", // use better matcher, improve failure message,
  },
  {
    smell: "Giant diff", // Manual diff, giant diff
    consequence: "Up to you to find what the  problem is and what it means",
    refactor: "Simplify results", // pluck identifier
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
const flexibilityRefactors = [
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

const makeRefactorsTable = (refactors) => ({ active }) => (
  <RefactorTable>
    {refactors.map((props, index) => (
      <RefactorTableRow
        {...props}
        key={index}
        active={active === index || active === undefined}
      />
    ))}
  </RefactorTable>
);

export const StructureRefactors = makeRefactorsTable(
  structureRefactors
);

export const ExpressivenessRefactors = makeRefactorsTable(
  expressivenessRefactors
);

export const FeedbackRefactors = makeRefactorsTable(
  feedbackRefactors
);

export const FlexibilityRefactors = makeRefactorsTable(
  flexibilityRefactors
);

import * as React from "react";
import theme from "../../theme";
import makeStyleComponent from "../../make-style-component";
import {
  brokenButWorkingRefactors,
  hardToNavigateRefactors,
  unclearRefactors,
  uselessFailureRefactors,
} from "../knowledge";

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
  background: theme.colors.primary100,
});

const BodyCell = makeStyleComponent({
  padding: "32px 48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  fontWeight: "bold",
  fontSize: 65,
  width: "50%",
  position: "relative",
  textAlign: "center",
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
const TableName = makeStyleComponent({
  fontStyle: "italic",
  paddingTop: 32,
  textAlign: "center",
  color :theme.colors.primaryDark
})
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

const RefactorTable = ({ children, name, ...props }) => (
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
    <TableName>{name}</TableName>
  </div>
);

const makeRefactorsTable = (refactors, tableName) => ({
  active,
}) => (
  <RefactorTable name={tableName}>
    {refactors.map((props, index) => (
      <RefactorTableRow
        {...props}
        key={index}
        active={active === index || active === undefined}
      />
    ))}
  </RefactorTable>
);

export const HardToNavigateRefactors = makeRefactorsTable(
  hardToNavigateRefactors,
  "Hard to navigate"
);

export const UnclearRefactors = makeRefactorsTable(
  unclearRefactors,
  "Unclear"
);

export const UselessFailureRefactors = makeRefactorsTable(
  uselessFailureRefactors,
  "Useless failure"
);

export const BrokenButWorkingRefactors = makeRefactorsTable(
  brokenButWorkingRefactors,
  "Broken but working"
);

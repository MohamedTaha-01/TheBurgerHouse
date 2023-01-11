export default function MenuLink({
  tabName,
  currentTab,
  setCurrentTab,
  tabNumber,
  children,
}) {
  return (
    <li>
      <h6
        className={currentTab === tabNumber ? "menu-link active" : "menu-link"}
        onClick={() => setCurrentTab(tabNumber)}
      >
        {tabName}
      </h6>
    </li>
  );
}

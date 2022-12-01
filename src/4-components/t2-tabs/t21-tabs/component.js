export const createT21 = ({
  type,
}) => {

  return `
<div class="act-tabs-container">
  <div class="act-tabs">
    <div class="act-tabs__tab act-tabs__tab__active">
      Active Tab
    </div>
    <div class="act-tabs__tab">
      Inactive Tab
    </div>
    <div class="act-tabs__tab">
      Inactive Tab
    </div>
  </div>
  <div class="act-tabs__content act-tabs__content__demo">
    Tab Content
  </div>
</div>
`;
};
